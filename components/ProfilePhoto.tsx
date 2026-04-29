"use client";

import Image from "next/image";
import { useState } from "react";

export function ProfilePhoto() {
  const [showFallback, setShowFallback] = useState(false);

  if (showFallback) {
    return (
      <div
        className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-zinc-800 ring-1 ring-white/10"
        aria-hidden
      >
        <span className="font-display text-2xl font-semibold tracking-tight text-zinc-100">
          CF
        </span>
      </div>
    );
  }

  return (
    <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/10">
      <Image
        src="/charley.jpg"
        alt="Charley Forey"
        width={112}
        height={112}
        className="h-full w-full object-cover"
        onError={() => setShowFallback(true)}
        priority
      />
    </div>
  );
}
