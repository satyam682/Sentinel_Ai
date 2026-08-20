import React, { useState } from 'react';
import ParticleText from './ParticleText';
import { MousePointer, Cpu } from 'lucide-react';

export const ParticleHeroBanner: React.FC = () => {
  const [activeWord, setActiveWord] = useState<'SENTINEL AI' | 'ZERO HALLUCINATION' | 'PIXEL NATIVE'>('SENTINEL AI');

  return (
    <section className="relative py-20 sm:py-28 bg-[#08080c] text-foreground border-b border-border overflow-hidden">
      {/* Subtle Cyber Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-[11px] sm:text-xs font-semibold uppercase tracking-widest mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>Interactive Neural Particle Field</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-2">
          Autonomous Intelligence at the <span className="text-primary">Sub-Pixel Level</span>
        </h2>
        <p className="text-muted-foreground text-xs sm:text-sm font-light max-w-xl mx-auto mb-8">
          Hover or touch below to interact with our real-time magnetic particle field. Every visual glyph represents a multimodal spatial anchor.
        </p>

        {/* Interactive Text Mode Switcher */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {(['SENTINEL AI', 'ZERO HALLUCINATION', 'PIXEL NATIVE'] as const).map((word) => (
            <button
              key={word}
              onClick={() => setActiveWord(word)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium border transition-all cursor-pointer ${
                activeWord === word
                  ? 'bg-primary/20 border-primary text-primary shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                  : 'bg-secondary/40 border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {word}
            </button>
          ))}
        </div>

        {/* The Live Interactive ParticleText Canvas Container */}
        <div className="w-full h-[260px] sm:h-[320px] md:h-[380px] rounded-3xl bg-[#0b0d13]/80 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(16,185,129,0.1)] relative overflow-hidden backdrop-blur-xl group">
          {/* Interactive Hint */}
          <div className="absolute top-4 right-5 z-20 hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground/70 bg-black/40 px-3 py-1 rounded-full border border-white/5 pointer-events-none">
            <MousePointer className="w-3.5 h-3.5 text-primary" />
            <span>Hover cursor to scatter & repel</span>
          </div>

          <ParticleText
            text={activeWord}
            particleSize={2.2}
            density={3.5}
            color="#ffffff"
            highlightColor="#10b981"
            scatter={160}
            gatherDuration={1400}
            stagger={380}
            pointerRepel={45}
            repelRadius={140}
            idleDrift={0.8}
            trigger="hover"
            fontSize="clamp(2.5rem, 7.5vw, 5.5rem)"
            fontWeight={800}
            fontFamily="Sora, sans-serif"
            glow={true}
          />
        </div>
      </div>
    </section>
  );
};
