import React from "react";
import { ShieldCheck, FileSpreadsheet, Zap, Lock, Cpu, Database } from "lucide-react";

export const TrustStats: React.FC = () => {
  const stats = [
    {
      value: "99.4%",
      label: "Visual Extraction Fidelity",
      subtext: "On complex multi-column tables",
      icon: FileSpreadsheet,
    },
    {
      value: "< 850ms",
      label: "Zero-Latency Retrieval",
      subtext: "With offline DSPy prompt optimization",
      icon: Zap,
    },
    {
      value: "100%",
      label: "Zero-Trust Isolation",
      subtext: "Deployable inside client AWS/Azure VPC",
      icon: Lock,
    },
    {
      value: "90%",
      label: "Token Cost Reduction",
      subtext: "Powered by HiFi-RAG tiered caching",
      icon: Cpu,
    },
  ];

  const enterpriseLogos = [
    "ACME Global Finance",
    "Apex Logistics Corp",
    "Nexus Legal Partners",
    "Vanguard Capital",
    "Stratis Health Systems",
  ];

  return (
    <section className="relative z-20 py-16 bg-hero-bg/95 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Enterprise Logos Header */}
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground/70 mb-8">
          Securing mission-critical documents & automated agent workflows for enterprise leaders
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 mb-16 grayscale hover:grayscale-0 transition-all duration-300">
          {enterpriseLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm font-semibold tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              <Database className="w-4 h-4 text-primary" />
              <span>{logo}</span>
            </div>
          ))}
        </div>

        {/* 4 Core Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="relative group p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <ShieldCheck className="w-4 h-4 text-primary/40" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-foreground/90 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground font-light">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
