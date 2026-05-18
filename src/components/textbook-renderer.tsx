"use client";

import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
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
      className="my-6 rounded-xl border-l-4 px-5 py-4"
      style={{ borderLeftColor: s.border, backgroundColor: s.bg, color: s.text }}
    >
      <div className="flex items-center gap-2 mb-1.5 text-xs font-bold uppercase tracking-wider">
        <span className="text-sm">{s.icon}</span>
        <span>{s.label}</span>
      </div>
      <div className="text-[14.5px] leading-relaxed space-y-2">
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getHastClassName(node: any): string {
  const cls = node?.children?.[0]?.properties?.className;
  if (Array.isArray(cls)) return cls.join(" ");
  if (typeof cls === "string") return cls;
  return "";
}

export function TextbookRenderer({ markdown }: { markdown: string }) {
  return (
    <div className="textbook max-w-none text-[15.5px] text-slate-900 leading-[1.75]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold tracking-tight mb-4 mt-0 text-slate-900">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold tracking-tight mt-12 mb-3 pb-2 border-b border-slate-200 text-slate-900">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-bold tracking-tight mt-8 mb-2 text-slate-900">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-base font-semibold mt-5 mb-2 text-[var(--color-primary-dark)]">{children}</h4>
          ),
          p: ({ children }) => (
            <p className="my-4 leading-[1.78] text-[15.5px] text-slate-800">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="my-4 ml-6 list-disc space-y-1.5 text-[15.5px] text-slate-800 marker:text-[var(--color-primary)]">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="my-4 ml-6 list-decimal space-y-1.5 text-[15.5px] text-slate-800 marker:text-[var(--color-primary)]">{children}</ol>
          ),
          li: ({ children }) => <li className="leading-[1.7]">{children}</li>,
          strong: ({ children }) => <strong className="font-semibold text-slate-900">{children}</strong>,
          em: ({ children }) => <em className="italic">{children}</em>,
          a: ({ children, href }) => (
            <a href={href} className="text-[var(--color-primary)] underline underline-offset-2 hover:text-[var(--color-primary-dark)]">
              {children}
            </a>
          ),
          hr: () => <hr className="my-8 border-slate-200" />,
          // Wrapper for fenced code blocks: unwrap <pre> when the body is a diagram
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          pre: ({ node, children }: any) => {
            const cls = getHastClassName(node);
            if (cls.includes("language-diagram")) {
              return <>{children}</>;
            }
            return (
              <pre className="my-5 overflow-x-auto rounded-lg bg-slate-900 text-slate-100 text-[13px] p-4 font-mono">
                {children}
              </pre>
            );
          },
          code({ className, children }) {
            const lang = (className || "").replace("language-", "");
            if (lang === "diagram") {
              const lines = extractText(children).trim().split("\n");
              const slug = lines[0].trim();
              const title = lines.find((l) => l.startsWith("title:"))?.slice(6).trim();
              const caption = lines.find((l) => l.startsWith("caption:"))?.slice(8).trim();
              const num = lines.find((l) => l.startsWith("number:"))?.slice(7).trim();
              const Component = getDiagram(slug);
              if (!Component) {
                return (
                  <div className="my-4 rounded border border-dashed border-orange-300 bg-orange-50 px-4 py-3 text-xs text-orange-700">
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
            // Inline code or non-diagram fenced code
            const isInline = !className;
            if (isInline) {
              return (
                <code className="bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] px-1.5 py-0.5 rounded font-mono text-[13.5px]">
                  {children}
                </code>
              );
            }
            return <code className={className}>{children}</code>;
          },
          blockquote({ children }) {
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
                      if (typeof n === "string") {
                        return n.replace(/^\s*!(high-yield|clinical|mnemonic|tip|warning|definition)\b\s*/, "");
                      }
                      if (Array.isArray(n)) {
                        let done = false;
                        return n.map((x) => {
                          if (!done && typeof x === "string") {
                            const stripped = x.replace(/^\s*!(high-yield|clinical|mnemonic|tip|warning|definition)\b\s*/, "");
                            if (stripped !== x) {
                              done = true;
                              return stripped;
                            }
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
            return (
              <blockquote className="my-5 border-l-4 border-[var(--color-primary)] bg-[var(--color-primary-light)] py-3 px-5 text-[var(--color-primary-dark)] rounded-r-lg">
                {children}
              </blockquote>
            );
          },
          img({ src, alt }) {
            if (!src) return null;
            const altText = String(alt || "");
            const [main, caption] = altText.split(" | ");
            return (
              <Figure title={caption ? main : undefined} caption={caption || main}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={String(src)} alt={main} className="max-h-[480px] object-contain" />
              </Figure>
            );
          },
          table({ children }) {
            return (
              <div className="my-6 overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-sm border-collapse">{children}</table>
              </div>
            );
          },
          thead: ({ children }) => <thead>{children}</thead>,
          tbody: ({ children }) => <tbody>{children}</tbody>,
          tr: ({ children }) => <tr className="border-b border-slate-200 last:border-b-0">{children}</tr>,
          th({ children }) {
            return <th className="bg-slate-50 text-left p-3 font-semibold text-xs uppercase tracking-wider text-slate-600">{children}</th>;
          },
          td({ children }) {
            return <td className="p-3 align-top text-[14px] text-slate-800">{children}</td>;
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
