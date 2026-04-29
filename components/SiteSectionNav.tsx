"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS: { href: string; label: string; id: string }[] = [
  { href: "#section-proof", label: "Proof", id: "section-proof" },
  { href: "#section-alignment", label: "Alignment", id: "section-alignment" },
  { href: "#section-videos", label: "Videos", id: "section-videos" },
  { href: "#section-github", label: "GitHub", id: "section-github" },
  { href: "#section-demos", label: "Demos", id: "section-demos" },
  { href: "#section-contact", label: "Contact", id: "section-contact" },
];

export function SiteSectionNav({ mailtoHref }: { mailtoHref: string }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const ids = NAV_ITEMS.map((i) => i.id);
    const offset = 140;

    const updateActive = () => {
      const y = window.scrollY + offset;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        if (top <= y) current = id;
      }
      setActiveId(current ?? ids[0] ?? null);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 shadow-sm shadow-black/20 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center gap-2 px-4 py-2.5 sm:px-8">
        <nav
          aria-label="On this page"
          className="min-w-0 flex-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <ul className="flex gap-1.5 sm:flex-wrap sm:gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id} className="shrink-0">
                  <a
                    href={item.href}
                    className={`inline-flex min-h-[44px] items-center whitespace-nowrap rounded-lg px-3 py-2.5 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cbre sm:min-h-0 sm:py-2 ${
                      isActive
                        ? "bg-cbre/25 text-cbre-bright ring-1 ring-cbre/35"
                        : "text-zinc-400 hover:bg-zinc-900/80 hover:text-zinc-200"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <Link
          href={mailtoHref}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cbre/40 text-cbre-bright transition hover:bg-cbre/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cbre sm:hidden"
          aria-label="Email Charley"
        >
          <MailGlyph className="h-5 w-5" />
        </Link>
        <Link
          href={mailtoHref}
          className="hidden shrink-0 rounded-xl bg-cbre px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-cbre/20 transition hover:bg-cbre-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cbre sm:inline-flex sm:items-center"
        >
          Email Charley
        </Link>
      </div>
    </header>
  );
}

function MailGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
