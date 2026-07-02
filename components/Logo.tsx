export default function Logo({
  className = "h-10 w-10",
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "light";
}) {
  const ring = tone === "gold" ? "#C9A15A" : "#FBF9F3";
  const letters = tone === "gold" ? "#0A2418" : "#0A2418";
  const bg = tone === "gold" ? "#0A2418" : "#FBF9F3";

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Al Majid Exim logo"
    >
      <circle cx="32" cy="32" r="30" fill={bg} stroke={ring} strokeWidth="1.5" />
      {/* Globe meridians */}
      <g stroke={ring} strokeOpacity="0.55" strokeWidth="0.9" fill="none">
        <ellipse cx="32" cy="32" rx="30" ry="12" />
        <ellipse cx="32" cy="32" rx="18" ry="30" />
        <line x1="2" y1="32" x2="62" y2="32" />
      </g>
      {/* Orbit arc / trade route */}
      <path
        d="M8 40 C 20 20, 44 20, 56 26"
        stroke="#C9A15A"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="3 4"
      />
      <circle cx="56" cy="26" r="2" fill="#C9A15A" />
      {/* AM Monogram */}
      <text
        x="32"
        y="39"
        textAnchor="middle"
        fontFamily="var(--font-fraunces), serif"
        fontSize="22"
        fontWeight="600"
        fill={tone === "gold" ? "#F4EFE2" : letters}
      >
        AM
      </text>
    </svg>
  );
}
