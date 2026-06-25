"use client";

import { useEffect, useRef, useState } from "react";

type State = "idle" | "playing" | "paused";

function stripMarkdown(md: string): string {
  return (
    md
      // fenced code/diagram blocks
      .replace(/```[\s\S]*?```/g, "")
      // callout markers like > [!NOTE]
      .replace(/^>\s*\[![A-Z]+\]\s*/gm, "")
      // blockquotes
      .replace(/^>\s?/gm, "")
      // headings
      .replace(/^#{1,6}\s+/gm, "")
      // horizontal rules
      .replace(/^[-*_]{3,}\s*$/gm, "")
      // bold / italic
      .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, "$1")
      // inline code
      .replace(/`[^`]+`/g, "")
      // links
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      // images
      .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
      // HTML tags
      .replace(/<[^>]+>/g, "")
      // extra blank lines
      .replace(/\n{3,}/g, "\n\n")
      .trim()
  );
}

export default function ListenButton({ text }: { text: string }) {
  const [state, setState] = useState<State>("idle");
  const uttRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setAvailable(true);
    }
  }, []);

  // Cancel + reset whenever the text changes (navigating lessons)
  useEffect(() => {
    if (!available) return;
    window.speechSynthesis.cancel();
    uttRef.current = null;
    setState("idle");
  }, [text, available]);

  // Cancel on unmount
  useEffect(() => {
    return () => {
      if (available) window.speechSynthesis.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [available]);

  if (!available) return null;

  function play() {
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(stripMarkdown(text));
    utt.rate = 0.95;
    utt.onend = () => setState("idle");
    utt.onerror = () => setState("idle");
    uttRef.current = utt;
    window.speechSynthesis.speak(utt);
    setState("playing");
  }

  function pause() {
    window.speechSynthesis.pause();
    setState("paused");
  }

  function resume() {
    window.speechSynthesis.resume();
    setState("playing");
  }

  function stop() {
    window.speechSynthesis.cancel();
    uttRef.current = null;
    setState("idle");
  }

  return (
    <div
      className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium"
      style={{
        background: "var(--accent-soft)",
        border: "1px solid var(--border)",
        color: "var(--accent-strong)",
      }}
    >
      {state === "idle" && (
        <button
          onClick={play}
          className="flex items-center gap-1.5"
          aria-label="Listen to this lesson"
        >
          {/* speaker icon */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
          Listen
        </button>
      )}

      {state === "playing" && (
        <>
          <button
            onClick={pause}
            className="flex items-center gap-1"
            aria-label="Pause"
          >
            {/* pause icon */}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
            </svg>
            Pause
          </button>
          <span style={{ color: "var(--faint)" }}>·</span>
          <button onClick={stop} aria-label="Stop" style={{ color: "var(--muted)" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <rect x="4" y="4" width="16" height="16" rx="2"/>
            </svg>
          </button>
        </>
      )}

      {state === "paused" && (
        <>
          <button
            onClick={resume}
            className="flex items-center gap-1"
            aria-label="Resume"
          >
            {/* play icon */}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            Resume
          </button>
          <span style={{ color: "var(--faint)" }}>·</span>
          <button onClick={stop} aria-label="Stop" style={{ color: "var(--muted)" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <rect x="4" y="4" width="16" height="16" rx="2"/>
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
