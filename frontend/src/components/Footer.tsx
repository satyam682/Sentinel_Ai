import React from "react";
import CursorGrid from "./CursorGrid";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#07070a] text-foreground border-t border-border pt-12 sm:pt-16 pb-10 sm:pb-12 overflow-hidden">
      {/* Interactive Cyber CursorGrid Background from React Bits */}
      <div className="absolute inset-0 w-full h-full pointer-events-auto z-0 opacity-70">
        <CursorGrid
          cellSize={60}
          color="#10b981"
          radius={130}
          falloff="smooth"
          holdTime={350}
          fadeDuration={700}
          lineWidth={1}
          maxOpacity={0.85}
          fillOpacity={0.06}
          gridOpacity={0.03}
          cellRadius={4}
          clickPulse={true}
          pulseSpeed={550}
        />
      </div>

      {/* Subtle Gradient Fog to keep text crystal-clear */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07070a]/90 via-[#07070a]/60 to-transparent pointer-events-none z-[1]" />

      {/* Main Content (relative z-10 ensures clicks & hovers work seamlessly) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pointer-events-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-12 sm:mb-16">
          {/* Col 1 & 2: Brand Info (Full width on mobile) */}
          <div className="col-span-2 space-y-3 sm:space-y-4">
            <div className="text-lg sm:text-xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="Sentinel AI Logo"
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain rounded-md drop-shadow-[0_0_8px_rgba(255,100,0,0.4)]"
              />
              <span>SENTINEL <span className="text-primary font-extrabold">AI</span></span>
            </div>
            <p className="text-xs text-muted-foreground font-light max-w-sm leading-relaxed">
              Enterprise-grade Agentic RAG with Pixel-Native visual reading and integrated self-testing security guardrails. Built for precision-critical industries.
            </p>

            {/* Live Operational Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/40 border border-border text-[10px] sm:text-[11px] font-mono text-foreground backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>All Systems Operational (99.99% Uptime)</span>
            </div>
          </div>

          {/* Col 3: Product */}
          <div className="space-y-2.5 text-xs">
            <div className="font-semibold text-foreground uppercase tracking-wider text-[11px]">
              Platform
            </div>
            <ul className="space-y-2 text-muted-foreground font-light">
              <li><a href="#services" className="hover:text-primary transition-colors py-1 block">Pixel-Native RAG</a></li>
              <li><a href="#about-us" className="hover:text-primary transition-colors py-1 block">Triple-Agent Engine</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors py-1 block">Red-Teaming Suite</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors py-1 block">Connectors</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors py-1 block">ROI Calculator</a></li>
            </ul>
          </div>

          {/* Col 4: Security & Compliance */}
          <div className="space-y-2.5 text-xs">
            <div className="font-semibold text-foreground uppercase tracking-wider text-[11px]">
              Trust & Security
            </div>
            <ul className="space-y-2 text-muted-foreground font-light">
              <li><a href="#about-us" className="hover:text-primary transition-colors py-1 block">Client VPC (BYOC)</a></li>
              <li><a href="#about-us" className="hover:text-primary transition-colors py-1 block">Zero-Retention</a></li>
              <li><a href="#about-us" className="hover:text-primary transition-colors py-1 block">PII Masking Filter</a></li>
              <li><a href="#about-us" className="hover:text-primary transition-colors py-1 block">SOC2 Type II</a></li>
              <li><a href="#about-us" className="hover:text-primary transition-colors py-1 block">DPDP Act 2023</a></li>
            </ul>
          </div>

          {/* Col 5: Company */}
          <div className="space-y-2.5 text-xs">
            <div className="font-semibold text-foreground uppercase tracking-wider text-[11px]">
              Company
            </div>
            <ul className="space-y-2 text-muted-foreground font-light">
              <li><a href="#about-us" className="hover:text-primary transition-colors py-1 block">Team Sentinel</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors py-1 block">Enterprise Pricing</a></li>
              <li><a href="#contacts" className="hover:text-primary transition-colors py-1 block">Security Advisory</a></li>
              <li><a href="#contacts" className="hover:text-primary transition-colors py-1 block">Schedule Demo</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs text-muted-foreground/70 font-light text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} SentinelAI Inc. JG TechVerse 2026. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Whitepaper</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
