import { ReactNode } from "react";

export function Figure({
  number,
  title,
  caption,
  children,
}: {
  number?: string;
  title?: string;
  caption?: string;
  children: ReactNode;
}) {
  return (
    <figure className="my-8 not-prose">
      <div className="rounded-xl border border-[var(--color-border)] bg-white px-4 pt-5 pb-3">
        <div className="flex items-center justify-center w-full overflow-x-auto">
          {children}
        </div>
        {(number || title || caption) && (
          <figcaption className="mt-4 pt-3 border-t border-[var(--color-border)] text-xs leading-relaxed text-[var(--color-text-secondary)]">
            {(number || title) && (
              <span className="block">
                {number && (
                  <span className="font-semibold text-[var(--color-primary)] mr-1.5">
                    Figure {number}.
                  </span>
                )}
                {title && <span className="font-semibold text-[var(--foreground)]">{title}</span>}
              </span>
            )}
            {caption && <span className="block mt-1">{caption}</span>}
          </figcaption>
        )}
      </div>
    </figure>
  );
}
