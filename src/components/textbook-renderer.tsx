"use client";

import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getDiagram, Figure } from "./diagrams";

type CalloutKind = "high-yield" | "clinical" | "mnemonic" | "tip" | "warning" | "definition";

const CALLOUT_STYLES: Record<CalloutKind, { label: string; icon: string; border: string; bg: string; text: string }> = {
  "high-yield": { label: "High-Yield DAT", icon: "★", border: "#D97706", bg: "#FEF3C7", text: "#92400E" },
  clinical: { label: "Clinical Correlation", icon: "✚", border: "#DC2626", bg: "#FEE2E2", text: "#7F1D1D" },
  mnemonic: { label: "Mnemonic", icon: "✿", border: "#7C3AED", bg: "#EDE9FE", text: "#4C1D95" },
  tip: { label: "Study Tip", icon: "💡", border: "#2563EB", bg: "#DBEAFE", text: "#1E3A8A" },
  warning: { label: "Common Pitfall", icon: "!", border: "#EA580C", bg: "#FFEDD5", text: "#7C2D12" },
  definition: { label: "Key Definition", icon: "§", border: "#0F766E", bg: "#CCFBF1", text: "#134E4A" },
};

function Callout({ kind, children }: { kind: CalloutKind; children: ReactNode }) {
  const s = CALLOUT_STYLES[kind];
  return (
    <aside
      className="not-prose my-6 rounded-xl border-l-4 px-5 py-4"
      style={{ borderLeftColor: s.border, backgroundColor: s.bg, color: s.text }}
    >
      <div className="flex items-center gap-2 mb-1.5 text-xs font-bold uppercase tracking-wider">
        <span className="text-sm">{s.icon}</span>
        <span>{s.label}</span>
      </div>
      <div className="text-sm leading-relaxed space-y-2 [&_p]:m-0 [&_strong]:font-bold [&_em]:italic [&_code]:bg-white/40 [&_code]:px-1 [&_code]:rounded [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5">
        {children}
      </div>
    </aside>
  );
}

function extractText(node: ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (node && typeof node === "object" && "props" in node) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return extractText((node as any).props.children);
  }
  return "";
}

export function TextbookRenderer({ markdown }: { markdown: string }) {
  return (
    <div className="prose prose-slate max-w-none
      prose-headings:font-bold prose-headings:tracking-tight
      prose-h1:text-3xl prose-h1:mb-3 prose-h1:mt-0
      prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-3 prose-h2:pb-2 prose-h2:border-b prose-h2:border-[var(--color-border)]
      prose-h3:text-xl prose-h3:mt-7 prose-h3:mb-2
      prose-h4:text-base prose-h4:mt-5 prose-h4:mb-2 prose-h4:font-semibold prose-h4:text-[var(--color-primary-dark)]
      prose-p:leading-[1.75] prose-p:text-[15px] prose-p:text-[var(--foreground)]
      prose-li:leading-[1.7] prose-li:text-[15px]
      prose-strong:text-[var(--foreground)] prose-strong:font-semibold
      prose-table:text-sm prose-th:bg-gray-50 prose-th:p-2 prose-th:text-left
      prose-td:p-2 prose-td:align-top
      prose-code:bg-[var(--color-primary-light)] prose-code:text-[var(--color-primary-dark)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-[13px] prose-code:before:content-[''] prose-code:after:content-['']
      prose-blockquote:border-l-[var(--color-primary)] prose-blockquote:bg-[var(--color-primary-light)] prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:text-[var(--color-primary-dark)]
    ">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Diagram fenced code: ```diagram\nslug-here\n```
          code({ className, children }) {
            const lang = (className || "").replace("language-", "");
            if (lang === "diagram") {
              const lines = extractText(children).trim().split("\n");
              const slug = lines[0].trim();
              const title = lines[1]?.startsWith("title:") ? lines[1].slice(6).trim() : undefined;
              const caption = lines.find((l) => l.startsWith("caption:"))?.slice(8).trim();
              const num = lines.find((l) => l.startsWith("number:"))?.slice(7).trim();
              const Component = getDiagram(slug);
              if (!Component) {
                return (
                  <div className="not-prose my-4 rounded border border-dashed border-orange-300 bg-orange-50 px-4 py-3 text-xs text-orange-700">
                    Missing diagram: <code className="font-mono">{slug}</code>
                  </div>
                );
              }
              return (
                <Figure number={num} title={title} caption={caption}>
                  <Component />
                </Figure>
              );
            }
            // Inline code (default)
            return <code className={className}>{children}</code>;
          },
          // Callout via blockquote-prefix
          blockquote({ children }) {
            // Walk children to find first text content
            const firstText = extractText(children).trimStart();
            const match = firstText.match(/^!(high-yield|clinical|mnemonic|tip|warning|definition)\b\s*/);
            if (match) {
              const kind = match[1] as CalloutKind;
              const stripFirstParagraph = (nodes: ReactNode): ReactNode => {
                if (!Array.isArray(nodes)) return nodes;
                let stripped = false;
                return nodes.map((node) => {
                  if (
                    !stripped &&
                    node &&
                    typeof node === "object" &&
                    "props" in node &&
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (node as any).type === "p"
                  ) {
                    stripped = true;
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const inner = (node as any).props.children;
                    const stripText = (n: ReactNode): ReactNode => {
                      if (typeof n === "string") return n.replace(match[0], "");
                      if (Array.isArray(n)) {
                        let done = false;
                        return n.map((x) => {
                          if (!done && typeof x === "string" && match[0] && x.includes(match[0])) {
                            done = true;
                            return x.replace(match[0], "");
                          }
                          if (!done && typeof x === "string" && x.trimStart().startsWith("!" + kind)) {
                            done = true;
                            return x.replace(/^\s*!(high-yield|clinical|mnemonic|tip|warning|definition)\b\s*/, "");
                          }
                          return x;
                        });
                      }
                      return n;
                    };
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    return { ...(node as any), props: { ...(node as any).props, children: stripText(inner) } };
                  }
                  return node;
                });
              };
              return <Callout kind={kind}>{stripFirstParagraph(children)}</Callout>;
            }
            return <blockquote>{children}</blockquote>;
          },
          // Standalone image → figure with caption from alt
          img({ src, alt }) {
            const altText = String(alt || "");
            const [main, caption] = altText.split(" | ");
            if (!src) return null;
            return (
              <Figure title={caption ? main : undefined} caption={caption || (main && `${main}`)}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={String(src)} alt={main} className="max-h-[480px] object-contain" />
              </Figure>
            );
          },
          table({ children }) {
            return (
              <div className="not-prose my-6 overflow-x-auto rounded-xl border border-[var(--color-border)]">
                <table className="w-full text-sm">{children}</table>
              </div>
            );
          },
          th({ children }) {
            return <th className="bg-gray-50 text-left p-3 font-semibold text-xs uppercase tracking-wider text-[var(--color-text-secondary)] border-b border-[var(--color-border)]">{children}</th>;
          },
          td({ children }) {
            return <td className="p-3 align-top border-b border-[var(--color-border)] last:border-b-0">{children}</td>;
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
