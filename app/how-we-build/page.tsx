import type { Metadata } from "next";
import { phases } from "@/lib/phases";
import Hero from "@/components/process/Hero";
import Legend from "@/components/process/Legend";
import PhaseCard from "@/components/process/PhaseCard";
import Philosophy from "@/components/process/Philosophy";
import ProcessCTA from "@/components/process/CTA";
import Reveal from "@/components/reveal";
import SectionLabel from "@/components/section-label";

export const metadata: Metadata = {
  title: "How We Build — Sugo Product Company",
  description:
    "A repeatable, AI-native process for taking ideas from concept to shipped product. 8 phases, modern tools, clear outcomes.",
};

export default function HowWeBuildPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <Hero />

      {/* ── Process Overview (Stepper) ─────────────────────────────────────── */}
      <section
        style={{
          padding: "var(--section-pad-y) 24px",
          background: "var(--background)",
        }}
      >
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <Reveal delay={0}>
            <SectionLabel label="THE PROCESS" />
          </Reveal>

          {/* Legend */}
          <Reveal delay={60}>
            <Legend />
          </Reveal>

          {/* Phase cards with connectors */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {phases.map((phase, i) => (
              <div key={phase.number}>
                <PhaseCard phase={phase} delay={80 + i * 60} />
                {i < phases.length - 1 && (
                  <div
                    aria-hidden="true"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      paddingLeft: "22px",
                      height: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: "1px",
                        height: "100%",
                        background: "var(--border)",
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy ─────────────────────────────────────────────────────── */}
      <Philosophy />

      {/* ── Closing CTA ────────────────────────────────────────────────────── */}
      <ProcessCTA />
    </>
  );
}
