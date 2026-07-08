"use client";

import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  reverse?: boolean;
  speed?: "normal" | "slow";
  className?: string;
};

/** Infinite, seamless logo/label marquee. Duplicates children for a loop. */
export function Marquee({
  children,
  reverse = false,
  speed = "normal",
  className,
}: MarqueeProps) {
  const anim = speed === "slow" ? "animate-marquee-slow" : "animate-marquee";
  return (
    <div className={["group relative overflow-hidden mask-fade-x", className].join(" ")}>
      <div
        className={[
          "flex w-max shrink-0 items-center gap-16 pr-16",
          anim,
          reverse ? "[animation-direction:reverse]" : "",
          "group-hover:[animation-play-state:paused]",
        ].join(" ")}
      >
        {children}
        {/* duplicate for seamless loop */}
        <span className="flex items-center gap-16 pr-16" aria-hidden>
          {children}
        </span>
      </div>
    </div>
  );
}
