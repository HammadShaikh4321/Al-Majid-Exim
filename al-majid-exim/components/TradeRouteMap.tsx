"use client";

import { motion } from "framer-motion";
import { exportPorts, originPort } from "@/lib/data";

// A stylised dotted world map with animated trade routes from Mumbai
// to the company's export markets. Purely decorative / abstract, not
// a geographically precise projection.
export default function TradeRouteMap() {
  const dots: { x: number; y: number }[] = [];
  // Deterministic pseudo-random dot field shaped loosely like landmasses
  const landBands = [
    { yStart: 60, yEnd: 130, xStart: 60, xEnd: 300, density: 5 }, // N. America
    { yStart: 150, yEnd: 260, xStart: 120, xEnd: 260, density: 5 }, // S. America
    { yStart: 40, yEnd: 140, xStart: 380, xEnd: 620, density: 4 }, // Europe
    { yStart: 60, yEnd: 260, xStart: 420, xEnd: 560, density: 4 }, // Africa
    { yStart: 30, yEnd: 220, xStart: 560, xEnd: 900, density: 4 }, // Asia
    { yStart: 300, yEnd: 400, xStart: 760, xEnd: 900, density: 6 }, // Oceania
  ];
  landBands.forEach((band, bi) => {
    for (let x = band.xStart; x < band.xEnd; x += band.density) {
      for (let y = band.yStart; y < band.yEnd; y += band.density) {
        // pseudo-random jitter/skip for organic edges
        const seed = Math.sin(x * 12.9898 + y * 78.233 + bi) * 43758.5453;
        const frac = seed - Math.floor(seed);
        if (frac > 0.42) {
          dots.push({ x: x + frac * 2, y: y + frac * 2 });
        }
      }
    }
  });

  return (
    <svg
      viewBox="0 0 1000 500"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mapFade" cx="62%" cy="52%" r="65%">
          <stop offset="0%" stopColor="#C9A15A" stopOpacity="0.16" />
          <stop offset="60%" stopColor="#0F3323" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="1000" height="500" fill="url(#mapFade)" />

      {/* Dot field */}
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="1.15" fill="#EAD6A6" fillOpacity="0.22" />
      ))}

      {/* Origin port: Mumbai */}
      <g>
        <circle cx={originPort.x} cy={originPort.y} r="10" fill="#C9A15A" fillOpacity="0.14" />
        <circle
          cx={originPort.x}
          cy={originPort.y}
          r="4.5"
          fill="#EAD6A6"
          className="animate-pulse_dot"
        />
        <circle cx={originPort.x} cy={originPort.y} r="4.5" fill="none" stroke="#EAD6A6" strokeWidth="1" />
      </g>

      {/* Routes to each export market */}
      {exportPorts.map((port, i) => {
        const midX = (originPort.x + port.x) / 2;
        const midY = Math.min(originPort.y, port.y) - 40 - i * 6;
        const path = `M ${originPort.x} ${originPort.y} Q ${midX} ${midY} ${port.x} ${port.y}`;
        return (
          <g key={port.name}>
            <path
              d={path}
              fill="none"
              stroke="#C9A15A"
              strokeOpacity="0.35"
              strokeWidth="1.2"
            />
            <motion.path
              d={path}
              fill="none"
              stroke="#EAD6A6"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeDasharray="6 10"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -160 }}
              transition={{ duration: 4.5 + i, repeat: Infinity, ease: "linear" }}
            />
            <circle cx={port.x} cy={port.y} r="7" fill="#0A2418" stroke="#C9A15A" strokeWidth="1.2" />
            <circle cx={port.x} cy={port.y} r="3" fill="#EAD6A6" className="animate-pulse_dot" />
          </g>
        );
      })}
    </svg>
  );
}
