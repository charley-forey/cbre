"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  id: string;
  start: number;
  title: string;
};

export function VideoEmbed({ id, start, title }: Props) {
  const [loaded, setLoaded] = useState(false);
  const watchUrl =
    start > 0
      ? `https://www.youtube.com/watch?v=${id}&t=${start}s`
      : `https://www.youtube.com/watch?v=${id}`;
  const embedSrc =
    start > 0
      ? `https://www.youtube-nocookie.com/embed/${id}?start=${start}`
      : `https://www.youtube-nocookie.com/embed/${id}`;
  const thumbSrc = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  return (
    <figure className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/60 ring-1 ring-white/5">
      <div className="relative aspect-video w-full bg-black">
        {!loaded ? (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="group relative flex h-full w-full items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cbre"
            aria-label={`Load video: ${title}`}
          >
            <Image
              src={thumbSrc}
              alt=""
              fill
              className="object-cover opacity-90 transition group-hover:opacity-100"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
            />
            <span className="absolute inset-0 bg-black/35 transition group-hover:bg-black/25" />
            <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-cbre/90 text-white shadow-lg ring-2 ring-white/20 transition group-hover:scale-105 group-hover:bg-cbre">
              <PlayIcon className="ml-1 h-8 w-8" />
            </span>
            <span className="sr-only">Play video</span>
          </button>
        ) : (
          <iframe
            src={`${embedSrc}&autoplay=1`}
            title={title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </div>
      <figcaption className="flex flex-col gap-2 border-t border-zinc-800/80 px-3 py-3 text-xs sm:flex-row sm:items-start sm:justify-between sm:gap-3">
        <span className="min-w-0 flex-1 text-pretty leading-snug text-zinc-300">
          {title}
        </span>
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 self-start font-medium text-cbre-muted underline-offset-4 hover:text-cbre-bright hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cbre"
        >
          Open on YouTube
        </a>
      </figcaption>
    </figure>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
