"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: "📊" },
  { label: "Textbook", href: "/study", icon: "📖" },
  { label: "Practice Exams", href: "/exams", icon: "📝" },
  { label: "How It Works", href: "/how-it-works", icon: "ℹ️" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-44 bg-white border-r border-[var(--color-border)] flex flex-col shrink-0 h-screen sticky top-0">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 px-5 h-14 border-b border-[var(--color-border)]">
        <div className="w-7 h-7 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-xs">D</div>
        <span className="font-semibold text-sm tracking-tight">DAT Prep</span>
      </Link>

      {/* Exam label */}
      <div className="px-5 py-3">
        <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider">DAT</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 space-y-0.5">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                isActive
                  ? "bg-[var(--color-primary-light)] text-[var(--color-primary)] font-medium"
                  : "text-[var(--color-text-secondary)] hover:bg-gray-50 hover:text-[var(--foreground)]"
              }`}
            >
              <span className="text-base w-5 text-center">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="border-t border-[var(--color-border)] px-2 py-2 space-y-0.5">
        <Link href="/exams" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[var(--color-text-secondary)] hover:bg-gray-50">
          <span className="text-base w-5 text-center">📋</span>
          <span>Exam Catalog</span>
        </Link>
      </div>
    </aside>
  );
}
