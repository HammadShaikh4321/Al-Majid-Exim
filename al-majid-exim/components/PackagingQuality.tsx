"use client";

import Image from "next/image";
import { PackageCheck, Snowflake, Ruler, Stamp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: PackageCheck,
    title: "Export-Grade Packing",
    text: "Cartons, mesh bags and jute sacks selected to suit each product's transit needs.",
  },
  {
    icon: Snowflake,
    title: "Cold Chain Handling",
    text: "Pre-cooling and reefer container loading to preserve freshness across long voyages.",
  },
  {
    icon: Ruler,
    title: "Strict Grading",
    text: "Size, colour and ripeness graded by hand against destination-market specifications.",
  },
  {
    icon: Stamp,
    title: "Certified Quality",
    text: "Phytosanitary and Certificate of Origin documentation accompany every shipment.",
  },
];

export default function PackagingQuality() {
  return (
    <section className="section-pad bg-ivory-50">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <ScrollReveal direction="right" className="order-2 lg:order-1">
            <span className="eyebrow">Packaging &amp; Quality</span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-forest-950 sm:text-5xl">
              Packed with the <span className="italic text-gold-600">voyage</span> in mind
            </h2>
            <p className="mt-6 text-base leading-relaxed text-forest-800/80 sm:text-lg">
              Fresh produce is unforgiving — the right packaging is the difference between a
              satisfied buyer and a spoiled container. We choose materials and methods for each
              product's specific shelf-life and climate profile.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-900 text-gold-400">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base text-forest-950">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-forest-800/70">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.1} className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?q=80&w=1200&auto=format&fit=crop"
                  alt="Export cartons packed and ready for shipment"
                  width={900}
                  height={520}
                  className="h-64 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1620200423727-8127f75d7f53?q=80&w=800&auto=format&fit=crop"
                  alt="Quality inspection of fresh produce before export"
                  width={500}
                  height={500}
                  className="h-44 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1609587312208-cea54be969e7?q=80&w=800&auto=format&fit=crop"
                  alt="Reefer shipping containers at Mumbai port"
                  width={500}
                  height={500}
                  className="h-44 w-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
