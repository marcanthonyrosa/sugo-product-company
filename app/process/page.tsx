import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/section-label";
import CTASection from "@/components/cta-section";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "How We Work — Sugo Product Company",
  description:
    "How Sugo works: clear bets, documented decisions, founder-owned artifacts.",
};

export default function ProcessPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--background)", padding: "160px 24px 80px", borderBottom: "1px solid rgba(74,124,89,0.15)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Reveal delay={0}><SectionLabel label="HOW WE WORK" /></Reveal>
          <Reveal delay={80}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 64px)", fontWeight: "normal", color: "var(--foreground)", lineHeight: 1.1, margin: "32px 0 24px", letterSpacing: "-0.02em" }}>
              Slow thinking for fast companies.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "18px", color: "var(--color-slate)", margin: 0, lineHeight: 1.75, maxWidth: "640px" }}>
              Speed without clarity wastes effort. We prioritize the right questions, explicit bets, and
              written decisions that outlast the engagement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Philosophy ───────────────────────────────────────────────────── */}
      <section style={{ padding: "var(--section-pad-y) 24px", background: "var(--background)" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <Reveal delay={0}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "17px", color: "var(--foreground)", lineHeight: 1.85, margin: 0 }}>
              Deliverables are deliberate—specs, roadmaps, decision logs—not volume for its own sake. The
              founder keeps the keys: when we wrap, artifacts and decisions live in your systems; your next
              PM picks up from the folder. For the Sunday-sauce story, see{" "}
              <Link href="/#about" style={{ color: "var(--color-sage)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Why Sugo
              </Link>{" "}
              on the homepage.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── The Four Phases ───────────────────────────────────────────────── */}
      <section style={{ padding: "var(--section-pad-y) 24px", background: "var(--background)", borderTop: "1px solid rgba(74,124,89,0.12)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <Reveal delay={0}><SectionLabel label="THE PHASES" /></Reveal>
          <div style={{ marginTop: "72px", position: "relative" }}>
            <div aria-hidden="true" className="phase-line" style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "1px", background: "linear-gradient(to bottom, var(--color-sage), rgba(74,124,89,0.1))" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {phases.map((phase, i) => (
                <PhaseBlock key={phase.id} phase={phase} delay={i * 80} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Are / Aren't ─────────────────────────────────────────── */}
      <section style={{ padding: "var(--section-pad-y) 24px", background: "var(--secondary)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <Reveal delay={0}><SectionLabel label="WHAT TO EXPECT" /></Reveal>
          <Reveal delay={80}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "32px", fontWeight: "normal", color: "var(--foreground)", margin: "32px 0 56px", lineHeight: 1.3 }}>
              What Sugo is, and what it isn&apos;t.
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }} className="two-col-equal">
            <Reveal delay={160}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-sage)", marginBottom: "24px" }}>We are</div>
                <ul className="sage-list">
                  {["Embedded—we ship the work, not slide advice", "Async-first; sync when it matters", "Direct on tradeoffs", "Deliverables over hours"].map(item => (
                    <li key={item} style={{ color: "var(--foreground)", fontFamily: "var(--font-display)", fontSize: "17px", lineHeight: 1.65, marginBottom: "12px" }}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-slate)", marginBottom: "24px" }}>We&apos;re not</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {["A full-time PM at full-time cost", "Another vendor to babysit", "Deck-only strategy shops", "A fit for every stage—we’ll say so if not"].map(item => (
                    <li key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start", color: "var(--foreground)", fontFamily: "var(--font-display)", fontSize: "17px", lineHeight: 1.65, marginBottom: "12px", opacity: 0.65 }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "var(--color-slate)", flexShrink: 0, marginTop: "1px" }}>✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Engagement Types ──────────────────────────────────────────────── */}
      <section style={{ padding: "var(--section-pad-y) 24px", background: "var(--background)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <Reveal delay={0}><SectionLabel label="ENGAGEMENT OPTIONS" /></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "56px" }} className="two-col-equal">
            <Reveal delay={80}>
              <div className="engagement-card" style={{ border: "1px solid rgba(74,124,89,0.3)", borderTop: "3px solid var(--color-sage)", borderRadius: "var(--radius)", padding: "36px 32px", display: "flex", flexDirection: "column", gap: "24px", background: "var(--background)", transition: "box-shadow 200ms ease" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-sage)" }}>ONGOING · MONTH-TO-MONTH</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: "normal", color: "var(--foreground)", margin: 0, lineHeight: 1.2 }}>Fractional Retainer</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <EngagementDetail label="Ideal for" value="Steady product support through a growth stretch." />
                  <EngagementDetail label="Commitment" value="3+ months, renewable." />
                  <EngagementDetail label="Scope" value="Set at kickoff; tuned each quarter." />
                </div>
                <Link href="/#contact" className="link-sage-arrow">→ START WITH A CALL</Link>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="engagement-card" style={{ border: "1px solid rgba(74,124,89,0.3)", borderTop: "3px solid var(--color-sage)", borderRadius: "var(--radius)", padding: "36px 32px", display: "flex", flexDirection: "column", gap: "24px", background: "var(--background)", transition: "box-shadow 200ms ease" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-sage)" }}>ONE-TIME · FIXED SCOPE</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: "normal", color: "var(--foreground)", margin: 0, lineHeight: 1.2 }}>Focused Engagement</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <EngagementDetail label="Ideal for" value="One decision, audit, or org design sprint." />
                  <EngagementDetail label="Commitment" value="Usually 2–6 weeks." />
                  <EngagementDetail label="Scope" value="Fixed up front; shipped on date." />
                </div>
                <Link href="/#contact" className="link-sage-arrow">→ DESCRIBE YOUR SITUATION</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <CTASection
        headline="Ready to start?"
        subhead="30 minutes to get oriented. No deck, no sales process."
        buttonText="→ GET IN TOUCH"
        buttonHref="https://calendar.app.google/UkTiJRp4MpWsVLMXA"
      />

      <style>{`
        .link-sage-arrow {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-sage);
          text-decoration: none;
          transition: opacity var(--transition);
          display: inline-block;
        }
        .link-sage-arrow:hover { opacity: 0.7; }
        .engagement-card:hover { box-shadow: 0 4px 24px var(--nav-shadow); }
        .phase-line { display: block; }

        @media (max-width: 768px) {
          .two-col-equal { grid-template-columns: 1fr !important; gap: 32px !important; }
          .phase-line { display: none !important; }
        }
        @media (max-width: 640px) {
          :root { --section-pad-y: 72px; }
        }
        @media (max-width: 640px) {
          .phase-row { grid-template-columns: 1fr !important; gap: 16px !important; padding-left: 0 !important; }
        }
      `}</style>
    </>
  );
}

/* ── Phase data ──────────────────────────────────────────────────────────── */
const phases = [
  {
    id: "01",
    label: "PHASE 01 · DISCOVERY & AUDIT",
    title: "Discovery & Audit",
    duration: "WEEKS 1–2",
    description:
      "Understand the business before prescribing product: roadmap (if any), customers, team, and live bets—listen first, no template theater.",
    outputs: ["Current-state product audit", "Stakeholder context", "Risk / opportunity flags"],
  },
  {
    id: "02",
    label: "PHASE 02 · ALIGNMENT",
    title: "Alignment",
    duration: "WEEK 3",
    description:
      "Lock what we’re solving, how we work, and 30/60/90 success into a brief both sides reference.",
    outputs: ["Signed engagement brief", "Cadence agreed", "First sprint scope"],
  },
  {
    id: "03",
    label: "PHASE 03 · EXECUTION",
    title: "Execution",
    duration: "ONGOING",
    description:
      "Weekly shipping: specs, decisions, roadmap updates, design notes, comms—on paper, not in heads.",
    outputs: ["Specs & stories", "Quarterly / annual roadmap artifacts", "Design notes & decision logs"],
  },
  {
    id: "04",
    label: "PHASE 04 · HANDOFF",
    title: "Handoff",
    duration: "FINAL 2 WEEKS",
    description:
      "Close with a tidy package: what shipped, what’s deferred, what your next PM needs day one—not a dump of pages.",
    outputs: ["Handoff brief", "Artifact index", "Open decisions"],
  },
];

function PhaseBlock({ phase, delay }: { phase: typeof phases[number]; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "48px", paddingBottom: "72px", paddingLeft: "32px", position: "relative" }} className="phase-row">
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "40px", color: "var(--color-sage)", lineHeight: 1, opacity: 0.5, letterSpacing: "-0.02em", paddingTop: "4px" }} aria-hidden="true">
          {phase.id}
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-sage)", marginBottom: "12px" }}>{phase.label}</div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "20px", marginBottom: "20px", flexWrap: "wrap" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: "normal", color: "var(--foreground)", margin: 0, lineHeight: 1.2 }}>{phase.title}</h2>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-slate)", background: "rgba(143,163,177,0.12)", padding: "4px 10px", borderRadius: "var(--radius)", whiteSpace: "nowrap" }}>{phase.duration}</span>
          </div>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "17px", color: "var(--foreground)", lineHeight: 1.75, margin: "0 0 28px", opacity: 0.85 }}>{phase.description}</p>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-sage)", marginBottom: "12px" }}>Outputs</div>
          <ul className="sage-list">
            {phase.outputs.map(output => (
              <li key={output} style={{ color: "var(--foreground)", fontFamily: "var(--font-display)", fontSize: "16px", lineHeight: 1.6, opacity: 0.8 }}>{output}</li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}

function EngagementDetail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-slate)", marginBottom: "4px" }}>{label}</div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: "16px", color: "var(--foreground)", lineHeight: 1.5 }}>{value}</div>
    </div>
  );
}
