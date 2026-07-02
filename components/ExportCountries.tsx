"use client";

import Image from "next/image";
import { Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { exportCountries } from "@/lib/data";

export default function ExportCountries() {
  return (
    <section id="markets" className="section-pad bg-forest-950">
      <div className="container-px mx-auto max-w-7xl">
        <ScrollReveal className="max-w-2xl">
          <span className="eyebrow">Where We Ship</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ivory-50 sm:text-5xl">
            Export Markets
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">
            Currently trading with partners across the Gulf and Southeast Asia — and open to new
            markets worldwide.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {exportCountries.map((c, i) => (
            <ScrollReveal key={c.name} delay={i * 0.08}>
              <div className="group relative h-72 overflow-hidden rounded-2xl">
                <Image
                  src={c.image}
                  alt={`${c.city}, ${c.name} — Al Majid Exim export market`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-2xl">{c.flag}</span>
                  <h3 className="mt-2 font-display text-lg text-white">{c.name}</h3>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-gold-300/80">
                    {c.city}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2} className="mt-8 flex items-center justify-center gap-3 rounded-2xl border border-dashed border-white/15 py-6 text-center">
          <Globe className="h-5 w-5 text-gold-400" />
          <p className="text-sm text-white/60">
            Don&apos;t see your country? We&apos;re actively expanding —{" "}
            <a href="#contact" className="font-medium text-gold-300 underline underline-offset-4">
              tell us where you are
            </a>
            .
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
