"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AppLayout } from "@/components/app-layout";
import {
  getSyncCode,
  newSyncCode,
  setSyncCode,
  clearSyncCode,
  pullAndMerge,
} from "@/lib/sync";
import { resetProgress } from "@/lib/progress";

export default function SettingsPage() {
  const [syncCode, setSyncCodeState] = useState<string | null>(null);
  const [linkInput, setLinkInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [syncMsg, setSyncMsg] = useState<string | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const [resetDone, setResetDone] = useState(false);

  // Hydrate from localStorage after mount (avoids SSR mismatch)
  useEffect(() => {
    setSyncCodeState(getSyncCode());
  }, []);

  async function handleEnableSync() {
    const code = newSyncCode();
    setSyncCode(code);
    setSyncCodeState(code);
    setSyncing(true);
    setSyncMsg(null);
    await pullAndMerge();
    setSyncing(false);
    setSyncMsg("Sync enabled. Your progress is now backed up to this code.");
  }

  function handleCopy() {
    if (!syncCode) return;
    navigator.clipboard.writeText(syncCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  function handleDisableSync() {
    clearSyncCode();
    setSyncCodeState(null);
    setSyncMsg("Sync turned off. Your local progress is unchanged.");
  }

  async function handleLinkDevice() {
    const trimmed = linkInput.trim().toLowerCase();
    if (!trimmed) return;
    setSyncCode(trimmed);
    setSyncCodeState(trimmed);
    setLinkInput("");
    setSyncing(true);
    setSyncMsg(null);
    await pullAndMerge();
    setSyncing(false);
    setSyncMsg("Linked! Progress from the other device has been merged in.");
  }

  function handleReset() {
    resetProgress();
    setConfirmReset(false);
    setResetDone(true);
  }

  return (
    <AppLayout>
      <div className="mx-auto max-w-2xl px-4 py-8 space-y-6">
        {/* Page heading */}
        <div>
          <Link
            href="/dashboard"
            className="text-sm mb-3 inline-block"
            style={{ color: "var(--muted)" }}
          >
            &larr; Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold" style={{ color: "var(--ink)" }}>
            Settings
          </h1>
        </div>

        {/* ── Sync card ─────────────────────────────────────────────── */}
        <section className="card card-tight p-6 space-y-4">
          <div>
            <h2 className="text-base font-semibold" style={{ color: "var(--ink)" }}>
              Sync across devices
            </h2>
            <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
              Your progress is stored privately, keyed to a short code only you
              hold. Sync runs automatically on the deployed site — no account
              required.
            </p>
          </div>

          {syncCode ? (
            <div className="space-y-3">
              <div
                className="flex items-center gap-3 rounded-lg px-4 py-3"
                style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
              >
                <span
                  className="flex-1 font-mono text-sm tracking-widest select-all"
                  style={{ color: "var(--ink)" }}
                >
                  {syncCode}
                </span>
                <button
                  onClick={handleCopy}
                  className="text-xs font-semibold px-3 py-1.5 rounded-md transition-colors shrink-0"
                  style={{
                    background: copied ? "var(--accent)" : "var(--accent-soft)",
                    color: copied ? "#fff" : "var(--accent-strong)",
                  }}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <button
                onClick={handleDisableSync}
                className="text-sm font-medium"
                style={{ color: "var(--muted)" }}
              >
                Turn off sync
              </button>
            </div>
          ) : (
            <button
              onClick={handleEnableSync}
              disabled={syncing}
              className="w-full py-2.5 rounded-xl text-sm font-semibold transition-colors disabled:opacity-50"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              {syncing ? "Setting up…" : "Enable sync & create my code"}
            </button>
          )}

          {syncMsg && (
            <p className="text-sm" style={{ color: "var(--accent-strong)" }}>
              {syncMsg}
            </p>
          )}
        </section>

        {/* ── Link another device card ───────────────────────────────── */}
        <section className="card card-tight p-6 space-y-4">
          <div>
            <h2 className="text-base font-semibold" style={{ color: "var(--ink)" }}>
              Link another device
            </h2>
            <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
              Paste the sync code from your other device to merge its progress
              into this one.
            </p>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={linkInput}
              onChange={(e) => setLinkInput(e.target.value)}
              placeholder="e.g. a3bx9fmq2kzr"
              className="flex-1 text-sm px-3 py-2 rounded-lg font-mono"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                color: "var(--ink)",
                outline: "none",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "var(--accent)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "var(--border)")
              }
            />
            <button
              onClick={handleLinkDevice}
              disabled={!linkInput.trim() || syncing}
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-40"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              {syncing ? "Syncing…" : "Link"}
            </button>
          </div>
        </section>

        {/* ── Reset progress card ────────────────────────────────────── */}
        <section
          className="card card-tight p-6 space-y-4"
          style={{ border: "1px solid #fecaca" }}
        >
          <div>
            <h2 className="text-base font-semibold" style={{ color: "#dc2626" }}>
              Reset progress
            </h2>
            <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
              Permanently deletes all completed lessons, quiz scores, study
              sessions, spaced-repetition history, and notes stored on this
              device. This cannot be undone.
            </p>
          </div>

          {resetDone ? (
            <p className="text-sm font-medium" style={{ color: "#16a34a" }}>
              Progress has been reset. Refresh the page to start fresh.
            </p>
          ) : confirmReset ? (
            <div className="flex gap-3">
              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-lg text-sm font-semibold"
                style={{ background: "#dc2626", color: "#fff" }}
              >
                Yes, reset everything
              </button>
              <button
                onClick={() => setConfirmReset(false)}
                className="px-4 py-2 rounded-lg text-sm font-medium"
                style={{
                  background: "var(--surface-2)",
                  color: "var(--muted)",
                  border: "1px solid var(--border)",
                }}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setConfirmReset(true)}
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              style={{
                background: "#fef2f2",
                color: "#dc2626",
                border: "1px solid #fecaca",
              }}
            >
              Reset all progress…
            </button>
          )}
        </section>
      </div>
    </AppLayout>
  );
}
