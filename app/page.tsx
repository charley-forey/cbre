import { GitHubRepos } from "@/components/GitHubRepos";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { SiteSectionNav } from "@/components/SiteSectionNav";
import { VideoEmbed } from "@/components/VideoEmbed";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Suspense } from "react";

const chatUrl = "https://chat.creai.solutions";
const flowsUrl = "https://flows.creai.solutions";

const CONTACT_EMAIL = "charley.s.forey@gmail.com";
const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "CBRE - Head of AI Products",
)}`;

/** Shared n8n POC login (non-production demo). */
const N8N_DEMO_PASSWORD = "abc123XYZ$";

/** Embeds start at bookmarked timestamps; titles match YouTube */
const YOUTUBE_CLIPS: { id: string; start: number; title: string }[] = [
  {
    id: "aGhIXDtRxoU",
    start: 40,
    title:
      "Procore + P6 + Power BI Integration | Real Construction Analytics Using Azure & Cosmos DB",
  },
  {
    id: "vwLcu0ck7ik",
    start: 88,
    title:
      "AI Sales Automations with Zapier | HubSpot, Gmail, Calendar, OpenAI, and AI Agents",
  },
  {
    id: "MZ5WsAj8gB0",
    start: 65,
    title:
      "BuildFlows n8n Nodes Demo - Automating Procore, Autodesk, HCSS, and PowerBI Workflows",
  },
  {
    id: "QJjYrZF2RVQ",
    start: 106,
    title:
      "Construct.Chat Demo: Building AI Agents for Construction with MCP Tools, Live Project Data & Procore",
  },
  {
    id: "siY2zfgmupI",
    start: 0,
    title: "Tool Runtime - MCP Gateway & Telemetry | Full Demo & Overview",
  },
];

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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cbre focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip To Main Content
      </a>

      <SiteSectionNav mailtoHref={mailtoHref} />

      <div
        className="pointer-events-none absolute inset-0 bg-[length:48px_48px] bg-grid-fade opacity-100"
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-cbre/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-40 h-64 w-64 rounded-full bg-cbre/10 blur-[90px]" />

      <main
        id="main-content"
        className="relative mx-auto max-w-3xl px-5 pb-24 pt-8 sm:px-8 sm:pt-10"
      >
        <div className="relative mb-10 flex w-full justify-center sm:mb-12">
          <div
            className="pointer-events-none absolute inset-x-4 top-1/2 -z-10 h-24 -translate-y-1/2 rounded-[2rem] bg-cbre/20 blur-3xl sm:inset-x-8 sm:h-32"
            aria-hidden
          />
          <div className="w-full max-w-2xl rounded-2xl bg-black px-4 py-5 shadow-2xl shadow-black/60 ring-1 ring-cbre/25 ring-offset-2 ring-offset-zinc-950 sm:px-8 sm:py-6">
            <Image
              src="/cbre-logo.png"
              alt="CBRE"
              width={768}
              height={191}
              priority
              sizes="(max-width: 768px) 100vw, 672px"
              className="mx-auto h-auto w-full max-w-full object-contain"
            />
          </div>
        </div>

        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          Built For CBRE Conversation · April 2026
        </p>

        <header className="mb-14 text-center">
          <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-4xl">
            Head Of AI Products
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-display text-lg font-semibold leading-snug tracking-tight text-cbre-bright sm:text-xl">
            Trusted & Measurable AI in Production at Enterprise Scale
          </p>
          <p className="mx-auto mt-8 max-w-xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-[17px]">
            Enterprise AI product leadership turns ambiguous opportunities into{" "}
            <span className="text-zinc-300">
              safe, measurable capabilities
            </span>
            : crisp success criteria from discovery through adoption, with product,
            data, engineering, and governance aligned end-to-end. That is how{" "}
            <strong className="font-semibold text-zinc-300">GenAI</strong>,{" "}
            <strong className="font-semibold text-zinc-300">
              predictive insight
            </strong>
            , and{" "}
            <strong className="font-semibold text-zinc-300">
              agentic automation
            </strong>{" "}
            anchor in real workflows, earn sustained adoption, and compound value
            for operators and the enterprise over time.
          </p>
        </header>

        <section
          id="section-alignment"
          className="section-anchor mb-16 rounded-2xl border border-zinc-800/80 bg-zinc-950/40 p-6 ring-1 ring-white/5 sm:p-8"
          aria-labelledby="alignment-heading"
        >
          <h2
            id="alignment-heading"
            className="font-display text-xl font-semibold text-zinc-100 sm:text-2xl"
          >
            How I Map To The Role
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-sm leading-snug text-zinc-500">
            Head Of AI Products scope in brief: where my track record shows up.
          </p>
          <ul className="mt-5 max-w-2xl space-y-3 text-pretty text-sm leading-snug text-zinc-400 sm:text-[15px]">
            <li className="flex gap-3">
              <RoleIcon>
                <IconMap />
              </RoleIcon>
              <span>
                <strong className="font-semibold text-zinc-300">
                  Roadmap, priorities, funding
                </strong>{" "}
                Sequenced agentic platform work with leadership: $14M+ opportunity
                context, 150+ teams in motion.
              </span>
            </li>
            <li className="flex gap-3">
              <RoleIcon>
                <IconFlask />
              </RoleIcon>
              <span>
                <strong className="font-semibold text-zinc-300">
                  Discovery, experiments, success criteria
                </strong>{" "}
                50+ production AI workflows; wins surfaced in metrics (~40%
                decision lift where measured).
              </span>
            </li>
            <li className="flex gap-3">
              <RoleIcon>
                <IconBolt />
              </RoleIcon>
              <span>
                <strong className="font-semibold text-zinc-300">
                  GenAI, predictive, agentic
                </strong>{" "}
                2,000+ nodes, 1,500+ MCP tools, Ludex AI patterns (RAG, vectors,
                MCP).
              </span>
            </li>
            <li className="flex gap-3">
              <RoleIcon>
                <IconCpu />
              </RoleIcon>
              <span>
                <strong className="font-semibold text-zinc-300">
                  Evaluation, monitoring, production readiness
                </strong>{" "}
                Evaluation-friendly agent flows; 21 C# connectors, 2,500+
                endpoints, discipline before broad rollout.
              </span>
            </li>
            <li className="flex gap-3">
              <RoleIcon>
                <IconShield />
              </RoleIcon>
              <span>
                <strong className="font-semibold text-zinc-300">
                  Governance, privacy, HITL, audit
                </strong>{" "}
                Traceable tool use, access-aware patterns, human review when
                outcomes matter. Same bar I use before recommending scale.
              </span>
            </li>
            <li className="flex gap-3">
              <RoleIcon>
                <IconChart />
              </RoleIcon>
              <span>
                <strong className="font-semibold text-zinc-300">
                  KPIs: quality, safety, adoption, cost
                </strong>{" "}
                $4M ARR influenced; ~25% fewer errors via 15+ guides; adoption
                signals across 150+ teams.
              </span>
            </li>
            <li className="flex gap-3">
              <RoleIcon>
                <IconBook />
              </RoleIcon>
              <span>
                <strong className="font-semibold text-zinc-300">
                  Playbooks, reusable patterns
                </strong>{" "}
                15+ guides and templates for faster, safer onboarding.
              </span>
            </li>
            <li className="flex gap-3">
              <RoleIcon>
                <IconUsers />
              </RoleIcon>
              <span>
                <strong className="font-semibold text-zinc-300">
                  Mentorship, cross-functional leadership
                </strong>{" "}
                Mentored on AI workflow design; 200+ stakeholders; 5,000+
                conference attendees.
              </span>
            </li>
          </ul>

          <p className="mt-6 border-t border-zinc-800/80 pt-5 text-xs leading-relaxed text-zinc-500 sm:text-sm">
            <strong className="font-semibold text-zinc-400">
              Example angles to explore:{" "}
            </strong>
            document-heavy GenAI; governed agents with tools; orchestrated
            operations with audit trails.
          </p>
        </section>

        <section
          id="section-videos"
          className="section-anchor mb-16"
          aria-labelledby="videos-heading"
        >
          <h2
            id="videos-heading"
            className="font-display text-xl font-semibold text-zinc-100 sm:text-2xl"
          >
            Selected Videos
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
            Short clips from builds and demos: integrations, agent tooling,
            orchestration, MCP, telemetry. I walk through architecture choices,
            how tools fire, and tradeoffs for enterprise audiences.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {YOUTUBE_CLIPS.map((clip) => (
              <VideoEmbed
                key={clip.id}
                id={clip.id}
                start={clip.start}
                title={clip.title}
              />
            ))}
          </div>
        </section>

        <section
          id="section-github"
          className="section-anchor mb-16"
          aria-labelledby="github-heading"
        >
          <h2
            id="github-heading"
            className="font-display text-xl font-semibold text-zinc-100 sm:text-2xl"
          >
            GitHub
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
            I am a hands-on builder. Below is public work I have developed and
            shipped, synced live from GitHub so you can review recent delivery in
            one place instead of clicking through a profile.
          </p>
          <div className="mt-6">
            <Suspense
              fallback={
                <p className="text-sm text-zinc-500">Loading repositories...</p>
              }
            >
              <GitHubRepos />
            </Suspense>
          </div>
          <p className="mt-4 text-center text-sm">
            <a
              href="https://github.com/Charley-Forey-AI?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-cbre-muted underline-offset-4 hover:text-cbre-bright hover:underline"
            >
              Open full profile on GitHub
            </a>
          </p>
        </section>

        <section
          id="section-demos"
          className="section-anchor mb-16 space-y-6"
          aria-labelledby="demo-links-heading"
        >
          <div>
            <h2
              id="demo-links-heading"
              className="font-display text-xl font-semibold text-zinc-100 sm:text-2xl"
            >
              Live Proof-Of-Concept Demos
            </h2>
            <p className="mt-4 text-pretty text-[15px] leading-relaxed text-zinc-400 sm:text-base">
              Two references you can open today:{" "}
              <strong className="font-semibold text-zinc-300">LibreChat</strong>{" "}
              for conversational AI and agents,{" "}
              <strong className="font-semibold text-zinc-300">n8n</strong> for
              workflow orchestration. These are intentional POCs, not CBRE
              production. They give us something concrete to react to on
              integration, governance, and rollout, instead of debating decks.
            </p>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-zinc-500 sm:text-[15px]">
              That pairing is how most enterprises pilot this space: a
              conversational or agent layer with orchestration behind it. I stay
              hands-on with delivery so what we discuss maps to what actually
              ships, not the trend of the quarter.
            </p>
          </div>

          <div className="grid min-h-[132px] gap-4 sm:grid-cols-2">
            <a
              href={chatUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LibreChat proof of concept at chat.creai.solutions"
              className="group flex min-h-[132px] flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 px-6 py-8 text-left shadow-sm ring-1 ring-white/5 transition hover:border-cbre/40 hover:bg-zinc-900/80 hover:ring-cbre/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cbre"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-cbre-muted">
                LibreChat
              </span>
              <span className="font-display mt-2 text-lg font-semibold text-zinc-100">
                Conversational AI And Agents
              </span>
              <span className="mt-2 text-sm leading-snug text-zinc-500">
                Multi-turn chat, tool use, MCP servers. How teams ship copilots
                and grounded assistance with evaluation hooks.
              </span>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cbre-bright">
                chat.creai.solutions
                <ExternalIcon className="opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
            <a
              href={flowsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open n8n proof of concept at flows.creai.solutions"
              className="group flex min-h-[132px] flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 px-6 py-8 text-left shadow-sm ring-1 ring-white/5 transition hover:border-cbre/40 hover:bg-zinc-900/80 hover:ring-cbre/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cbre"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-cbre-muted">
                n8n
              </span>
              <span className="font-display mt-2 text-lg font-semibold text-zinc-100">
                Workflow Automation
              </span>
              <span className="mt-2 text-sm leading-snug text-zinc-500">
                Orchestration across APIs and systems: runbooks, hand-offs, and
                logs before anything touches prod-scale SLAs.
              </span>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cbre-bright">
                flows.creai.solutions
                <ExternalIcon className="opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>

          <div className="rounded-xl border border-cbre/25 bg-cbre/10 px-4 py-4 ring-1 ring-cbre/20 sm:px-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-cbre-muted">
              Demo Access
            </p>
            <dl className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-400">
              <div>
                <dt className="font-semibold text-zinc-300">LibreChat</dt>
                <dd className="mt-1">
                  Create your own account on the sign-in screen to explore the
                  POC. No shared password required.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-300">n8n</dt>
                <dd className="mt-1 space-y-2">
                  <p>
                    This instance uses a shared login (not open self-signup).
                    Use:
                  </p>
                  <ul className="list-inside list-disc space-y-1 text-zinc-400">
                    <li>
                      <span className="font-medium text-zinc-400">Email: </span>
                      <code className="rounded bg-zinc-950/80 px-1.5 py-0.5 font-mono text-[13px] text-cbre-bright">
                        {CONTACT_EMAIL}
                      </code>
                    </li>
                    <li>
                      <span className="font-medium text-zinc-400">
                        Password:{" "}
                      </span>
                      <code className="rounded bg-zinc-950/80 px-1.5 py-0.5 font-mono text-[13px] text-cbre-bright">
                        {N8N_DEMO_PASSWORD}
                      </code>
                    </li>
                  </ul>
                  <p className="text-xs text-zinc-600">
                    POC demo login only, not a secured environment.
                  </p>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-xl border border-zinc-800/60 bg-zinc-950/40 px-4 py-4 ring-1 ring-white/[0.03] sm:px-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              What This POC Shows
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-400">
              <li>
                <span className="font-medium text-cbre-muted">LibreChat: </span>
                Agents and MCP hooks framed the way I pilot grounded GenAI:
                traceable tool calls and room to judge product sense, not slides.
              </li>
              <li>
                <span className="font-medium text-cbre-muted">n8n: </span>
                Cross-system flows with clear ownership between steps. A fast way
                to show orchestration before we fund platform-wide rollout.
              </li>
            </ul>
          </div>
        </section>

        <section
          id="section-proof"
          className="section-anchor mb-14"
          aria-labelledby="proof-heading"
        >
          <h2
            id="proof-heading"
            className="font-display text-xl font-semibold text-zinc-100 sm:text-2xl"
          >
            Proof Points
          </h2>
          <ul className="mt-5 space-y-5">
            <li className="flex gap-3 text-pretty text-[15px] leading-relaxed text-zinc-400 sm:text-base">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-cbre" />
              <span>
                <strong className="font-semibold text-zinc-300">
                  Trimble · Principal AI Solutions Architect (Agentic AI Platform)
                </strong>
                <br />
                <span className="text-zinc-300">
                  2,000+ API nodes · 1,500+ MCP tools · 50+ production workflows ·
                  $14M+ opportunity scope · 150+ teams · ~40% decision lift
                  (program metrics).
                </span>{" "}
                Outcomes first, then platform scale: adoption and measurable
                decision improvement across internal and external teams; pipeline
                figures are opportunity context, not booked revenue.
              </span>
            </li>
            <li className="flex gap-3 text-pretty text-[15px] leading-relaxed text-zinc-400 sm:text-base">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-cbre" />
              <span>
                <strong className="font-semibold text-zinc-300">
                  Revenue And Enablement
                </strong>
                <br />
                <span className="text-zinc-300">
                  $4M ARR influenced · 200+ stakeholders · 15+ guides and
                  templates · ~25% fewer implementation errors · 4 conferences ·
                  5,000+ attendees.
                </span>{" "}
                Alignment work that closes revenue, plus assets that scale
                adoption and reduce rework.
              </span>
            </li>
            <li className="flex gap-3 text-pretty text-[15px] leading-relaxed text-zinc-400 sm:text-base">
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-cbre" />
              <span>
                <strong className="font-semibold text-zinc-300">
                  Integrations And GenAI Engineering
                </strong>
                <br />
                <span className="text-zinc-300">
                  21 production C# connectors · 2,500+ endpoints · $10M+ pipeline
                  · $4M+ proposed dev scope · Ludex AI (fine-tuning, RAG,
                  vectors, MCP).
                </span>{" "}
                Production plumbing plus an end-to-end GenAI product pattern I
                reuse for enterprise delivery.
              </span>
            </li>
          </ul>
        </section>

        <section
          id="section-contact"
          className="section-anchor rounded-2xl border border-zinc-800/80 bg-zinc-950/40 p-8 ring-1 ring-white/5 sm:p-10"
          aria-labelledby="about-heading"
        >
          <h2
            id="about-heading"
            className="font-display text-xl font-semibold text-zinc-100 sm:text-2xl"
          >
            About Charley
          </h2>

          <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-start">
            <ProfilePhoto />

            <div className="min-w-0 flex-1 space-y-5">
              <div className="space-y-4 text-pretty text-[15px] leading-relaxed text-zinc-400 sm:text-base">
                <p>
                  I am at my best when leaders are ready to sharpen the mandate:
                  turn ambition into priorities, success measures, and a release
                  rhythm that risk, security, and operations can champion with you.
                  I carry one narrative from the executive room to the delivery
                  room so strategy and execution reinforce each other and keep
                  compounding.
                </p>
                <p>
                  Head of AI Products is an owner role: choosing which AI
                  investments to fund, how to prove value, and how to scale with
                  resilience as velocity grows. My career has been that blend at
                  enterprise scale: sound judgment, hands-on delivery, and the
                  cross-functional trust that lets global organizations advance
                  together with confidence.
                </p>
                <p>
                  Partnership runs through everything I do. I am direct,
                  collaborative, and accountable. I surface choices early, keep
                  teams aligned on what matters most, and invest deeply in the
                  success of every leader and builder beside me. Lasting AI
                  capability grows from shared momentum, clarity, and mutual
                  respect.
                </p>
                <p>
                  I thrive alongside executives who elevate both the business
                  story and the engineering bar. I bring focused energy to your
                  priorities, your operating reality, and the excellence we can
                  define together. I would be honored to advance this work with
                  you and help shape what comes next.
                </p>
              </div>

              <div>
                <a
                  href={mailtoHref}
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-cbre px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-cbre/25 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cbre sm:w-auto"
                >
                  Start The Conversation
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={mailtoHref}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-sm text-zinc-300 transition hover:border-zinc-700 hover:text-cbre-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cbre"
                >
                  <span className="text-zinc-500">
                    <MailIcon />
                  </span>
                  <span>{CONTACT_EMAIL}</span>
                </a>
                <SocialLink
                  href="https://www.linkedin.com/in/charley-forey"
                  label="LinkedIn"
                >
                  <LinkedInIcon />
                </SocialLink>
                <SocialLink
                  href="https://github.com/Charley-Forey-AI?tab=repositories"
                  label="GitHub"
                >
                  <GitHubIcon />
                </SocialLink>
              </div>

              <div>
                <a
                  href="/charley-forey-resume-2026.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-cbre/35 bg-cbre/15 px-5 py-3 text-sm font-semibold text-cbre-bright transition hover:bg-cbre/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cbre"
                >
                  Download Resume (PDF)
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

        <footer className="mt-16 space-y-3 text-center text-sm text-zinc-600">
          <p>
            Demos And Site By{" "}
            <Link
              href="https://creai.solutions"
              className="text-zinc-500 underline-offset-4 hover:text-cbre-bright hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cbre"
            >
              creai.solutions
            </Link>
            .
          </p>
          <p className="text-xs text-zinc-600">Last Updated April 2026</p>
          <p className="mx-auto max-w-md text-xs leading-relaxed text-zinc-600">
            CBRE® and related marks are trademarks of CBRE Group, Inc. This page
            is an independent candidate resource for interview discussion and is
            not affiliated with or endorsed by CBRE.
          </p>
        </footer>
      </main>
    </div>
  );
}

function RoleIcon({ children }: { children: ReactNode }) {
  return (
    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cbre/15 text-cbre">
      {children}
    </span>
  );
}

function IconMap() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  );
}

function IconFlask() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M9 3h6M10 9v8l-5 6h14l-5-6V9" />
      <path d="M7 14h10" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 011.098-.092z"
      />
    </svg>
  );
}

function IconCpu() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function IconBook() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
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
      className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-sm text-zinc-300 transition hover:border-zinc-700 hover:text-cbre-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cbre"
    >
      <span className="text-zinc-500">{children}</span>
      <span>{label}</span>
    </a>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
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
