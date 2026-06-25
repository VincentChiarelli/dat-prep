"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { DAT_SECTIONS } from "@/lib/dat-constants";
import {
  getTasks,
  addTask,
  toggleTask,
  deleteTask,
  type Task,
} from "@/lib/planner";

// ── component ─────────────────────────────────────────────────────────────────

export default function PlannerPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [ready, setReady] = useState(false);
  const [newText, setNewText] = useState("");
  const [newDate, setNewDate] = useState("");
  const textRef = useRef<HTMLInputElement>(null);

  // Load tasks and subscribe to cross-tab / same-tab changes
  useEffect(() => {
    const refresh = () => setTasks(getTasks());
    refresh();
    setReady(true);
    window.addEventListener("dat-planner-change", refresh);
    return () => window.removeEventListener("dat-planner-change", refresh);
  }, []);

  function handleAdd() {
    const trimmed = newText.trim();
    if (!trimmed) return;
    addTask(trimmed, newDate || undefined);
    setNewText("");
    setNewDate("");
    textRef.current?.focus();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleAdd();
  }

  if (!ready) {
    return (
      <div
        style={{
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ color: "var(--faint)", fontSize: "0.875rem" }}>Loading…</span>
      </div>
    );
  }

  const pending = tasks.filter((t) => !t.done);
  const done = tasks.filter((t) => t.done);

  return (
    <div
      style={{
        minHeight: "100svh",
        background: "var(--bg)",
        color: "var(--ink)",
        padding: "0 1rem 3rem",
      }}
    >
      {/* ── top nav ── */}
      <nav
        style={{
          maxWidth: "42rem",
          margin: "0 auto",
          padding: "1.25rem 0 0",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <Link
          href="/dashboard"
          style={{
            fontSize: "0.8125rem",
            color: "var(--muted)",
            textDecoration: "none",
          }}
        >
          ← Dashboard
        </Link>
      </nav>

      <div style={{ maxWidth: "42rem", margin: "0 auto" }}>

        {/* ── heading ── */}
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            margin: "1.5rem 0 1.5rem",
          }}
        >
          Study planner
        </h1>

        {/* ── add task row ── */}
        <div
          className="card card-tight"
          style={{ padding: "1rem", marginBottom: "1.5rem" }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              alignItems: "stretch",
            }}
          >
            <input
              ref={textRef}
              type="text"
              placeholder="Add a study task…"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{
                flex: "1 1 10rem",
                padding: "0.5rem 0.75rem",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                background: "var(--surface-2)",
                color: "var(--ink)",
                fontSize: "0.9375rem",
                outline: "none",
                minWidth: 0,
              }}
            />
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              style={{
                padding: "0.5rem 0.625rem",
                borderRadius: "8px",
                border: "1px solid var(--border)",
                background: "var(--surface-2)",
                color: "var(--ink)",
                fontSize: "0.875rem",
                outline: "none",
                flexShrink: 0,
              }}
            />
            <button
              onClick={handleAdd}
              disabled={!newText.trim()}
              style={{
                padding: "0.5rem 1.125rem",
                borderRadius: "8px",
                border: "none",
                background: newText.trim() ? "var(--accent)" : "var(--border)",
                color: newText.trim() ? "#fff" : "var(--faint)",
                fontSize: "0.9375rem",
                fontWeight: 600,
                cursor: newText.trim() ? "pointer" : "not-allowed",
                flexShrink: 0,
                transition: "background 0.15s, color 0.15s",
              }}
            >
              Add
            </button>
          </div>
        </div>

        {/* ── task list ── */}
        {tasks.length === 0 && (
          <p
            style={{
              textAlign: "center",
              color: "var(--faint)",
              fontSize: "0.875rem",
              marginBottom: "2rem",
            }}
          >
            No tasks yet. Add one above.
          </p>
        )}

        {pending.length > 0 && (
          <TaskGroup label="To do" tasks={pending} />
        )}

        {done.length > 0 && (
          <TaskGroup label="Done" tasks={done} dimmed />
        )}

        {/* ── curriculum checklist ── */}
        <div style={{ marginTop: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              marginBottom: "0.875rem",
              letterSpacing: "-0.01em",
            }}
          >
            Curriculum
          </h2>
          <div className="card card-tight" style={{ overflow: "hidden" }}>
            {DAT_SECTIONS.map((section, i) => (
              <Link
                key={section.slug}
                href={`/study/${section.slug}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem 1rem",
                  borderTop: i > 0 ? "1px solid var(--border)" : "none",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "background 0.1s",
                }}
              >
                <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{section.icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "var(--ink)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {section.name}
                  </div>
                  <div
                    style={{ fontSize: "0.75rem", color: "var(--muted)", marginTop: "0.1rem" }}
                  >
                    {section.chapters} chapters · {section.datQuestions} DAT questions
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--faint)",
                    flexShrink: 0,
                  }}
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── TaskGroup ─────────────────────────────────────────────────────────────────

function TaskGroup({
  label,
  tasks,
  dimmed = false,
}: {
  label: string;
  tasks: Task[];
  dimmed?: boolean;
}) {
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <div
        style={{
          fontSize: "0.6875rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--faint)",
          marginBottom: "0.5rem",
        }}
      >
        {label}
      </div>
      <div className="card card-tight" style={{ overflow: "hidden" }}>
        {tasks.map((task, i) => (
          <TaskRow key={task.id} task={task} dimmed={dimmed} borderTop={i > 0} />
        ))}
      </div>
    </div>
  );
}

// ── TaskRow ───────────────────────────────────────────────────────────────────

function TaskRow({
  task,
  dimmed,
  borderTop,
}: {
  task: Task;
  dimmed: boolean;
  borderTop: boolean;
}) {
  function formatDate(iso: string): string {
    // Parse without timezone shift
    const [y, m, d] = iso.split("-").map(Number);
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    });
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        padding: "0.7rem 1rem",
        borderTop: borderTop ? "1px solid var(--border)" : "none",
        opacity: dimmed ? 0.55 : 1,
        transition: "opacity 0.15s",
      }}
    >
      {/* Checkbox */}
      <button
        onClick={() => toggleTask(task.id)}
        aria-label={task.done ? "Mark as not done" : "Mark as done"}
        style={{
          width: "1.25rem",
          height: "1.25rem",
          borderRadius: "6px",
          border: task.done ? "2px solid var(--accent)" : "2px solid var(--border)",
          background: task.done ? "var(--accent)" : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          cursor: "pointer",
          transition: "all 0.15s",
          padding: 0,
        }}
      >
        {task.done && (
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            style={{ display: "block" }}
          >
            <path
              d="M1 3.5L3.8 6.5L9 1"
              stroke="white"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* Text */}
      <span
        style={{
          flex: 1,
          fontSize: "0.9375rem",
          color: "var(--ink)",
          textDecoration: task.done ? "line-through" : "none",
          minWidth: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {task.text}
      </span>

      {/* Date chip */}
      {task.date && (
        <span
          style={{
            fontSize: "0.75rem",
            color: "var(--muted)",
            background: "var(--surface-2)",
            border: "1px solid var(--border)",
            borderRadius: "999px",
            padding: "0.15rem 0.55rem",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {formatDate(task.date)}
        </span>
      )}

      {/* Delete */}
      <button
        onClick={() => deleteTask(task.id)}
        aria-label="Delete task"
        style={{
          background: "none",
          border: "none",
          color: "var(--faint)",
          cursor: "pointer",
          fontSize: "1.1rem",
          lineHeight: 1,
          padding: "0 0.125rem",
          flexShrink: 0,
          transition: "color 0.15s",
        }}
      >
        ✕
      </button>
    </div>
  );
}
