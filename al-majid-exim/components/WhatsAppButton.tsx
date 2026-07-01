"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Al Majid Exim on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.6, duration: 0.5 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(37,211,102,0.45)]"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-white">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.31.64 4.47 1.752 6.316L4 29l7.878-1.706A11.94 11.94 0 0 0 16.001 27C22.63 27 28 21.627 28 15S22.63 3 16.001 3Zm6.995 17.09c-.29.815-1.44 1.5-2.36 1.69-.63.13-1.45.235-4.21-.905-3.53-1.46-5.8-5.03-5.98-5.27-.175-.24-1.42-1.89-1.42-3.605 0-1.715.9-2.56 1.22-2.91.32-.35.7-.435.935-.435.235 0 .47.002.675.012.216.01.507-.082.793.605.29.7 0.986 2.415 1.073 2.59.086.175.144.38.028.62-.115.24-.173.39-.343.6-.172.21-.36.47-.514.63-.172.18-.352.375-.152.735.2.36.89 1.47 1.912 2.38 1.313 1.17 2.42 1.533 2.78 1.706.36.174.573.147.786-.088.213-.234.907-1.057 1.15-1.42.242-.36.485-.3.816-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.687.42.088.15.088.87-.202 1.686Z" />
      </svg>
    </motion.a>
  );
}
