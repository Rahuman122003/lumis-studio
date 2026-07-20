import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import HowItWorks from "@/components/HowItWorks";
import Solutions from "@/components/Solutions";
import CaseStudies from "@/components/CaseStudies";
import Benefits from "@/components/Benefits";
import ExplainSection from "@/components/ExplainSection";
import Testimonials from "@/components/Testimonials";
import ProxSection from "@/components/ProxSection";
import SecSection from "@/components/SecSection";
import OurProcess from "@/components/OurProcess";
import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import StackFeatureSection from "@/components/ui/stack-feature-section";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Ticker />
        <HowItWorks />
        <Solutions />
        <CaseStudies />
        <Benefits />
        <ExplainSection />
        <Testimonials />
        <ProxSection />
        <SecSection />
        <OurProcess />
        <Comparison />
        <FAQ />
        <CTABanner />
        <StackFeatureSection />
      </main>
      <Footer />
    </>
  );
}
