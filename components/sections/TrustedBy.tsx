"use client";

import { Marquee } from "@/components/ui/Marquee";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { assetPath } from "@/lib/site";

const logos = [
  { name: "Microsoft", src: "/Image/enterprises/microsoft.jpeg" },
  { name: "Google", src: "/Image/enterprises/google.jpeg" },
  { name: "Infosys", src: "/Image/enterprises/infosys.jpeg" },
  { name: "HCL", src: "/Image/enterprises/hcl.jpeg" },
  { name: "HDFC Bank", src: "/Image/enterprises/hdfc-bank.jpeg" },
  { name: "Orange", src: "/Image/enterprises/orange.jpeg" },
  { name: "Xebia", src: "/Image/enterprises/xebia.jpeg" },
  { name: "AiProff", src: "/Image/enterprises/aiproff.jpeg" },
  { name: "SEESAC", src: "/Image/enterprises/seesac.jpeg" },
  { name: "Manatec", src: "/Image/enterprises/manatec.jpeg" },
  { name: "Skytech Autoequip Co.", src: "/Image/enterprises/skytech-autoequip.jpeg" },
  { name: "MakeManager", src: "/Image/enterprises/makemanager.jpeg" },
  { name: "Eve Associates", src: "/Image/enterprises/eve-associates.jpeg" },
  { name: "Make My Restaurant", src: "/Image/enterprises/make-my-restaurant.jpeg" },
  { name: "RC", src: "/Image/enterprises/rc.jpeg" },
];

const stats = [
  { to: 100, suffix: "+", label: "Products shipped" },
  { to: 95, suffix: "%", label: "Client retention" },
  { to: 1, suffix: "M+", label: "Revenue generated" },
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
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={assetPath(logo.src)}
              alt={`${logo.name} logo`}
              title={logo.name}
              loading="lazy"
              className="h-12 w-auto max-w-[160px] select-none object-contain transition-transform duration-300 hover:scale-105"
            />
          ))}
        </Marquee>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
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
