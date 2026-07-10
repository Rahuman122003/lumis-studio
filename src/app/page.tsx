import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import HowItWorks from "@/components/HowItWorks";
import Solutions from "@/components/Solutions";
import CaseStudies from "@/components/CaseStudies";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";

export default function Home() {
  return (
    <>
      <ParallaxBackground />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <HowItWorks />
        <Solutions />
        <CaseStudies />
        <Benefits />
        <Testimonials />
        <Pricing />
        <Comparison />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
