import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import ExportProcess from "@/components/ExportProcess";
import PackagingQuality from "@/components/PackagingQuality";
import ExportCountries from "@/components/ExportCountries";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <ExportProcess />
      <PackagingQuality />
      <ExportCountries />
      <Stats />
      <Gallery />
      <FAQ />
      <Contact />
    </>
  );
}
