import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import { ArrowDown, Shield, Sparkles, Zap, Lock } from "lucide-react";

// Lazy-load Spline component
const Spline = lazy(() => import("@splinetool/react-spline"));

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [loadSpline, setLoadSpline] = useState(false);

  // Defer Spline load slightly after first paint so initial UI renders instantly at 120 FPS
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadSpline(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[95vh] sm:min-h-screen flex items-end bg-hero-bg overflow-hidden select-none"
    >
      {/* 3D Spline Interactive Background - pointer-events-none ensures 100% native scroll speed */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {loadSpline ? (
          <Suspense
            fallback={
              <div className="absolute inset-0 bg-hero-bg flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
              </div>
            }
          >
            <Spline
              scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"
              className="w-full h-full scale-100 object-cover pointer-events-none"
            />
          </Suspense>
        ) : (
          <div className="absolute inset-0 bg-hero-bg" />
        )}
      </div>

      {/* Cyber Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-hero-bg via-hero-bg/70 sm:via-hero-bg/40 to-transparent z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.06)_0%,transparent_60%)] pointer-events-none z-[1]" />

      {/* Bottom-Left Anchored Product Copy Container */}
      <div className="relative z-10 w-full max-w-full sm:max-w-xl lg:max-w-2xl px-5 sm:px-8 md:px-12 pb-10 sm:pb-14 pt-28 sm:pt-36 pointer-events-none">
        {/* Live Innovation Badge */}
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/15 border border-primary/40 text-primary text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3.5 opacity-0 animate-fade-up pointer-events-auto shadow-[0_0_20px_rgba(16,185,129,0.2)]"
          style={{ animationDelay: "0.1s" }}
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span>Pixel-Native Vision RAG • Zero-Trust Agents</span>
        </div>

        {/* Main Product Title */}
        <h1
          className="text-[clamp(2.5rem,8.5vw,5.5rem)] font-extrabold leading-[1.04] tracking-[-0.04em] text-foreground mb-3 uppercase opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          SENTINEL <span className="text-primary">AI</span>
        </h1>

        {/* Product Subheading */}
        <p
          className="text-foreground/90 text-base sm:text-xl md:text-2xl font-light mb-3 sm:mb-4 opacity-0 animate-fade-up leading-snug"
          style={{ animationDelay: "0.35s" }}
        >
          Visual Document Intelligence with Self-Defending Guardrails.
        </p>

        {/* Product Description */}
        <p
          className="text-muted-foreground text-xs sm:text-sm md:text-base font-light leading-relaxed mb-6 opacity-0 animate-fade-up max-w-xl"
          style={{ animationDelay: "0.5s" }}
        >
          Extract complex balance sheets, nested tables, and technical diagrams with <strong className="text-foreground font-medium">99.4% pixel-native fidelity</strong>. Powered by Triple-Agent verification and dynamic red-teaming circuit-breakers — deployed inside your sovereign private VPC.
        </p>

        {/* Action CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 font-bold opacity-0 animate-fade-up mb-5 w-full sm:w-auto"
          style={{ animationDelay: "0.65s" }}
        >
          <a
            href="#contacts"
            className="pointer-events-auto bg-primary text-primary-foreground px-6 sm:px-7 py-3.5 text-xs uppercase tracking-wider font-bold rounded-lg cursor-pointer hover:brightness-110 shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all active:scale-[0.97] inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Shield className="w-4 h-4 shrink-0" />
            <span>Request Enterprise Pilot</span>
          </a>
          <a
            href="#projects"
            className="pointer-events-auto bg-white/10 backdrop-blur-md border border-white/20 text-foreground px-6 sm:px-7 py-3.5 text-xs uppercase tracking-wider font-semibold rounded-lg cursor-pointer hover:bg-white/20 transition-all active:scale-[0.97] inline-flex items-center justify-center gap-2 w-full sm:w-auto text-center"
          >
            <Zap className="w-4 h-4 text-primary shrink-0" />
            <span>Test Live Red-Team</span>
          </a>
        </div>

        {/* Enterprise Trust Metrics Line */}
        <div
          className="flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground/80 text-[11px] sm:text-xs font-light opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <span className="flex items-center gap-1">
            <Lock className="w-3 h-3 text-primary" /> BYOC Client VPC
          </span>
          <span>•</span>
          <span>Zero-Data Retention</span>
          <span>•</span>
          <span>90% Token Cost Reduction</span>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <a
        href="#services"
        className="hidden md:flex absolute bottom-6 right-8 md:right-16 z-20 items-center gap-2 text-xs font-mono text-muted-foreground/80 hover:text-primary transition-colors cursor-pointer"
      >
        <span>EXPLORE PIXEL-NATIVE ENGINE</span>
        <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-secondary/40 animate-bounce">
          <ArrowDown className="w-4 h-4 text-primary" />
        </div>
      </a>
    </section>
  );
};
