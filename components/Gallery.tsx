"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-pad bg-ivory-50">
      <div className="container-px mx-auto max-w-7xl">
        <ScrollReveal className="max-w-2xl">
          <span className="eyebrow">Behind the Shipment</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-forest-950 sm:text-5xl">
            Gallery
          </h2>
        </ScrollReveal>

        <div className="mt-14 columns-2 gap-4 sm:columns-3 md:columns-4 [&>*]:mb-4">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={img.src} delay={(i % 4) * 0.06}>
              <button
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-xl"
                style={{ aspectRatio: i % 3 === 0 ? "3/4" : "1/1" }}
                aria-label={`View larger image: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-forest-950/0 transition-colors duration-300 group-hover:bg-forest-950/40">
                  <ZoomIn className="h-6 w-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-forest-950/90 p-6 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[80vh] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[active].src}
                alt={galleryImages[active].alt}
                width={1200}
                height={900}
                className="max-h-[80vh] w-full rounded-2xl object-contain"
              />
              <button
                onClick={() => setActive(null)}
                aria-label="Close image"
                className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 text-forest-950"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
