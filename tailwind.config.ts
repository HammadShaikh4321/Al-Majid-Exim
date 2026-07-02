import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#051A10",
          900: "#0A2418",
          800: "#0F3323",
          700: "#164430",
          600: "#1D5A3E",
          500: "#276E4C",
        },
        gold: {
          300: "#EAD6A6",
          400: "#DDBC7C",
          500: "#C9A15A",
          600: "#AD8546",
          700: "#8C6A37",
        },
        ivory: {
          50: "#FBF9F3",
          100: "#F4EFE2",
          200: "#EAE1CC",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grain": "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(201,161,90,0.35), 0 8px 30px -8px rgba(201,161,90,0.25)",
        card: "0 4px 24px -6px rgba(5,26,16,0.15)",
      },
      keyframes: {
        dash: {
          to: { strokeDashoffset: "0" },
        },
        pulse_dot: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        dash: "dash 2.4s ease-in-out infinite alternate",
        pulse_dot: "pulse_dot 2.2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
