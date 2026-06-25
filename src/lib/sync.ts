// Cross-device sync module for dat-prep
//
// Syncs the single localStorage key "dat-prep-progress" (ProgressData) to
// a Neon table: study_progress(sync_code text pk, data jsonb, updated_at timestamptz)
// via the /api/sync Route Handler.
//
// Sync code is stored separately under "dat-sync-code" so it survives a
// progress reset (progress.ts only clears "dat-prep-progress" and
// "dat-prep-exam-attempts" on version bump — not the sync code).
//
// API base: relative path works on the deployed Next.js origin.
// If you need to call from a native app set API_BASE to your Vercel domain.
const API_BASE = ""; // e.g. "https://dat-prep.vercel.app" — empty = relative

const SYNC_CODE_KEY = "dat-sync-code";
const PROGRESS_KEY = "dat-prep-progress"; // must match progress.ts STORAGE_KEY

// ── Helpers ──────────────────────────────────────────────────────────────────

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

// ── Sync-code management ──────────────────────────────────────────────────────

export function syncConfigured(): boolean {
  return true; // always available — no external service key needed beyond DATABASE_URL on server
}

export function getSyncCode(): string | null {
  if (!isBrowser()) return null;
  return localStorage.getItem(SYNC_CODE_KEY);
}

/** Generate a random 12-character alphanumeric id */
export function newSyncCode(): string {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  const arr = new Uint8Array(12);
  crypto.getRandomValues(arr);
  arr.forEach((b) => (code += chars[b % chars.length]));
  return code;
}

export function setSyncCode(code: string): void {
  if (!isBrowser()) return;
  localStorage.setItem(SYNC_CODE_KEY, code);
}

export function clearSyncCode(): void {
  if (!isBrowser()) return;
  localStorage.removeItem(SYNC_CODE_KEY);
}

// ── Local progress read/write (mirrors what progress.ts does internally) ──────

function readLocal(): object | null {
  if (!isBrowser()) return null;
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? (JSON.parse(raw) as object) : null;
  } catch {
    return null;
  }
}

function writeLocal(data: object): void {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
    // Dispatch a storage event so any component listening via window.addEventListener
    // ("storage", ...) picks up the change. The native "storage" event only fires in
    // OTHER tabs; we synthesise it so same-tab listeners (if any) also react.
    // progress.ts itself does not register a storage listener — it reads on demand —
    // so this primarily supports future listeners and the SyncInit component.
    window.dispatchEvent(
      new StorageEvent("storage", {
        key: PROGRESS_KEY,
        newValue: JSON.stringify(data),
        storageArea: localStorage,
      })
    );
  } catch {
    // localStorage unavailable or full
  }
}

// ── Deep merge ────────────────────────────────────────────────────────────────
//
// Merge strategy per ProgressData field:
//
//   completedLessons      string[]   → union (Set)
//   quizResults           QuizResult[]  → union by composite key sectionSlug+chapterSlug+date
//   totalQuestionsAnswered number     → MAX
//   studySessions         StudySession[]  → union by date, sum minutes for same date
//   lastStudiedPath       string|null  → whichever is non-null; prefer remote if both set
//   lastActiveDate        string|null  → MAX ISO date string
//   targetTestDate        string|null  → prefer non-null; if both, prefer local
//   bookmarkedQuestions   string[]   → union (Set)
//   incorrectQuestionIds  string[]   → union (Set)
//   questionHistory       Record<id, QuestionStats>  → per-id: keep entry with higher streak;
//                                                       on tie keep later nextReviewDate
//   dailyGoal             number     → MAX (more ambitious wins)
//   lessonNotes           Record<key, string>  → union keys; on conflict keep longer note

type AnyRecord = Record<string, unknown>;

function mergeProgress(local: AnyRecord, remote: AnyRecord): AnyRecord {
  const merged: AnyRecord = { ...local };

  // completedLessons: union
  merged.completedLessons = Array.from(
    new Set([
      ...((local.completedLessons as string[]) || []),
      ...((remote.completedLessons as string[]) || []),
    ])
  );

  // quizResults: union by sectionSlug+chapterSlug+date
  const quizKey = (r: AnyRecord) =>
    `${r.sectionSlug}|${r.chapterSlug}|${r.date}`;
  const quizMap = new Map<string, AnyRecord>();
  for (const r of (local.quizResults as AnyRecord[]) || []) quizMap.set(quizKey(r), r);
  for (const r of (remote.quizResults as AnyRecord[]) || []) {
    const k = quizKey(r);
    if (!quizMap.has(k)) quizMap.set(k, r);
  }
  merged.quizResults = Array.from(quizMap.values());

  // totalQuestionsAnswered: MAX
  merged.totalQuestionsAnswered = Math.max(
    (local.totalQuestionsAnswered as number) || 0,
    (remote.totalQuestionsAnswered as number) || 0
  );

  // studySessions: union by date, summing minutes for the same date
  const sessMap = new Map<string, number>();
  for (const s of (local.studySessions as AnyRecord[]) || []) {
    sessMap.set(s.date as string, (sessMap.get(s.date as string) || 0) + (s.minutes as number));
  }
  for (const s of (remote.studySessions as AnyRecord[]) || []) {
    sessMap.set(s.date as string, (sessMap.get(s.date as string) || 0) + (s.minutes as number));
  }
  merged.studySessions = Array.from(sessMap.entries()).map(([date, minutes]) => ({ date, minutes }));

  // lastStudiedPath: prefer non-null; if both, prefer local (most recent action)
  merged.lastStudiedPath =
    (local.lastStudiedPath as string | null) ??
    (remote.lastStudiedPath as string | null) ??
    null;

  // lastActiveDate: MAX ISO date
  const lad = (local.lastActiveDate as string | null) ?? "";
  const rad = (remote.lastActiveDate as string | null) ?? "";
  merged.lastActiveDate = (lad > rad ? lad : rad) || null;

  // targetTestDate: prefer local; fallback to remote
  merged.targetTestDate =
    (local.targetTestDate as string | null) ??
    (remote.targetTestDate as string | null) ??
    null;

  // bookmarkedQuestions: union
  merged.bookmarkedQuestions = Array.from(
    new Set([
      ...((local.bookmarkedQuestions as string[]) || []),
      ...((remote.bookmarkedQuestions as string[]) || []),
    ])
  );

  // incorrectQuestionIds: union
  merged.incorrectQuestionIds = Array.from(
    new Set([
      ...((local.incorrectQuestionIds as string[]) || []),
      ...((remote.incorrectQuestionIds as string[]) || []),
    ])
  );

  // questionHistory: per-id, keep higher streak; on tie keep later nextReviewDate
  const localQH = (local.questionHistory as Record<string, AnyRecord>) || {};
  const remoteQH = (remote.questionHistory as Record<string, AnyRecord>) || {};
  const mergedQH: Record<string, AnyRecord> = { ...localQH };
  for (const [id, remoteStats] of Object.entries(remoteQH)) {
    const localStats = mergedQH[id];
    if (!localStats) {
      mergedQH[id] = remoteStats;
    } else {
      const ls = localStats.streak as number;
      const rs = remoteStats.streak as number;
      if (rs > ls) {
        mergedQH[id] = remoteStats;
      } else if (rs === ls) {
        // Keep later nextReviewDate (more lenient schedule wins — avoids forcing immediate re-review)
        const lnr = (localStats.nextReviewDate as string) || "";
        const rnr = (remoteStats.nextReviewDate as string) || "";
        mergedQH[id] = lnr >= rnr ? localStats : remoteStats;
      }
      // else local streak is higher — keep local (already in mergedQH)
    }
  }
  merged.questionHistory = mergedQH;

  // dailyGoal: MAX
  merged.dailyGoal = Math.max(
    (local.dailyGoal as number) ?? 30,
    (remote.dailyGoal as number) ?? 30
  );

  // lessonNotes: union keys; on conflict keep the longer note
  const localNotes = (local.lessonNotes as Record<string, string>) || {};
  const remoteNotes = (remote.lessonNotes as Record<string, string>) || {};
  const mergedNotes: Record<string, string> = { ...localNotes };
  for (const [key, remoteNote] of Object.entries(remoteNotes)) {
    const localNote = mergedNotes[key] || "";
    mergedNotes[key] = remoteNote.length > localNote.length ? remoteNote : localNote;
  }
  merged.lessonNotes = mergedNotes;

  return merged;
}

// ── Pull & merge ──────────────────────────────────────────────────────────────

export async function pullAndMerge(): Promise<void> {
  if (!isBrowser()) return;
  const code = getSyncCode();
  if (!code) return;

  try {
    const res = await fetch(`${API_BASE}/api/sync?code=${encodeURIComponent(code)}`);
    if (!res.ok) return;
    const json = (await res.json()) as { data: AnyRecord | null };
    if (!json.data) return; // nothing stored remotely yet

    const local = readLocal() as AnyRecord | null;
    const merged = mergeProgress(local ?? {}, json.data);
    writeLocal(merged);
  } catch {
    // Network error — silent, local data is authoritative
  }
}

// ── Push (debounced) ──────────────────────────────────────────────────────────

let pushTimer: ReturnType<typeof setTimeout> | null = null;

async function doPush(): Promise<void> {
  if (!isBrowser()) return;
  const code = getSyncCode();
  if (!code) return;
  const data = readLocal();
  if (!data) return;

  try {
    await fetch(`${API_BASE}/api/sync`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, data }),
    });
  } catch {
    // Network error — silent
  }
}

export function push(): void {
  if (pushTimer) clearTimeout(pushTimer);
  pushTimer = setTimeout(() => {
    pushTimer = null;
    doPush();
  }, 1500);
}

// ── Auto-push on local changes ────────────────────────────────────────────────
// progress.ts calls localStorage.setItem("dat-prep-progress", ...) directly.
// The browser fires "storage" events only in OTHER tabs for native writes,
// but our writeLocal() above synthesises one for same-tab merges.
// We also listen to the native event so changes from other same-origin tabs
// (or from progress.ts writes) trigger a push.

let storageListenerInstalled = false;

function ensureStorageListener(): void {
  if (!isBrowser() || storageListenerInstalled) return;
  storageListenerInstalled = true;
  window.addEventListener("storage", (e: StorageEvent) => {
    if (e.key === PROGRESS_KEY) {
      push();
    }
  });
}

// ── init ──────────────────────────────────────────────────────────────────────
// Call once on app load (e.g. from SyncInit component).
// Pulls remote → merges local, then arms the auto-push listener.

export async function init(): Promise<void> {
  if (!isBrowser()) return;
  ensureStorageListener();
  await pullAndMerge();
}
