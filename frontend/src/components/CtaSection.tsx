import React, { useState } from "react";
import { ArrowRight, ShieldCheck, CheckCircle2, Lock, Sparkles } from "lucide-react";

export const CtaSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contacts" className="relative py-24 bg-hero-bg text-foreground overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-[#121a15] to-[#0a0f0d] border border-primary/40 p-8 md:p-16 text-center shadow-[0_0_60px_rgba(16,185,129,0.12)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Sovereign Enterprise Intelligence</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
            Stop Risking Your Enterprise On <span className="text-primary">Unsecured AI Wrappers</span>
          </h2>

          <p className="text-muted-foreground text-sm md:text-base font-light max-w-2xl mx-auto mb-10">
            Join forward-thinking enterprise leaders who deploy verified, pixel-native RAG agents with built-in self-testing security guardrails.
          </p>

          {/* Form */}
          {submitted ? (
            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/40 text-primary text-sm font-semibold max-w-md mx-auto flex items-center justify-center gap-3 animate-fade-in">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Thank you! Our security architect will contact you within 2 business hours.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-8"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email..."
                className="w-full px-5 py-3.5 rounded-xl bg-black/60 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-sora"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-lg transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <span>Request Pilot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Reassurance Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground font-light pt-2">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-primary" /> 14-Day Zero-Risk Trial
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-primary" /> Deploy on Private AWS VPC
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" /> No Credit Card Required
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
