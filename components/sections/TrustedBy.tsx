"use client";

import { Marquee } from "@/components/ui/Marquee";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

const logos = [
  "Northwind",
  "Acme Corp",
  "Lumen",
  "Vertex",
  "Foodly",
  "Bistro Group",
  "Nova Bank",
  "Zenith",
  "Harbor",
  "Cater.io",
];

const stats = [
  { to: 200, suffix: "+", label: "Products shipped" },
  { to: 98, suffix: "%", label: "Client retention" },
  { to: 40, suffix: "M+", label: "Users reached" },
  { to: 12, suffix: "+", label: "Countries served" },
];

export function TrustedBy() {
  return (
    <section className="border-y border-black/5 bg-white py-16">
      <div className="container-x">
        <Reveal>
          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.18em] text-ink/40">
            Trusted by ambitious teams &amp; enterprises worldwide
          </p>
        </Reveal>

        <Marquee>
          {logos.map((name) => (
            <span
              key={name}
              className="select-none whitespace-nowrap text-2xl font-bold tracking-tight text-ink/25 transition-colors hover:text-brand-500"
            >
              {name}
            </span>
          ))}
        </Marquee>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="card card-hover flex flex-col items-center gap-1 p-8 text-center">
                <span className="text-4xl font-bold text-gradient lg:text-5xl">
                  <Counter to={s.to} suffix={s.suffix} />
                </span>
                <span className="text-sm font-medium text-ink/55">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
