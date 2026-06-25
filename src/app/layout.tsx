import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SyncInit from "../components/SyncInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DAT Prep — Study Guide",
  description: "Interactive DAT study guide: textbook chapters, quizzes, full-length timed exams, spaced repetition, and analytics.",
  icons: { icon: "/icon-192.png", apple: "/apple-touch-icon.png" },
  appleWebApp: { capable: true, title: "DAT Prep", statusBarStyle: "default" },
};

export const viewport: Viewport = {
  themeColor: "#6c5ce7",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--ink)]">
        {/* apply saved theme before paint (no flash) */}
        <script
          dangerouslySetInnerHTML={{
            __html: "try{if(localStorage.getItem('dat-theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}",
          }}
        />
        <SyncInit />
        {children}
      </body>
    </html>
  );
}
