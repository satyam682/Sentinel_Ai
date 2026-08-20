import React from "react";
import { Database, FolderSync, CheckCircle, Cloud, FileText, ArrowUpRight, Share2, Layers } from "lucide-react";

export const ConnectorsGrid: React.FC = () => {
  const connectors = [
    { name: "AWS S3 Buckets", type: "Object Store", status: "Live Sync", icon: Cloud },
    { name: "Google Drive", type: "Cloud Documents", status: "Auto-Ingest", icon: FolderSync },
    { name: "Microsoft SharePoint", type: "Enterprise Wiki", status: "RBAC Synced", icon: Share2 },
    { name: "PostgreSQL / RDS", type: "Relational DB", status: "pgvector Ready", icon: Database },
    { name: "Slack Workspaces", type: "Communication", status: "Action Dispatch", icon: Layers },
    { name: "Atlassian Jira", type: "Issue Tracking", status: "Ticket Automation", icon: ArrowUpRight },
    { name: "Snowflake Warehouse", type: "Data Warehouse", status: "Secure Connector", icon: Database },
    { name: "Local Files & PDFs", type: "Direct Upload", status: "Drag & Drop", icon: FileText },
  ];

  return (
    <section id="features" className="relative py-24 bg-hero-bg text-foreground border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            <FolderSync className="w-3.5 h-3.5" />
            <span>Unified Knowledge Ingestion</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Plug Into Your Existing <span className="text-primary">Enterprise Stack</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-light">
            No need to migrate databases or manually re-upload files. SentinelAI continuously syncs with your organization's cloud storage, ticketing systems, and data lakes.
          </p>
        </div>

        {/* 8 Connectors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {connectors.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-xl bg-secondary/30 border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/60 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                    <CheckCircle className="w-2.5 h-2.5" />
                    {c.status}
                  </span>
                </div>

                <div className="font-semibold text-sm text-foreground mb-0.5">
                  {c.name}
                </div>
                <div className="text-xs text-muted-foreground font-light">
                  {c.type}
                </div>
              </div>
            );
          })}
        </div>

        {/* Real-time Ingestion Note */}
        <div className="mt-12 text-center text-xs text-muted-foreground font-light">
          Supports multi-tenant permissions, incremental document change detection, and automatic visual re-indexing.
        </div>
      </div>
    </section>
  );
};
