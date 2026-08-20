# SentinelAI — JG TechVerse 2026 — Full Project Context

> Upload this file in a new chat so context carries over instantly.

## Event Details
- **Event:** JG TechVerse 2026 — Fiontar Arena (Startup & Innovation Expo)
- **Problem Statement:** #03 — B2B Enterprise SaaS & AI Workflow Agents
- **Team:** Satyam Kadavla, Krish, Dhruvi, Preksha, Mit
- **Build Deadline:** 30 August 2026
- **Prize:** 1st ₹1,00,000 | 2nd ₹10,000 | 3rd ₹5,000
- **Eligibility:** Pan-India, any B.Tech branch/year, teams up to 5, solo allowed
- **PPT Format:** Exactly 10 slides, MANDATORY Sequoia Capital pitch deck template, .pptx or .pdf, no extensions after registration
- **Six total arenas exist at TechVerse:** Mercatus (Trading), Talos (Robotics), Pegasus (Drone), Fiontar (Startup — our main track), Promethia (Competitive Programming), Buddhi (AI/ML Modeling). Whether one team can register for multiple arenas simultaneously is NOT explicitly documented — needs direct confirmation from organizers.

## Core Project Concept
**SentinelAI** — An Agentic RAG platform for enterprises that reads complex documents (including tables/charts via Pixel-Native vision) and takes real actions, while testing itself for security vulnerabilities before every deployment.

**One-liner (40 char):** "Agentic RAG with Vision & Self-Security"

**Short pitch:** Enterprises waste hours manually reading complex documents (PDFs, contracts, tables) and lack AI agents that are both intelligent and secure. SentinelAI is an Agentic RAG platform that reads documents visually, takes real actions (Slack, Jira), and tests itself for security vulnerabilities before every deployment.

## Key Technical Innovations
1. **Pixel-Native RAG** — reads document pages as images (via vision models like Claude/GPT-4o) instead of lossy OCR/text-chunking, preserving table structure and chart data.
2. **DSPy Integration** — programmatically optimizes retrieval prompts (Signatures + Modules + Teleprompter/optimizer) instead of hand-written static prompts. **IMPORTANT: optimization happens OFFLINE/once during a training phase, NOT live per-question — so it does NOT slow down runtime response time.** Analogy: like a student practicing answer-writing style before an exam, not re-practicing during the exam itself. Recommended scope: integrate into ONE component (Retriever Agent) to avoid scope creep. Directly targets "Intellectual Depth" judging criteria (penalizes teams "just calling a ChatGPT API").
3. **Hybrid Retrieval** — combines dense (vector) + sparse (BM25/keyword) search for better precision on exact terms/numbers.
4. **Reranking (Cross-Encoders)** — re-scores top retrieved results for better precision.
5. **Query Reformulation** — rewrites rough user questions into better search queries.
6. **Triple-Agent Pipeline:**
   - Retriever Agent (Pixel-Native + DSPy-optimized + Hybrid search)
   - Verifier Agent (cross-checks answers against source, prevents hallucination)
   - Action Agent (executes real tasks — Slack/Jira/email — only after security clearance)
7. **Security Red-Teaming Layer ("Trust Label" / Risk Score):**
   - Prompt Injection Test Suite
   - Credential/Secret Leak Detection
   - Action Authorization Guardrail (circuit-breaker style)
   - Adaptive Red-Teaming — background "attacker agent" continuously invents new adversarial prompts
8. **AgentOps Monitoring Dashboard** — live trace logs, risk-score history, cost/latency per agent, real-time alerts.
9. **Low-Code Drag-and-Drop Workflow Builder** (React Flow) — Phase 2 roadmap item, NOT full MVP scope, don't over-invest time here before 30 Aug.

## Why Not Just Use ChatGPT/Gemini Directly? (Common doubt — key talking points)
- Enterprise data privacy: raw documents shouldn't go to a third-party generic chat tool for compliance reasons.
- No persistent knowledge of company-specific documents; context windows don't fit 100+ page PDFs practically.
- No built-in verification — generic chatbots hallucinate confidently with no source-check step.
- No real action execution — generic chat tools can't reliably execute enterprise tasks (Slack/Jira/email) with guardrails.
- No security testing — no red-teaming/risk scoring before an agent is allowed to act.
- Analogy used: "ChatGPT is a generic taxi that doesn't remember your address and has no safety check before driving. SentinelAI is a trained chauffeur — knows the route (retrieval), confirms the destination (verification), and checks for suspicious activity before driving (security)."

## Tech Stack
- Orchestration: LangGraph
- Backend: FastAPI
- Prompt Optimization: DSPy
- Vector DB: Supabase pgvector / Pinecone
- LLM: Claude API (with vision) — Gemini free tier (Google AI Studio) recommended for testing/development since it has a generous free tier; switch to Claude for final demo for tech-stack story consistency.
- Auth: Auth0 / Supabase Auth + RBAC
- Frontend: React + Tailwind
- Deployment: Railway / Vercel

## MVP vs. Full Vision Scoping (for 30 Aug deadline)
| Component | MVP (build this) | Full Vision (pitch/roadmap only) |
|---|---|---|
| RAG | Basic PDF text retrieval | Pixel-Native complex table reading |
| Action | Simple Slack message | Full invoice→DB→Jira workflow |
| Security | Static prompt injection check | Live Risk Score dashboard, adaptive red-teaming |
| Customization | Hardcoded logic | Drag-and-drop live UI |

**Priority #1 demo moment:** Pixel-Native reading a complex financial table that standard RAG fails on.
**Priority #2:** Live Risk Score dashboard changing in real-time during a simulated attack.

## Official Mandatory 10-Slide Structure (Sequoia Capital Template)
1. **Company Purpose** — startup name, one-sentence purpose, team names
2. **The Problem** — specific pain + real statistics, complete-sentence title
3. **The Solution** — before/after value proposition
4. **Market Opportunity** — TAM/SAM/SOM with cited sources
5. **Product/Architecture** — one clean end-to-end diagram
6. **Business & Revenue Model** — pricing tiers + "time-saved equation" (mandatory for Problem Statement 3)
7. **Go-to-Market Strategy** — first 100 users, channels, partnerships
8. **Competitive Landscape** — comparison table/2x2 matrix (vs. Glean)
9. **Feasibility & Timeline** — week-by-week roadmap to 30 Aug
10. **The Team** — names, specific roles, why this team wins

**Design rules:** 18pt+ font minimum, complete-sentence titles (not single-word labels), data over adjectives, 2-3 colors max, one idea per slide.

## Business Model Numbers (current draft — verify before final submission)
- Pricing: ₹2,000/seat/month (Standard) | ₹4,500/seat/month (Enterprise)
- Time-saved equation: 1 employee saves 2 hrs/day (₹5,000/day value) — fee is ~4% of value created
- Year 1 target: ₹1.44 Cr ARR (40 companies × 15 seats × ₹2,000/month)
- LTV/CAC: ₹48,000 / ₹8,000 = 6x (healthy, >3x threshold)
- TAM ₹8,500 Cr | SAM ₹1,200 Cr | SOM ₹6 Cr (verify against real NASSCOM/govt sources before final submission)
- Competitor: Glean requires ₹45L+/year minimum contracts — SentinelAI targets the underserved SME segment

## Pitch Deck Status
- Explored and rated 7+ Canva templates; user built a final custom dark navy/orange deck (`SentinelAI_Agentic_RAG_Pitch_Deck.pptx`) matching the official 10-slide structure — rated genuinely strong/submission-ready.
- One known bug flagged: Slide 2 had a text-overlap issue between headline and body text — needs manual fix in PowerPoint (nudge text boxes apart, add ~0.3-0.5 inch spacing).

## Folder Structure (End-to-End)
```
sentinel-ai/
├── backend/
│   ├── app/
│   │   ├── agents/            # retriever, reranker, verifier, action_agent, red_team
│   │   ├── retrieval/         # dense_search, sparse_search, hybrid_fusion, query_reformulator
│   │   ├── pixel_native/      # pdf_to_image, vision_ingest, layout_parser
│   │   ├── dspy_pipeline/     # signatures, modules, optimizer
│   │   ├── core/              # graph.py (LangGraph), security.py, config.py
│   │   ├── db/                # vector_store, models, migrations
│   │   └── main.py            # FastAPI entry point
│   ├── tests/                 # test_red_team, test_retrieval, test_verifier
│   ├── eval/                  # metrics.py
│   └── requirements.txt
├── frontend/
│   └── src/components/        # ChatInterface, WorkflowBuilder, AgentOpsBoard, RiskScoreCard
├── docs/                      # architecture_diagram, security_plan, competitor_research
├── demo/                      # sample_docs, demo_script.md
├── pitch/                     # sentinelai_pitch_deck.pptx
├── .env                       # NEVER commit
├── .gitignore                 # must exclude .env, node_modules, __pycache__
└── README.md
```
**Recommended additions for stronger "enterprise-grade" signal (optional, high ROI, low time cost):** Dockerfile + docker-compose.yml, basic GitHub Actions CI/CD workflow. Skipped as over-engineering for MVP: structured logging config, Alembic migrations, retrieval cache management, hardware constraint handling, continuous feedback-based fine-tuning.

## Team Work Division

### Coding/Architecture Roles (folder ownership)
- **Satyam Kadavla — Team Lead & Architecture:** `agents/retriever.py`, `agents/verifier.py`, `agents/action_agent.py`, `core/graph.py` (LangGraph orchestration), `core/config.py`, `dspy_pipeline/` (all files). Owns overall system design — must be able to explain every architectural decision in Q&A.
- **Krish — Backend Support:** `retrieval/` (all 4 files), `core/security.py`, `db/vector_store.py`, `db/models.py`, `main.py` (FastAPI entry point).
- **Mit — Security Testing & QA:** `pixel_native/` (all 3 files), `agents/red_team.py`, `tests/` (all 3 files), `eval/metrics.py`. Owns red-team test suite — must be able to defend security claims live.
- **Dhruvi & Preksha — Market Research & Business Validation:** `frontend/src/components/` (ChatInterface.tsx, AgentOpsBoard.tsx, RiskScoreCard.tsx if comfortable with React), `docs/security_plan.md`, `docs/competitor_research.md`, `demo/demo_script.md`, `pitch/sentinelai_pitch_deck.pptx`.
- **Not assigned / explicitly deprioritized:** `WorkflowBuilder.tsx` (drag-and-drop) — Phase 2 roadmap item only, don't spend build time on it before 30 Aug.

### Coding Philosophy Decision
User will use a **hybrid approach**: let AI generate boilerplate/scaffolding code quickly (FastAPI setup, CRUD, UI components), but personally deeply understand and be able to explain the core innovation pieces judges will grill in Q&A:
1. Security red-teaming logic (attack types, risk scoring)
2. DSPy optimization (concept-level understanding, and specifically that it doesn't slow down runtime)
3. Pixel-Native vision flow
4. Hybrid retrieval (dense+sparse fusion)

Process: AI writes code → user reads it → user writes own comments explaining each part → explains to teammate in 2 min → if can't explain, ask AI to simplify and repeat. Team should share brief updates when each module is done so everyone has baseline understanding of others' parts too, since judges may question any team member.

## Hardware/API Notes
- User's laptop: Intel Core i5 11th Gen, **no dedicated GPU** — local model fine-tuning/training NOT feasible (Unsloth and similar require NVIDIA/AMD/Intel discrete GPU for actual training).
- Solution: use free cloud GPU (Google Colab free T4, or Kaggle free 30hrs/week) for any training; run quantized GGUF inference locally afterward (CPU-friendly by design).
- **Pixel-Native testing recommendation:** Gemini API (Google AI Studio) — generous free tier, strong vision performance, good for development/testing. Switch to Claude API for final demo to keep tech stack story consistent with LangGraph+Claude narrative.

## Secondary Track Explored (Buddhi Arena — AI/ML Modeling Challenge)
- Separate arena, same JG TechVerse event, coordinator Mr. Aniket Mittal. 5 official project ideas, teams up to 5, same 30 Aug deadline, separate 10-slide PPT + prize pool (1st ₹50,000).
- Best-fit idea assessed: **IDEA 01 — The Local Privacy Filter (PII Redactor)** — teacher-student distillation (Llama 3.3 70B → Llama 3.2 1B), LoRA fine-tuning, GGUF quantization, runs fully offline/local. Thematic synergy with SentinelAI's "privacy-first, local AI" positioning.
- New skills this would teach: model fine-tuning, knowledge distillation, LoRA, quantization/GGUF, synthetic data generation, local LLM deployment (Ollama), evaluation rigor — genuinely valuable for resume/career regardless of competition outcome.
- Given existing team skillset (RAG, LangGraph, web dev, data analysis), if pursuing a second arena, Buddhi and Promethia (competitive programming — pure software skillset, no new hardware domain needed) were assessed as best-fit options over Talos/Pegasus (hardware-heavy, no team experience) or Mercatus (finance-domain-heavy).
- **Flagged risk:** running 3 arenas simultaneously with one 5-person team by the same deadline risks quality dilution — recommend confirming with organizers whether multi-arena participation is even allowed before committing, and prioritizing depth over breadth (2 strong submissions > 3 mediocre ones).

## Open Items / To-Do
- [ ] Fix Slide 2 text overlap in final pitch deck
- [ ] Verify TAM/SAM/SOM numbers against real sources (NASSCOM or similar) before final submission
- [ ] Confirm with organizers whether multi-arena registration (Fiontar + Buddhi) is allowed
- [ ] Decide final scope: 2 arenas (Fiontar + Buddhi) recommended over 3
- [ ] Set up Google Colab/Kaggle for any model training needs
- [ ] Get Gemini API key (testing) and Claude API key (final demo)
- [ ] Begin coding — Satyam to start with `core/graph.py` LangGraph skeleton as suggested next step

---
*Upload this file at the start of a new chat to restore full context instantly.*
