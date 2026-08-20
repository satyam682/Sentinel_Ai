import React, { useState } from "react";
import { Eye, AlertTriangle, CheckCircle2, FileText, Sparkles, Layers } from "lucide-react";

export const PixelNativeShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"sideBySide" | "pixelNative" | "standardRag">("sideBySide");

  return (
    <section id="services" className="relative py-16 sm:py-24 bg-hero-bg text-foreground border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-[11px] sm:text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4">
            <Eye className="w-3.5 h-3.5" />
            <span>The Pixel-Native Breakthrough</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
            Stop Losing Data in <span className="text-destructive">Broken Tables</span> & Charts
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base font-light max-w-2xl mx-auto">
            Traditional RAG flattens documents into messy plaintext chunks, destroying table rows, multi-column headers, and financial graphs. SentinelAI reads documents natively as visual pixels.
          </p>
        </div>

        {/* Mode Selector Tabs (Responsive Wrap) */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row w-full sm:w-auto p-1 rounded-xl sm:rounded-xl bg-secondary/50 border border-border gap-1 sm:gap-0">
            <button
              onClick={() => setActiveTab("sideBySide")}
              className={`px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                activeTab === "sideBySide"
                  ? "bg-primary text-primary-foreground shadow-md font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Side-by-Side Comparison
            </button>
            <button
              onClick={() => setActiveTab("pixelNative")}
              className={`px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                activeTab === "pixelNative"
                  ? "bg-primary text-primary-foreground shadow-md font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Pixel-Native Vision (SentinelAI)
            </button>
            <button
              onClick={() => setActiveTab("standardRag")}
              className={`px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                activeTab === "standardRag"
                  ? "bg-primary text-primary-foreground shadow-md font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Standard OCR (Generic RAG)
            </button>
          </div>
        </div>

        {/* Visual Interactive Comparison Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Standard Text RAG (The Problem) */}
          {(activeTab === "sideBySide" || activeTab === "standardRag") && (
            <div className="relative rounded-2xl bg-[#14121a] border border-destructive/30 p-5 sm:p-7 md:p-8 flex flex-col justify-between overflow-hidden group">
              <div className="absolute top-0 right-0 px-3 sm:px-4 py-1.5 bg-destructive/10 border-b border-l border-destructive/30 rounded-bl-xl text-destructive text-[10px] sm:text-xs font-semibold flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Traditional Text OCR (Fails)</span>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4 pt-2 sm:pt-0">
                  <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center text-destructive shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-foreground">
                      Lossy Markdown Chunking
                    </h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground font-light">
                      PyPDF / Tesseract Text Extraction
                    </p>
                  </div>
                </div>

                {/* Broken Output Preview */}
                <div className="p-3 sm:p-4 rounded-xl bg-black/60 border border-destructive/20 font-mono text-xs text-muted-foreground/80 space-y-2 select-none">
                  <div className="text-destructive/80 text-[10px] sm:text-[11px]">
                    // ⚠️ Error: Table columns merged into unreadable string
                  </div>
                  <div className="bg-destructive/10 p-2.5 rounded border border-destructive/20 text-destructive-foreground/90 font-mono text-[10px] sm:text-[11px] leading-relaxed break-words">
                    Q3 Revenue FY25 $42.5M Expenses $31.2M Net Profit [CORRUPTED_ROW] Q4 Forecast ... 18.4% Operating Margin Column Displaced
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-muted-foreground pt-1 space-y-0.5">
                    <div>❌ Loss of row & column relationships</div>
                    <div>❌ Hallucinates numbers on misaligned tables</div>
                    <div>❌ Zero visual chart interpretation</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[11px] sm:text-xs text-destructive">
                <span>Result: Dangerous Hallucinations in Audits</span>
                <span className="font-semibold font-mono">62.8% Accuracy</span>
              </div>
            </div>
          )}

          {/* SentinelAI Pixel-Native (The Solution) */}
          {(activeTab === "sideBySide" || activeTab === "pixelNative") && (
            <div className="relative rounded-2xl bg-[#0f1915] border border-primary/40 p-5 sm:p-7 md:p-8 flex flex-col justify-between overflow-hidden shadow-[0_0_35px_rgba(16,185,129,0.12)]">
              <div className="absolute top-0 right-0 px-3 sm:px-4 py-1.5 bg-primary/20 border-b border-l border-primary/40 rounded-bl-xl text-primary text-[10px] sm:text-xs font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>SentinelAI Pixel-Native (Verified)</span>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4 pt-2 sm:pt-0">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-foreground">
                      Visual Spatial Layout Ingestion
                    </h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground font-light">
                      High-Resolution Visual Tiles + VLM Anchor
                    </p>
                  </div>
                </div>

                {/* Clean Table Output Preview */}
                <div className="p-3 sm:p-4 rounded-xl bg-black/60 border border-primary/30 font-mono text-xs space-y-2">
                  <div className="text-primary text-[10px] sm:text-[11px] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                    <span>Exact Balance Sheet Matrix (100% Spatial Grid)</span>
                  </div>

                  <div className="overflow-x-auto rounded border border-primary/20 -mx-1 sm:mx-0">
                    <table className="w-full text-left text-[10px] sm:text-[11px] min-w-[320px]">
                      <thead className="bg-primary/20 text-foreground border-b border-primary/30">
                        <tr>
                          <th className="p-2">Metric</th>
                          <th className="p-2">Q3 Actual</th>
                          <th className="p-2">Q4 Target</th>
                          <th className="p-2 text-primary">Margin %</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/50 text-foreground/90">
                        <tr className="bg-secondary/20">
                          <td className="p-2 font-medium">Net Revenue</td>
                          <td className="p-2">$42.50M</td>
                          <td className="p-2">$48.00M</td>
                          <td className="p-2 text-primary">+12.9%</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-medium">Operating Cost</td>
                          <td className="p-2">$31.20M</td>
                          <td className="p-2">$34.10M</td>
                          <td className="p-2 text-primary">24.2%</td>
                        </tr>
                        <tr className="bg-primary/10">
                          <td className="p-2 font-bold text-primary">Net Profit (EBITDA)</td>
                          <td className="p-2 font-bold">$11.30M</td>
                          <td className="p-2 font-bold">$13.90M</td>
                          <td className="p-2 font-bold text-primary">26.5%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="text-[10px] sm:text-[11px] text-muted-foreground pt-1 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>Coordinates locked with source visual verification</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[11px] sm:text-xs text-primary">
                <span>Result: Certified Zero-Error Extraction</span>
                <span className="font-semibold font-mono">99.4% Accuracy</span>
              </div>
            </div>
          )}
        </div>

        {/* 3 Step Visual Pipeline Callout (Responsive 1 col -> 3 cols) */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-4 sm:p-5 rounded-xl bg-secondary/20 border border-border">
            <div className="text-primary font-mono text-[11px] font-bold mb-1">01. RENDER & SLICE</div>
            <div className="text-sm font-semibold text-foreground mb-1">High-Res PNG Tiles</div>
            <div className="text-xs text-muted-foreground font-light">
              PDFs are snapshotted into visual layout tiles rather than scrambled text chunks.
            </div>
          </div>
          <div className="p-4 sm:p-5 rounded-xl bg-secondary/20 border border-border">
            <div className="text-primary font-mono text-[11px] font-bold mb-1">02. HIFI-RAG CACHING</div>
            <div className="text-sm font-semibold text-foreground mb-1">Tiered Smart Routing</div>
            <div className="text-xs text-muted-foreground font-light">
              Filters target pages cheaply before dispatching specific layout images to the VLM.
            </div>
          </div>
          <div className="p-4 sm:p-5 rounded-xl bg-secondary/20 border border-border sm:col-span-2 md:col-span-1">
            <div className="text-primary font-mono text-[11px] font-bold mb-1">03. MULTIMODAL REASONING</div>
            <div className="text-sm font-semibold text-foreground mb-1">Spatial Grid Reading</div>
            <div className="text-xs text-muted-foreground font-light">
              Vision models read fonts, spatial headers, currency tags, and chart lines natively.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
