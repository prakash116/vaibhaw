"use client";

/** Decorative floating gradient orbs / shapes for section backgrounds. */
export function Orbs({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className={[
          "absolute -left-24 top-10 h-72 w-72 rounded-full blur-3xl animate-float-slow",
          variant === "dark" ? "bg-brand-500/25" : "bg-brand-300/30",
        ].join(" ")}
      />
      <div
        className={[
          "absolute right-[-6rem] top-1/3 h-96 w-96 rounded-full blur-3xl animate-float",
          variant === "dark" ? "bg-brand-700/25" : "bg-brand-200/40",
        ].join(" ")}
      />
      <div
        className={[
          "absolute bottom-0 left-1/3 h-64 w-64 rounded-full blur-3xl animate-float-slow",
          variant === "dark" ? "bg-brand-600/20" : "bg-brand-100/50",
        ].join(" ")}
      />
    </div>
  );
}
