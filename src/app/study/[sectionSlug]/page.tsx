import Link from "next/link";
import { DAT_SECTIONS } from "@/lib/dat-constants";
import { BIOLOGY_CHAPTERS } from "@/lib/sample-content";

export default async function SectionPage({ params }: { params: Promise<{ sectionSlug: string }> }) {
  const { sectionSlug } = await params;
  const section = DAT_SECTIONS.find((s) => s.slug === sectionSlug);

  if (!section) {
    return <div className="p-8 text-center text-[var(--color-text-muted)]">Section not found</div>;
  }

  // For now, only Biology has real content
  const chapters = sectionSlug === "biology" ? BIOLOGY_CHAPTERS : [];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="border-b border-[var(--color-border)] bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-4">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-sm">D</div>
            <span className="font-semibold text-lg tracking-tight">DAT Prep</span>
          </Link>
          <span className="text-[var(--color-border)]">/</span>
          <span className="text-sm text-[var(--color-text-secondary)]">{section.name}</span>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Section header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{section.icon}</span>
            <h1 className="text-2xl font-bold">{section.name}</h1>
          </div>
          <p className="text-[var(--color-text-secondary)]">{section.description}</p>
          <div className="flex items-center gap-4 mt-3 text-sm text-[var(--color-text-muted)]">
            <span>{section.chapters} chapters</span>
            <span className="w-1 h-1 rounded-full bg-[var(--color-border)]"></span>
            <span>{section.datQuestions} questions on DAT</span>
            <span className="w-1 h-1 rounded-full bg-[var(--color-border)]"></span>
            <span>{section.datMinutes} minutes</span>
          </div>
          {/* Progress bar */}
          <div className="mt-4 h-2 bg-[var(--color-border)] rounded-full overflow-hidden">
            <div className="h-full rounded-full" style={{ width: "0%", backgroundColor: section.color }} />
          </div>
          <div className="text-xs text-[var(--color-text-muted)] mt-1">0% complete</div>
        </div>

        {/* Chapter list */}
        <div className="space-y-3">
          {chapters.length > 0 ? (
            chapters.map((chapter, i) => {
              const hasContent = chapter.lessons.length > 0;
              return (
                <Link
                  key={chapter.slug}
                  href={hasContent ? `/study/${sectionSlug}/${chapter.slug}` : "#"}
                  className={`block bg-white rounded-xl border border-[var(--color-border)] p-5 transition-all ${
                    hasContent ? "hover:border-[var(--color-text-muted)] hover:shadow-md cursor-pointer" : "opacity-50 cursor-not-allowed"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white shrink-0"
                      style={{ backgroundColor: hasContent ? section.color : "var(--color-text-muted)" }}
                    >
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold mb-0.5">{chapter.title}</div>
                      <div className="text-sm text-[var(--color-text-muted)]">{chapter.description}</div>
                      <div className="flex items-center gap-3 mt-2 text-xs text-[var(--color-text-muted)]">
                        <span>{chapter.lessons.length} lessons</span>
                        <span>{chapter.questions.length} questions</span>
                        <span>~{chapter.estimatedMinutes} min</span>
                      </div>
                    </div>
                    <div className="shrink-0">
                      {hasContent ? (
                        <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: `${section.color}15`, color: section.color }}>
                          Start
                        </span>
                      ) : (
                        <span className="text-xs text-[var(--color-text-muted)]">Coming soon</span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="text-center py-16 text-[var(--color-text-muted)]">
              <div className="text-4xl mb-4">{section.icon}</div>
              <div className="font-medium mb-1">Content coming soon</div>
              <div className="text-sm">This section is being built. Check back soon!</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
