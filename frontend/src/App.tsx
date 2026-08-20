import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { TrustStats } from "./components/TrustStats";
import { PixelNativeShowcase } from "./components/PixelNativeShowcase";
import { AgentArchitecture } from "./components/AgentArchitecture";
import { InteractiveRiskDemo } from "./components/InteractiveRiskDemo";
import { EnterpriseSecurity } from "./components/EnterpriseSecurity";
import { ConnectorsGrid } from "./components/ConnectorsGrid";
import { ComparisonMatrix } from "./components/ComparisonMatrix";
import { ParticleHeroBanner } from "./components/ParticleHeroBanner";
import { PricingRoiSection } from "./components/PricingRoiSection";
import { FaqSection } from "./components/FaqSection";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";
import { ScrollReveal } from "./components/ScrollReveal";

export const App: React.FC = () => {
  return (
    <div className="bg-hero-bg min-h-screen text-foreground font-sora selection:bg-primary selection:text-primary-foreground">
      {/* Floating Transparent Top Navigation */}
      <Navbar />

      <main className="space-y-0 overflow-hidden">
        {/* 1. Full-Screen 3D Interactive Spline Hero (High-Perf 60fps) */}
        <HeroSection />

        {/* 2. Enterprise Trust & Live Metrics Bar */}
        <ScrollReveal delay={100}>
          <TrustStats />
        </ScrollReveal>

        {/* 3. Pixel-Native Visual Table & Chart Breakdown */}
        <ScrollReveal delay={150}>
          <PixelNativeShowcase />
        </ScrollReveal>

        {/* 4. Multi-Agent Pipeline & Offline DSPy Architecture */}
        <ScrollReveal delay={150}>
          <AgentArchitecture />
        </ScrollReveal>

        {/* 5. Live Interactive Red-Teaming & Circuit-Breaker Demo */}
        <ScrollReveal delay={150}>
          <InteractiveRiskDemo />
        </ScrollReveal>

        {/* 6. Sovereign VPC & Zero-Retention Security Infrastructure */}
        <ScrollReveal delay={150}>
          <EnterpriseSecurity />
        </ScrollReveal>

        {/* 7. Enterprise Cloud Connectors Hub */}
        <ScrollReveal delay={150}>
          <ConnectorsGrid />
        </ScrollReveal>

        {/* 8. Competitive Matrix (SentinelAI vs Glean vs ChatGPT) */}
        <ScrollReveal delay={150}>
          <ComparisonMatrix />
        </ScrollReveal>

        {/* 9. Interactive Neural Particle Text Showcase (React Bits) */}
        <ScrollReveal delay={150}>
          <ParticleHeroBanner />
        </ScrollReveal>

        {/* 10. Interactive ROI Calculator & Seat Pricing Tiers */}
        <ScrollReveal delay={150}>
          <PricingRoiSection />
        </ScrollReveal>

        {/* 11. Frequently Asked Questions Accordion */}
        <ScrollReveal delay={150}>
          <FaqSection />
        </ScrollReveal>

        {/* 12. High-Converting Pilot Booking CTA */}
        <ScrollReveal delay={150}>
          <CtaSection />
        </ScrollReveal>
      </main>

      {/* 13. Full Enterprise Footer */}
      <Footer />
    </div>
  );
};

export default App;
