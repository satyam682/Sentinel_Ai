import React from "react";
import { Lock, Cloud, ShieldCheck, Key, FileLock2, Server, Award } from "lucide-react";

export const EnterpriseSecurity: React.FC = () => {
  const pillars = [
    {
      icon: Cloud,
      title: "Client VPC Deployment (BYOC)",
      description:
        "Deploy SentinelAI natively inside your own AWS, Azure, or GCP Virtual Private Cloud. Your sensitive contracts and balance sheets never traverse external networks.",
    },
    {
      icon: ShieldCheck,
      title: "Zero-Data Retention Guarantee",
      description:
        "Enterprise AWS Bedrock isolation contractually guarantees zero customer data or prompt logs are ever stored, indexed, or used to train third-party foundation models.",
    },
    {
      icon: Key,
      title: "Role-Based Access Control (RBAC)",
      description:
        "Granular document permissions ensure junior employees and external contractors can only query authorized folders. Executive compensation & M&A files remain isolated.",
    },
    {
      icon: FileLock2,
      title: "Automated PII & Secret Redaction",
      description:
        "Real-time regex & NLP privacy filters automatically mask Indian Aadhaar, PAN, Social Security numbers, banking IBANs, and API credentials before embedding.",
    },
    {
      icon: Server,
      title: "End-to-End Military Encryption",
      description:
        "All visual document tiles and vector stores are secured with AES-256 encryption at rest and TLS 1.3 in transit with customer-managed encryption keys (AWS KMS).",
    },
    {
      icon: Award,
      title: "Enterprise Compliance Ready",
      description:
        "Pre-audited architecture aligned with SOC2 Type II, ISO/IEC 27001, HIPAA Security Rules, and India's Digital Personal Data Protection (DPDP) Act 2023.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#0a0a0f] text-foreground border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>Bank-Grade Sovereignty</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Your Data Stays Inside <span className="text-primary">Your Firewall</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-light">
            We don't build generic chatbot wrappers that leak proprietary data. SentinelAI delivers sovereign, zero-retention enterprise AI security infrastructure.
          </p>
        </div>

        {/* 6 Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-secondary/20 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Compliance Badges Row */}
        <div className="mt-16 p-6 rounded-2xl bg-secondary/10 border border-border/70 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-xs font-mono text-muted-foreground/80">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" /> SOC2 TYPE II READY
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" /> ISO/IEC 27001
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" /> HIPAA COMPLIANT
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" /> GDPR & DPDP 2023
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" /> AES-256 KMS
          </span>
        </div>
      </div>
    </section>
  );
};
