import Link from "next/link";
import { DAT_SECTIONS } from "@/lib/dat-constants";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="border-b border-[var(--color-border)] bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-sm">D</div>
            <span className="font-semibold text-lg tracking-tight">DAT Prep</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--foreground)] transition-colors">Dashboard</Link>
            <Link href="/dashboard" className="text-sm font-medium bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
          Adaptive learning powered by science
        </div>
        <h1 className="text-5xl font-bold tracking-tight leading-tight mb-6">
          Study smarter.<br />
          <span className="text-[var(--color-primary)]">Score higher.</span>
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
          Complete DAT prep with adaptive practice questions, full-length exams,
          spaced repetition, and AI explanations. Everything you need in one clean platform.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/dashboard" className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-xl font-semibold text-base hover:bg-[var(--color-primary-dark)] transition-all hover:shadow-lg hover:shadow-[var(--color-primary)]/20">
            Start Studying Free
          </Link>
          <Link href="#sections" className="text-[var(--color-text-secondary)] px-6 py-3 rounded-xl font-medium text-base border border-[var(--color-border)] hover:border-[var(--color-text-muted)] transition-colors">
            See What&apos;s Covered
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-4 gap-4">
          {[
            { value: "51", label: "Chapters" },
            { value: "1,200+", label: "Practice Questions" },
            { value: "6", label: "Full Practice Exams" },
            { value: "280", label: "Questions per Exam" },
          ].map((s) => (
            <div key={s.label} className="text-center py-6 bg-white rounded-xl border border-[var(--color-border)]">
              <div className="text-2xl font-bold text-[var(--color-primary)]">{s.value}</div>
              <div className="text-xs text-[var(--color-text-muted)] mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sections */}
      <section id="sections" className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-center mb-2">Complete DAT Coverage</h2>
        <p className="text-[var(--color-text-secondary)] text-center mb-10">All 6 sections of the Dental Admission Test</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {DAT_SECTIONS.map((section) => (
            <Link
              key={section.slug}
              href={`/study/${section.slug}`}
              className="group bg-white rounded-xl border border-[var(--color-border)] p-5 hover:border-[var(--color-text-muted)] hover:shadow-md transition-all"
            >
              <div className="text-2xl mb-3">{section.icon}</div>
              <div className="font-semibold mb-1 group-hover:text-[var(--color-primary)] transition-colors">{section.name}</div>
              <div className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-3">{section.description}</div>
              <div className="flex items-center gap-3 text-xs text-[var(--color-text-secondary)]">
                <span>{section.chapters} chapters</span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-border)]"></span>
                <span>{section.datQuestions} questions on DAT</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)] py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-xs text-[var(--color-text-muted)]">
          DAT Prep &mdash; Built for future dentists.
        </div>
      </footer>
    </div>
  );
}
