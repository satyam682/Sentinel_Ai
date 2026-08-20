import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does Pixel-Native RAG differ from standard OCR tools like PyPDF or Tesseract?",
      answer:
        "Standard OCR parses documents into unformatted flat text strings, completely breaking multi-column grids, nested table structures, and visual charts. Pixel-Native RAG renders pages directly into visual image tiles and reasons over them using Vision-Language Models (VLMs), preserving 100% of the spatial and geometric context.",
    },
    {
      question: "Does DSPy prompt optimization slow down live query response time?",
      answer:
        "No. DSPy compilation happens completely offline during the training/evaluation phase. It compiles and optimizes mathematical prompt signatures ahead of time. At production runtime, the compiled configurations execute in sub-milliseconds without any dynamic training overhead.",
    },
    {
      question: "Can SentinelAI be deployed inside our own AWS or Azure Virtual Private Cloud (VPC)?",
      answer:
        "Yes. For enterprise and banking tiers, we offer a Bring Your Own Cloud (BYOC) deployment model. The complete LangGraph backend, vector database, and security guardrails run entirely within your private cloud perimeter, ensuring data never leaves your enterprise firewall.",
    },
    {
      question: "What happens when an adversarial prompt injection attack is detected?",
      answer:
        "SentinelAI's Security Pre-Flight and Red-Teaming layer calculates a dynamic Risk Score (0-100%). If an injection or unauthorized privilege escalation attempt is detected (Risk > 40%), our hardware-inspired Circuit Breaker trips instantly, cutting off downstream agent execution and preventing unauthorized Jira/Slack actions.",
    },
    {
      question: "Is our proprietary data used to train any third-party or foundation AI models?",
      answer:
        "Never. Through our enterprise AWS Bedrock integration, we operate under strict Zero-Data Retention (ZDR) contractual SLAs. Customer prompts, embeddings, and raw document pixels are never stored by model providers or used to train public models.",
    },
    {
      question: "How fast can we onboard and sync our existing Google Drive / SharePoint repositories?",
      answer:
        "SentinelAI provides native 1-click enterprise connectors. You simply authorize access via your existing IAM/OAuth credentials, and our background ingestion pipeline automatically parses, embeds, and indexes your document repository within minutes.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#0a0a0f] text-foreground border-b border-border">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Everything You Need to Know About <span className="text-primary">SentinelAI</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-light">
            Got questions about architecture, security guarantees, or deployment? We've got answers.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-secondary/20 border border-border overflow-hidden transition-all duration-200 hover:border-border/80"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-sm md:text-base text-foreground cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs md:text-sm text-muted-foreground font-light leading-relaxed border-t border-border/40 pt-4 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
