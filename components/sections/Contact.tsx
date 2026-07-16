"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Check,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 3500);
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Get in touch"
          title={
            <>
              Let&apos;s build something <span className="text-gradient">exceptional</span>
            </>
          }
          description="Tell us about your project. We usually reply within one business day."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: details + map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="card p-8">
              <h3 className="text-lg font-bold">Company details</h3>
              <ul className="mt-6 space-y-5">
                <ContactRow icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
                <ContactRow icon={Phone} label="Phone" value={site.phone} href={`tel:${site.phone}`} />
                <ContactRow icon={MapPin} label="Office" value={site.address} />
              </ul>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Map */}
            <a
              href={site.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-3xl border border-black/[0.06] bg-night shadow-soft transition-shadow hover:shadow-lift"
            >
              <div className="absolute inset-0 bg-grid-lines opacity-10 [background-size:32px_32px]" />
              <div className="relative flex h-56 flex-col items-center justify-center gap-3 text-white">
                <span className="relative flex h-12 w-12 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-brand-500/40 animate-pulse-ring" />
                  <MapPin className="h-8 w-8 text-brand-400 transition-transform group-hover:scale-110" />
                </span>
                <p className="text-sm font-medium text-white/70">Open in Google Maps</p>
                <p className="text-xs text-white/40">{site.address}</p>
              </div>
            </a>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="card p-8 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" placeholder="Jane Cooper" />
              <Field label="Work email" name="email" type="email" placeholder="jane@company.com" />
              <Field label="Company" name="company" placeholder="Acme Inc." />
              <Field label="Phone" name="phone" placeholder="+91 90000 00000" />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold" htmlFor="service">
                What can we help with?
              </label>
              <select
                id="service"
                name="service"
                className="w-full rounded-2xl border border-black/10 bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              >
                <option>AI Automation</option>
                <option>Web Development</option>
                <option>Mobile App</option>
                <option>SaaS Development</option>
                <option>Restaurant Solution</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold" htmlFor="message">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us a little about what you're building…"
                className="w-full resize-none rounded-2xl border border-black/10 bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="btn-primary mt-6 w-full text-base"
            >
              {status === "sent" ? (
                <>
                  <Check className="h-5 w-5" />
                  Message sent!
                </>
              ) : status === "sending" ? (
                <>Sending…</>
              ) : status === "error" ? (
                <>Something went wrong — try again</>
              ) : (
                <>
                  Send message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
            <p className="mt-3 text-center text-xs text-ink/45">
              By submitting, you agree to our privacy policy. We never share your data.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">{label}</p>
        <p className="mt-0.5 font-medium text-ink/80">{value}</p>
      </div>
    </div>
  );
  return <li>{href ? <a href={href} className="block transition-opacity hover:opacity-70">{content}</a> : content}</li>;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-black/10 bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
      />
    </div>
  );
}
