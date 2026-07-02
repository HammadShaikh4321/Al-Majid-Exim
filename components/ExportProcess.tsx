"use client";

import ScrollReveal from "./ScrollReveal";
import { processSteps } from "@/lib/data";

export default function ExportProcess() {
  return (
    <section id="process" className="section-pad bg-forest-950 relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest-700/20 blur-3xl" />
      <div className="container-px relative mx-auto max-w-7xl">
        <ScrollReveal className="max-w-2xl">
          <span className="eyebrow">From Farm to Freight</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ivory-50 sm:text-5xl">
            Our Export Process
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">
            Every consignment follows the same disciplined sequence — from the mandi to your
            port of arrival — so quality and timelines stay predictable, shipment after
            shipment.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.08}>
              <div className="relative pl-16">
                <span className="absolute left-0 top-0 font-display text-5xl text-gold-500/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="absolute left-6 top-3 h-full w-px bg-gradient-to-b from-gold-500/40 to-transparent md:hidden" />
                <h3 className="font-display text-xl text-white">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/55">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
