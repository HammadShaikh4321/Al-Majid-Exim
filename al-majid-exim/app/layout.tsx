import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageLoader from "@/components/PageLoader";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://almajidexim.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Al Majid Exim | Fresh Fruits, Vegetables, Onions & Spices Exporter India",
    template: "%s | Al Majid Exim",
  },
  description:
    "Al Majid Exim is a Mumbai-based import-export company exporting premium fresh onions, vegetables, fruits and spices from India to Malaysia, UAE, Singapore, Indonesia and worldwide.",
  keywords: [
    "onion exporter India",
    "fresh vegetable export India",
    "fruit exporter Mumbai",
    "Indian spices exporter",
    "import export company India",
    "Rose onion exporter",
    "Bellary onion exporter",
    "Al Majid Exim",
  ],
  authors: [{ name: "Al Majid Exim" }],
  creator: "Al Majid Exim",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "Al Majid Exim | Fresh from India. Trusted Worldwide.",
    description:
      "Premium quality fresh onions, vegetables, fruits and spices exported from India to worldwide markets.",
    siteName: "Al Majid Exim",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Majid Exim | Fresh from India. Trusted Worldwide.",
    description:
      "Premium quality fresh onions, vegetables, fruits and spices exported from India to worldwide markets.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="overflow-x-hidden">
        <PageLoader />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
