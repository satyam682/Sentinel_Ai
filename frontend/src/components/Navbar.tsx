import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, ArrowRight, Shield, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Pixel-Native", href: "#services" },
  { name: "Triple-Agent", href: "#about-us" },
  { name: "Live Red-Team", href: "#projects" },
  { name: "Connectors", href: "#features" },
  { name: "ROI & Pricing", href: "#pricing" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] flex justify-center px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none transition-all duration-300">
      {/* Permanent Floating Rounded Pill Glassmorphism Navbar */}
      <div
        className={`w-full max-w-5xl rounded-full transition-all duration-300 pointer-events-auto flex items-center justify-between px-4 sm:px-6 py-2 sm:py-2.5 bg-[#0c0e14]/85 backdrop-blur-2xl border shadow-[0_15px_45px_rgba(0,0,0,0.85),0_0_20px_rgba(16,185,129,0.18)] ${
          scrolled
            ? "border-primary/30 shadow-[0_15px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(16,185,129,0.25)] bg-[#0a0c10]/95"
            : "border-white/15"
        }`}
      >
        {/* Left: Official Logo & Brand Name */}
        <div className="flex items-center">
          <a
            href="#"
            className="text-foreground text-sm sm:text-base font-bold tracking-tight hover:opacity-90 transition-opacity flex items-center gap-2.5"
          >
            <img
              src="/logo.png"
              alt="Sentinel AI Logo"
              className="w-6 h-6 sm:w-7 sm:h-7 object-contain rounded-md drop-shadow-[0_0_10px_rgba(255,100,0,0.4)]"
            />
            <span className="tracking-tight whitespace-nowrap">
              SENTINEL <span className="text-primary font-extrabold">AI</span>
            </span>
          </a>
        </div>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all px-3.5 py-1.5 rounded-full uppercase tracking-wider font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contacts">
            <Button
              variant="navCta"
              size="sm"
              className="rounded-full uppercase text-[11px] tracking-wider px-5 h-8 cursor-pointer hover:border-primary/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all font-semibold"
            >
              Get Quote
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger Toggle (Floating Round Glass Button) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-foreground w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4 text-primary" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Floating Glassmorphism Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-3 top-[66px] rounded-3xl bg-[#0b0c12]/98 backdrop-blur-2xl p-6 border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_30px_rgba(16,185,129,0.15)] flex flex-col gap-4 animate-fade-in z-[9999] pointer-events-auto max-h-[82vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Sentinel AI" className="w-5 h-5 object-contain" />
              <span className="text-xs uppercase tracking-widest text-foreground font-bold">
                Sentinel AI
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Zero-Trust</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-foreground/90 hover:text-primary hover:bg-white/5 transition-all py-2.5 px-3 rounded-xl flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground/60" />
              </a>
            ))}
          </div>

          {/* Drawer CTA Action */}
          <div className="space-y-3 pt-3 border-t border-white/10">
            <a
              href="#contacts"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full"
            >
              <Button
                variant="hero"
                className="w-full text-xs font-bold uppercase py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <Shield className="w-4 h-4" />
                <span>Request Enterprise Pilot</span>
              </Button>
            </a>
            <p className="text-center text-[10px] text-muted-foreground font-light">
              BYOC Private VPC • 99.4% Extraction Fidelity
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
