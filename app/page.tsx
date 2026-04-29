import { ProfilePhoto } from "@/components/ProfilePhoto";
import Link from "next/link";
import type { ReactNode } from "react";

const chatUrl = "https://chat.creai.solutions";
const flowsUrl = "https://flows.creai.solutions";

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[length:48px_48px] bg-grid-fade opacity-100"
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-40 h-64 w-64 rounded-full bg-cyan-600/5 blur-[90px]" />

      <main className="relative mx-auto max-w-2xl px-6 pb-24 pt-16 sm:px-8 sm:pt-24">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          Built for CBRE conversation · April 2026
        </p>

        <header className="mb-14 text-center">
          <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-4xl">
            Head of AI Products
          </h1>
          <p className="mt-3 text-lg text-cyan-400/90 sm:text-xl">
            Strategy, demos &amp; how I work
          </p>
          <p className="mx-auto mt-8 max-w-xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-[17px]">
            Enterprise AI product leadership means turning complex opportunities
            into{" "}
            <span className="text-zinc-300">
              safe, measurable capabilities
            </span>
            —from discovery and evaluation through adoption—partnering across
            product, data, engineering, and governance so GenAI, predictive
            insight, and agentic automation land where they actually matter.
          </p>
        </header>

        <section
          className="mb-20 space-y-4"
          aria-labelledby="demo-links-heading"
        >
          <h2
            id="demo-links-heading"
            className="sr-only"
          >
            Live demos
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={chatUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open AI chat demo at chat.creai.solutions in a new tab"
              className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 px-6 py-8 text-left shadow-sm ring-1 ring-white/5 transition hover:border-cyan-500/30 hover:bg-zinc-900/80 hover:ring-cyan-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              <span className="font-display text-lg font-semibold text-zinc-100">
                AI chat demo
              </span>
              <span className="mt-2 text-sm text-zinc-500">
                Conversational agents &amp; assistance
              </span>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-400/90">
                chat.creai.solutions
                <ExternalIcon className="opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
            <a
              href={flowsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open workflow automation demo at flows.creai.solutions in a new tab"
              className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 px-6 py-8 text-left shadow-sm ring-1 ring-white/5 transition hover:border-cyan-500/30 hover:bg-zinc-900/80 hover:ring-cyan-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              <span className="font-display text-lg font-semibold text-zinc-100">
                Workflow automation
              </span>
              <span className="mt-2 text-sm text-zinc-500">
                Orchestration &amp; integrations
              </span>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-400/90">
                flows.creai.solutions
                <ExternalIcon className="opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>
        </section>

        <section
          className="rounded-2xl border border-zinc-800/80 bg-zinc-950/40 p-8 ring-1 ring-white/5 sm:p-10"
          aria-labelledby="about-heading"
        >
          <h2
            id="about-heading"
            className="font-display text-xl font-semibold text-zinc-100"
          >
            About Charley
          </h2>

          <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-start">
            <ProfilePhoto />

            <div className="min-w-0 flex-1 space-y-5">
              <p className="text-pretty text-[15px] leading-relaxed text-zinc-400 sm:text-base">
                I build AI and automation products end-to-end: clarifying use
                cases, designing evaluations and guardrails, and shipping
                experiences people actually adopt. These demos reflect how I
                think about{" "}
                <span className="text-zinc-300">
                  reliability, traceability, and responsible rollout
                </span>{" "}
                in real enterprise settings.
              </p>

              <div className="flex flex-wrap gap-3">
                <SocialLink
                  href="https://www.linkedin.com/in/charley-forey"
                  label="LinkedIn"
                >
                  <LinkedInIcon />
                </SocialLink>
                <SocialLink
                  href="https://github.com/charley-forey-ai"
                  label="GitHub"
                >
                  <GitHubIcon />
                </SocialLink>
                <SocialLink
                  href="https://www.youtube.com/@buildflows-ai"
                  label="YouTube — Buildflows"
                >
                  <YouTubeIcon />
                </SocialLink>
                <SocialLink
                  href="https://www.youtube.com/@construct-chat"
                  label="YouTube — Construct Chat"
                >
                  <YouTubeIcon />
                </SocialLink>
              </div>

              <div>
                <a
                  href="/charley-forey-resume-2026.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                >
                  Download resume (PDF)
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="opacity-90"
                    aria-hidden
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-16 text-center text-sm text-zinc-600">
          <p>
            Demos &amp; site by{" "}
            <Link
              href="https://creai.solutions"
              className="text-zinc-500 underline-offset-4 hover:text-cyan-400/90 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              creai.solutions
            </Link>
            . Independent preview — not affiliated with CBRE.
          </p>
        </footer>
      </main>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-sm text-zinc-300 transition hover:border-zinc-700 hover:text-cyan-300/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
    >
      <span className="text-zinc-500">{children}</span>
      <span>{label}</span>
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
