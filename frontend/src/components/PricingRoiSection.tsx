import React, { useState } from "react";
import { Check, Calculator, Sparkles, ArrowRight } from "lucide-react";

export const PricingRoiSection: React.FC = () => {
  const [seats, setSeats] = useState<number>(15);

  // Time-saved equation math
  const hoursSavedPerDay = seats * 2;
  const hoursSavedPerMonth = hoursSavedPerDay * 22;
  const valueCreatedMonthly = hoursSavedPerMonth * 350; // ₹350/hr average engineering/analyst value
  const monthlyCostEnterprise = seats * 4500;
  const netMonthlyBenefit = valueCreatedMonthly - monthlyCostEnterprise;
  const roiMultiplier = (valueCreatedMonthly / monthlyCostEnterprise).toFixed(1);

  return (
    <section id="pricing" className="relative py-16 sm:py-24 bg-hero-bg text-foreground border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-[11px] sm:text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Unit Economics & ROI Equation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
            Transparent Pricing That <span className="text-primary">Pays for Itself</span>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base font-light max-w-2xl mx-auto">
            Every employee saves 2 hours per day on document verification. Our seat pricing captures less than 9% of the direct labor value generated.
          </p>
        </div>

        {/* Interactive ROI Calculator Card */}
        <div className="mb-14 sm:mb-20 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-secondary/40 via-secondary/20 to-secondary/10 border border-primary/30 p-5 sm:p-8 md:p-12 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
            {/* Slider Column */}
            <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-semibold text-foreground">Select Number of Seats:</span>
                <span className="text-xl sm:text-2xl font-extrabold font-mono text-primary px-3 sm:px-4 py-1 rounded-lg bg-primary/10 border border-primary/30">
                  {seats} Users
                </span>
              </div>

              <input
                type="range"
                min="3"
                max="150"
                step="1"
                value={seats}
                onChange={(e) => setSeats(Number(e.target.value))}
                className="w-full h-2.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
              />

              <div className="flex justify-between text-[10px] sm:text-xs text-muted-foreground font-mono">
                <span>3 Seats (Small)</span>
                <span>50 Seats (Mid)</span>
                <span>150+ Seats (Enterprise)</span>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-black/40 border border-border text-[11px] sm:text-xs text-muted-foreground font-light leading-relaxed">
                💡 <strong className="text-foreground">The Time-Saved Equation:</strong> 1 Knowledge worker wastes 2 hours/day on manual PDF verification. SentinelAI resolves answers in 3 seconds. Net Monthly Profit: <strong className="text-primary font-mono font-bold">₹{netMonthlyBenefit.toLocaleString()}</strong>.
              </div>
            </div>

            {/* Live Metrics Output Box (2x2 Grid on all viewports) */}
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-black/60 border border-border">
                <div className="text-[10px] sm:text-xs text-muted-foreground font-medium mb-1">Hours Saved / Mo</div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-mono text-foreground">
                  {hoursSavedPerMonth.toLocaleString()} hrs
                </div>
                <div className="text-[10px] sm:text-[11px] text-primary mt-1 font-mono">2 hrs/day/seat</div>
              </div>

              <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-black/60 border border-primary/40 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <div className="text-[10px] sm:text-xs text-muted-foreground font-medium mb-1">Value Created</div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-mono text-primary">
                  ₹{(valueCreatedMonthly / 100000).toFixed(2)}L
                </div>
                <div className="text-[10px] sm:text-[11px] text-primary/80 mt-1 font-mono">Monthly Value</div>
              </div>

              <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-black/60 border border-border">
                <div className="text-[10px] sm:text-xs text-muted-foreground font-medium mb-1">SentinelAI Fee</div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold font-mono text-foreground">
                  ₹{monthlyCostEnterprise.toLocaleString()}
                </div>
                <div className="text-[10px] sm:text-[11px] text-muted-foreground mt-1 font-mono">Pro Tier Rate</div>
              </div>

              <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary text-primary">
                <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary mb-1">Verified ROI</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono text-primary">
                  {roiMultiplier}x
                </div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-primary/90 mt-1">Breakeven ~2.2 Days</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* Tier 1: Standard */}
          <div className="rounded-2xl bg-secondary/20 border border-border p-6 sm:p-8 flex flex-col justify-between hover:border-border/80 transition-all">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">Standard Tier</h3>
              <p className="text-xs text-muted-foreground font-light mb-5 sm:mb-6">
                Essential Pixel-Native RAG for small teams & CA firms.
              </p>

              <div className="flex items-baseline gap-1 mb-5 sm:mb-6">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-foreground">₹2,000</span>
                <span className="text-xs text-muted-foreground">/ seat / month</span>
              </div>

              <ul className="space-y-2.5 sm:space-y-3 text-xs text-muted-foreground font-light">
                <li className="flex items-center gap-2 text-foreground/90">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Pixel-Native visual PDF & table extraction</span>
                </li>
                <li className="flex items-center gap-2 text-foreground/90">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Hybrid Vector + BM25 keyword search</span>
                </li>
                <li className="flex items-center gap-2 text-foreground/90">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Zero-Hallucination Verifier Agent</span>
                </li>
                <li className="flex items-center gap-2 text-foreground/90">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Standard Slack notification webhook</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-muted-foreground/50 shrink-0" />
                  <span>Community Discord support</span>
                </li>
              </ul>
            </div>

            <button className="mt-6 sm:mt-8 w-full py-3 rounded-lg border border-border text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-secondary/60 transition-all cursor-pointer">
              Start Free Pilot
            </button>
          </div>

          {/* Tier 2: Enterprise Pro (Featured) */}
          <div className="relative rounded-2xl bg-[#0f1713] border-2 border-primary p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_40px_rgba(16,185,129,0.18)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-0.5 sm:py-1 rounded-full bg-primary text-primary-foreground text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3 h-3" />
              <span>Most Popular for Enterprises</span>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 pt-1 sm:pt-0">Enterprise Pro</h3>
              <p className="text-xs text-muted-foreground font-light mb-5 sm:mb-6">
                Full autonomous agents with live Red-Teaming guardrails.
              </p>

              <div className="flex items-baseline gap-1 mb-5 sm:mb-6">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-primary">₹4,500</span>
                <span className="text-xs text-muted-foreground">/ seat / month</span>
              </div>

              <ul className="space-y-2.5 sm:space-y-3 text-xs text-foreground font-light">
                <li className="flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Everything in Standard Tier</span>
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Live Security Red-Teaming & Circuit-Breaker</span>
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Autonomous Action Agent (Slack, Jira, ERP API)</span>
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Real-time AgentOps Telemetry & Trace Logs</span>
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Continuous PII Masking & Secret Leak Defense</span>
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Dedicated Slack channel & SLA support</span>
                </li>
              </ul>
            </div>

            <button className="mt-6 sm:mt-8 w-full py-3.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer">
              <span>Deploy Enterprise Pro</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Tier 3: Custom BYOC VPC */}
          <div className="rounded-2xl bg-secondary/20 border border-border p-6 sm:p-8 flex flex-col justify-between hover:border-border/80 transition-all">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">Custom VPC / On-Prem</h3>
              <p className="text-xs text-muted-foreground font-light mb-5 sm:mb-6">
                For Banks, NBFCs, and Defense requiring zero external egress.
              </p>

              <div className="flex items-baseline gap-1 mb-5 sm:mb-6">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-foreground">Custom Quote</span>
              </div>

              <ul className="space-y-2.5 sm:space-y-3 text-xs text-muted-foreground font-light">
                <li className="flex items-center gap-2 text-foreground/90">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Deployed in your AWS / Azure VPC (BYOC)</span>
                </li>
                <li className="flex items-center gap-2 text-foreground/90">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Custom DSPy fine-tuning on internal corpora</span>
                </li>
                <li className="flex items-center gap-2 text-foreground/90">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>SOC2 & ISO 27001 audit documentation</span>
                </li>
                <li className="flex items-center gap-2 text-foreground/90">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>Air-gapped offline local LLM deployment</span>
                </li>
                <li className="flex items-center gap-2 text-foreground/90">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>24/7 Dedicated Security Architect</span>
                </li>
              </ul>
            </div>

            <button className="mt-6 sm:mt-8 w-full py-3 rounded-lg border border-border text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-secondary/60 transition-all cursor-pointer">
              Schedule Security Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
