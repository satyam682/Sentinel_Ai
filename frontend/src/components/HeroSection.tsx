import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import { ArrowDown, Shield, Sparkles, Zap, Lock } from "lucide-react";

export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const streamUrl =
      "https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: false });
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = streamUrl;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }
  }, []);

  return (
    <section className="relative min-h-[95vh] sm:min-h-screen flex items-end bg-[#070b0a] overflow-hidden select-none">
      {/* 1. Full-Screen HLS Stream Video Background (60% Opacity) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-60"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* 2. Overlays: Dark Left Gradient + Bottom-up Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070b0a] via-[#070b0a]/70 to-transparent z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070b0a] via-[#070b0a]/50 to-transparent z-[1] pointer-events-none" />

      {/* 3. Three Thin Vertical Grid Lines at 25%, 50%, 75% (Desktop Only) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-0 bottom-0 left-[25%] w-[1px] bg-white/[0.07]" />
        <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-white/[0.07]" />
        <div className="absolute top-0 bottom-0 left-[75%] w-[1px] bg-white/[0.07]" />
      </div>

      {/* 4. Central Horizontal SVG Ellipse Glow (Cyan / Dark Green with 25px Gaussian Blur) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] pointer-events-none z-[1] overflow-hidden opacity-60">
        <svg
          viewBox="0 0 800 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full filter blur-[25px]"
        >
          <ellipse
            cx="400"
            cy="100"
            rx="350"
            ry="120"
            fill="url(#central-glow-gradient)"
          />
          <defs>
            <radialGradient
              id="central-glow-gradient"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(400 100) rotate(90) scale(120 350)"
            >
              <stop stopColor="#5ed29c" stopOpacity="0.45" />
              <stop offset="0.6" stopColor="#0ea5e9" stopOpacity="0.2" />
              <stop offset="1" stopColor="#070b0a" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* 5. Bottom-Left Anchored Product Copy Container */}
      <div className="relative z-10 w-full max-w-full sm:max-w-xl lg:max-w-2xl px-5 sm:px-8 md:px-12 pb-10 sm:pb-14 pt-28 sm:pt-36 pointer-events-none">
        {/* Live Innovation Badge */}
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5ed29c]/15 border border-[#5ed29c]/40 text-[#5ed29c] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3.5 opacity-0 animate-fade-up pointer-events-auto shadow-[0_0_20px_rgba(94,210,156,0.25)]"
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
          SENTINEL <span className="text-[#5ed29c]">AI</span>
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
            className="pointer-events-auto bg-[#5ed29c] text-[#070b0a] px-6 sm:px-7 py-3.5 text-xs uppercase tracking-wider font-bold rounded-full cursor-pointer hover:brightness-110 shadow-[0_0_25px_rgba(94,210,156,0.4)] transition-all active:scale-[0.97] inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Shield className="w-4 h-4 shrink-0" />
            <span>Request Enterprise Pilot</span>
          </a>
          <a
            href="#projects"
            className="pointer-events-auto bg-white/10 backdrop-blur-md border border-white/20 text-foreground px-6 sm:px-7 py-3.5 text-xs uppercase tracking-wider font-semibold rounded-full cursor-pointer hover:bg-white/20 transition-all active:scale-[0.97] inline-flex items-center justify-center gap-2 w-full sm:w-auto text-center"
          >
            <Zap className="w-4 h-4 text-[#5ed29c] shrink-0" />
            <span>Test Live Red-Team</span>
          </a>
        </div>

        {/* Enterprise Trust Metrics Line */}
        <div
          className="flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground/80 text-[11px] sm:text-xs font-light opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <span className="flex items-center gap-1">
            <Lock className="w-3 h-3 text-[#5ed29c]" /> BYOC Client VPC
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
        className="hidden md:flex absolute bottom-6 right-8 md:right-16 z-20 items-center gap-2 text-xs font-mono text-muted-foreground/80 hover:text-[#5ed29c] transition-colors cursor-pointer"
      >
        <span>EXPLORE PIXEL-NATIVE ENGINE</span>
        <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-secondary/40 animate-bounce">
          <ArrowDown className="w-4 h-4 text-[#5ed29c]" />
        </div>
      </a>
    </section>
  );
};
