// Route Handler: /api/sync
// Provides cross-device progress sync via a Neon postgres table:
//   study_progress(sync_code text PRIMARY KEY, data jsonb, updated_at timestamptz)
//
// GET  /api/sync?code=<sync_code>  → { data: <jsonb | null> }
// POST /api/sync  body: { code, data }  → upsert + { ok: true }
// OPTIONS /api/sync  → CORS preflight

import { neon } from "@neondatabase/serverless";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function cors(res: Response): Response {
  const next = new Response(res.body, res);
  Object.entries(CORS_HEADERS).forEach(([k, v]) => next.headers.set(k, v));
  return next;
}

function getDb() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  return neon(url);
}

export async function OPTIONS(_req: Request): Promise<Response> {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function GET(request: Request): Promise<Response> {
  const sql = getDb();
  if (!sql) {
    return cors(
      Response.json({ error: "DATABASE_URL not configured" }, { status: 503 })
    );
  }

  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  if (!code) {
    return cors(Response.json({ error: "Missing ?code" }, { status: 400 }));
  }

  try {
    const rows = await sql`
      SELECT data FROM study_progress WHERE sync_code = ${code} LIMIT 1
    `;
    const data = rows.length > 0 ? rows[0].data : null;
    return cors(Response.json({ data }));
  } catch (err) {
    console.error("[sync GET]", err);
    return cors(Response.json({ error: "DB error" }, { status: 500 }));
  }
}

export async function POST(request: Request): Promise<Response> {
  const sql = getDb();
  if (!sql) {
    return cors(
      Response.json({ error: "DATABASE_URL not configured" }, { status: 503 })
    );
  }

  let body: { code?: string; data?: unknown };
  try {
    body = await request.json();
  } catch {
    return cors(Response.json({ error: "Invalid JSON body" }, { status: 400 }));
  }

  const { code, data } = body;
  if (!code || data === undefined) {
    return cors(
      Response.json({ error: "Body must include { code, data }" }, { status: 400 })
    );
  }

  try {
    await sql`
      INSERT INTO study_progress (sync_code, data, updated_at)
      VALUES (${code}, ${JSON.stringify(data)}, now())
      ON CONFLICT (sync_code)
      DO UPDATE SET data = EXCLUDED.data, updated_at = now()
    `;
    return cors(Response.json({ ok: true }));
  } catch (err) {
    console.error("[sync POST]", err);
    return cors(Response.json({ error: "DB error" }, { status: 500 }));
  }
}
