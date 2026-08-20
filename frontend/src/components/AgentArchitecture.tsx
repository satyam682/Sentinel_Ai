import React from "react";
import { Search, ShieldAlert, CheckCircle, Zap, ArrowRight, ShieldCheck, Terminal, Bot } from "lucide-react";

export const AgentArchitecture: React.FC = () => {
  const agents = [
    {
      step: "01",
      name: "Retriever Agent",
      role: "Pixel-Native & DSPy Optimized",
      description:
        "Dispatches hybrid dense-vector and sparse BM25 queries with offline DSPy compiled prompt signatures. Retrieves pixel tiles and text anchors in sub-seconds.",
      icon: Search,
      badge: "Intellectual Depth",
      color: "border-primary/40 bg-primary/5 text-primary",
    },
    {
      step: "02",
      name: "Verifier Agent",
      role: "Zero-Hallucination Grounding",
      description:
        "Line-by-line cross-examination against the raw source visual coordinates. Discards unverified claims and prevents hallucinations before any answer is finalized.",
      icon: CheckCircle,
      badge: "100% Fact-Check",
      color: "border-cyan-500/40 bg-cyan-500/5 text-cyan-400",
    },
    {
      step: "03",
      name: "Security Guardrail",
      role: "Circuit-Breaker & Red-Teaming",
      description:
        "Real-time threat evaluation analyzing Prompt Injections, PII leakage, and unauthorized execution intent. Dynamically halts unsafe operations with zero bypass.",
      icon: ShieldAlert,
      badge: "Dynamic Risk Score",
      color: "border-amber-500/40 bg-amber-500/5 text-amber-400",
    },
    {
      step: "04",
      name: "Action Agent",
      role: "Safe Enterprise Automation",
      description:
        "Only executes real-world actions (Slack notifications, Jira ticket creation, database commits) once all security clearances and audit logs are certified.",
      icon: Zap,
      badge: "Tool Clearance",
      color: "border-emerald-500/40 bg-emerald-500/5 text-emerald-400",
    },
  ];

  return (
    <section id="about-us" className="relative py-24 bg-[#0a0a0f] text-foreground border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            <Bot className="w-3.5 h-3.5" />
            <span>Multi-Agent LangGraph Engine</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            A Triple-Agent Pipeline Built for <span className="text-primary">Enterprise Trust</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-light">
            Generic chatbots operate in an uncontrolled single-shot loop. SentinelAI divides cognitive labor across specialized, verifiable, and security-cleared agents.
          </p>
        </div>

        {/* 4 Agent Cards Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {agents.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl bg-secondary/20 border border-border hover:border-primary/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group"
              >
                <div>
                  {/* Top Row: Step & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-muted-foreground/60">
                      STEP {agent.step}
                    </span>
                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${agent.color}`}
                    >
                      {agent.badge}
                    </span>
                  </div>

                  {/* Icon & Name */}
                  <div className="w-12 h-12 rounded-xl bg-secondary/50 border border-border flex items-center justify-center text-primary mb-4 group-hover:scale-100 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {agent.name}
                  </h3>
                  <div className="text-xs text-primary font-medium mb-3">
                    {agent.role}
                  </div>

                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    {agent.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>State: Active Cyclic Graph</span>
                  <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Offline DSPy & Orchestration Callout Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-secondary/40 via-secondary/20 to-secondary/40 border border-border p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-1">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-foreground mb-1">
                Offline DSPy Compilation — Zero Live Latency Penalty
              </h4>
              <p className="text-xs text-muted-foreground font-light max-w-2xl">
                Unlike primitive prompt engineering, SentinelAI uses Stanford's DSPy framework to programmatically compile and tune prompt signatures offline. In production runtime, agents execute in milliseconds without any training delays.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2 rounded-lg bg-black/40 border border-primary/30 text-xs font-mono text-primary flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>DSPy Teleprompter Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
