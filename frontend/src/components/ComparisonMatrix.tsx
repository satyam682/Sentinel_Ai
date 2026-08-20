import React from "react";
import { Check, X, Minus, Sparkles, Scale, ChevronsRight } from "lucide-react";

export const ComparisonMatrix: React.FC = () => {
  const rows = [
    {
      feature: "Complex Table & Chart Ingestion",
      sentinel: "Pixel-Native Vision (99.4% Accuracy)",
      glean: "Text-only OCR (Lossy on nested tables)",
      chatgpt: "Fails on multi-column balance sheets",
      highlight: true,
    },
    {
      feature: "Security Red-Teaming & Circuit-Breaker",
      sentinel: "Live Dynamic Risk Score & Action Guard",
      glean: "Static ACLs without adversarial defense",
      chatgpt: "Basic filters (Vulnerable to jailbreaks)",
      highlight: true,
    },
    {
      feature: "Prompt Optimization Architecture",
      sentinel: "Offline Stanford DSPy compilation (0ms delay)",
      glean: "Hardcoded proprietary heuristics",
      chatgpt: "Manual human prompt strings",
      highlight: true,
    },
    {
      feature: "Client VPC / On-Prem Sovereignty",
      sentinel: "Full AWS/Azure VPC Isolation (BYOC)",
      glean: "Vendor SaaS Cloud Only",
      chatgpt: "Third-party multi-tenant cloud",
      highlight: false,
    },
    {
      feature: "Autonomous Tool Action Execution",
      sentinel: "Verified Slack/Jira/ERP integration",
      glean: "Read-only enterprise search",
      chatgpt: "Generic plugins with no circuit-breaker",
      highlight: false,
    },
    {
      feature: "Annual Minimum Contract Value (ACV)",
      sentinel: "₹2,000 – ₹4,500 / seat / mo (Accessible to SMEs)",
      glean: "₹45,00,000+ Minimum Annual Lock-in",
      chatgpt: "$30 / seat / mo (No custom security)",
      highlight: true,
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#0a0a0f] text-foreground border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-[11px] sm:text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>Competitive Edge</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
            Why SentinelAI Leads the <span className="text-primary">Next Era of RAG</span>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base font-light max-w-2xl mx-auto">
            Traditional enterprise search solutions like Glean demand exorbitant minimum commitments while failing on visual document structures. SentinelAI redefines precision and security.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-end gap-1 text-[11px] text-primary mb-2 font-mono">
          <span>Swipe table to compare</span>
          <ChevronsRight className="w-3.5 h-3.5 animate-pulse" />
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-xl sm:rounded-2xl border border-border bg-secondary/10 shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[620px]">
            <thead>
              <tr className="border-b border-border bg-secondary/30">
                <th className="p-3.5 sm:p-5 text-xs sm:text-sm font-semibold text-muted-foreground w-1/3">
                  Enterprise Capability
                </th>
                <th className="p-3.5 sm:p-5 text-xs sm:text-sm font-bold text-primary bg-primary/10 border-x border-primary/30 w-1/4">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-primary shrink-0" />
                    <span>SentinelAI (Our Platform)</span>
                  </div>
                </th>
                <th className="p-3.5 sm:p-5 text-xs sm:text-sm font-semibold text-muted-foreground w-1/4">
                  Glean / Enterprise Search
                </th>
                <th className="p-3.5 sm:p-5 text-xs sm:text-sm font-semibold text-muted-foreground w-1/4">
                  ChatGPT Enterprise
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 text-[11px] sm:text-xs md:text-sm font-light">
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`hover:bg-secondary/20 transition-colors ${
                    row.highlight ? "bg-primary/[0.02]" : ""
                  }`}
                >
                  <td className="p-3.5 sm:p-5 font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="p-3.5 sm:p-5 font-semibold text-primary bg-primary/5 border-x border-primary/20">
                    <div className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0 mt-0.5" />
                      <span>{row.sentinel}</span>
                    </div>
                  </td>
                  <td className="p-3.5 sm:p-5 text-muted-foreground">
                    <div className="flex items-start gap-1.5">
                      <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground/60 shrink-0 mt-0.5" />
                      <span>{row.glean}</span>
                    </div>
                  </td>
                  <td className="p-3.5 sm:p-5 text-muted-foreground">
                    <div className="flex items-start gap-1.5">
                      <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-destructive/80 shrink-0 mt-0.5" />
                      <span>{row.chatgpt}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
