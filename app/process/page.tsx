import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/section-label";
import CTASection from "@/components/cta-section";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "How We Work — Sugo Product Company",
  description:
    "Structured, thoughtful product leadership that leaves the founder in control. Learn how Sugo's process works.",
};

export default function ProcessPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-white)", padding: "160px 24px 80px", borderBottom: "1px solid rgba(74,124,89,0.15)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Reveal delay={0}><SectionLabel label="HOW WE WORK" /></Reveal>
          <Reveal delay={80}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 64px)", fontWeight: "normal", color: "var(--color-navy)", lineHeight: 1.1, margin: "32px 0 24px", letterSpacing: "-0.02em" }}>
              Slow thinking for fast companies.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "18px", color: "var(--color-slate)", margin: 0, lineHeight: 1.75, maxWidth: "640px" }}>
              Great product decisions don&apos;t come from moving fast. They come from asking the right
              questions, making the right bets, and documenting the work so it outlives the engagement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Philosophy ───────────────────────────────────────────────────── */}
      <section style={{ padding: "var(--section-pad-y) 24px", background: "var(--color-white)" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <Reveal delay={0}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "17px", color: "var(--color-navy)", lineHeight: 1.85, margin: "0 0 32px" }}>
              Sugo is named for the slow-cooked Sunday sauce — the kind made with time, intention, and
              craft. Not because it takes forever, but because the approach matters. Every recipe has a
              reason. The same applies here: every spec, every decision doc, every roadmap artifact is
              written because it earns its place. No output for output&apos;s sake.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "17px", color: "var(--color-navy)", lineHeight: 1.85, margin: 0 }}>
              Everything we produce is written so the founder stays in control. When the engagement ends,
              you don&apos;t need Sugo to interpret your own product. The artifacts are yours. The
              decisions are documented. Your next PM can open the folder on Day 1 and know exactly where
              things stand.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── The Four Phases ───────────────────────────────────────────────── */}
      <section style={{ padding: "var(--section-pad-y) 24px", background: "var(--color-white)", borderTop: "1px solid rgba(74,124,89,0.12)" }}>
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
      <section style={{ padding: "var(--section-pad-y) 24px", background: "var(--color-cream)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <Reveal delay={0}><SectionLabel label="WHAT TO EXPECT" /></Reveal>
          <Reveal delay={80}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "32px", fontWeight: "normal", color: "var(--color-navy)", margin: "32px 0 56px", lineHeight: 1.3 }}>
              What Sugo is, and what it isn&apos;t.
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }} className="two-col-equal">
            <Reveal delay={160}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-sage)", marginBottom: "24px" }}>We are</div>
                <ul className="sage-list">
                  {["Embedded, not advisory — we do the work", "Async-first but available for syncs", "Opinionated — we'll tell you what we think", "Outcome-oriented — deliverables, not hours"].map(item => (
                    <li key={item} style={{ color: "var(--color-navy)", fontFamily: "var(--font-display)", fontSize: "17px", lineHeight: 1.65, marginBottom: "12px" }}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-slate)", marginBottom: "24px" }}>We&apos;re not</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {["A full-time PM replacement (at full-time overhead)", "A vendor who needs managing", "A strategy firm that hands you a deck and leaves", "Right for every stage (we're honest about fit)"].map(item => (
                    <li key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start", color: "var(--color-navy)", fontFamily: "var(--font-display)", fontSize: "17px", lineHeight: 1.65, marginBottom: "12px", opacity: 0.65 }}>
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
      <section style={{ padding: "var(--section-pad-y) 24px", background: "var(--color-white)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <Reveal delay={0}><SectionLabel label="ENGAGEMENT OPTIONS" /></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "56px" }} className="two-col-equal">
            <Reveal delay={80}>
              <div className="engagement-card" style={{ border: "1px solid rgba(74,124,89,0.3)", borderTop: "3px solid var(--color-sage)", borderRadius: "var(--radius)", padding: "36px 32px", display: "flex", flexDirection: "column", gap: "24px", background: "var(--color-white)", transition: "box-shadow 200ms ease" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-sage)" }}>ONGOING · MONTH-TO-MONTH</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: "normal", color: "var(--color-navy)", margin: 0, lineHeight: 1.2 }}>Fractional Retainer</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <EngagementDetail label="Ideal for" value="Founders who need consistent product support through a growth phase." />
                  <EngagementDetail label="Commitment" value="Minimum 3 months, renewable." />
                  <EngagementDetail label="Scope" value="Defined at engagement start, adjusted quarterly." />
                </div>
                <Link href="/#contact" className="link-sage-arrow">→ START WITH A CALL</Link>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="engagement-card" style={{ border: "1px solid rgba(74,124,89,0.3)", borderTop: "3px solid var(--color-sage)", borderRadius: "var(--radius)", padding: "36px 32px", display: "flex", flexDirection: "column", gap: "24px", background: "var(--color-white)", transition: "box-shadow 200ms ease" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-sage)" }}>ONE-TIME · FIXED SCOPE</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: "normal", color: "var(--color-navy)", margin: 0, lineHeight: 1.2 }}>Focused Engagement</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <EngagementDetail label="Ideal for" value="A specific decision, audit, or org design challenge." />
                  <EngagementDetail label="Commitment" value="Typically 2–6 weeks." />
                  <EngagementDetail label="Scope" value="Defined up front, delivered on deadline." />
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
        subhead="Engagements start with a 30-minute call. No decks, no sales process."
        buttonText="→ GET IN TOUCH"
        buttonHref="/#contact"
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
        .engagement-card:hover { box-shadow: 0 4px 24px rgba(17,34,64,0.08); }
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
    description: "We get into the business before we say anything about product. We review what exists: the roadmap (if there is one), customer feedback, team structure, and what bets are on the table. No templates, no checklist — we listen first.",
    outputs: ["Current-state product audit", "Stakeholder context doc", "Initial risk and opportunity flags"],
  },
  {
    id: "02",
    label: "PHASE 02 · ALIGNMENT",
    title: "Alignment",
    duration: "WEEK 3",
    description: "We define the engagement: what we're solving, how we'll work together, what success looks like at 30/60/90 days. This becomes the engagement brief — a living document both parties reference.",
    outputs: ["Engagement brief (signed)", "Communication cadence established", "First sprint's scope confirmed"],
  },
  {
    id: "03",
    label: "PHASE 03 · EXECUTION",
    title: "Execution",
    duration: "ONGOING",
    description: "This is where work happens. Weekly output: specs, decision docs, roadmap updates, design feedback, stakeholder comms. Everything is written down. Nothing lives only in someone's head.",
    outputs: ["Product specs and user stories", "Roadmap artifacts (quarterly and annual)", "Design collaboration notes", "Decision logs"],
  },
  {
    id: "04",
    label: "PHASE 04 · HANDOFF",
    title: "Handoff",
    duration: "FINAL 2 WEEKS",
    description: "Engagements end with a clean handoff package — not a pile of Notion pages. We document what was decided, what was deferred, and what your next PM needs to know on Day 1.",
    outputs: ["Handoff brief", "Artifact index (links to all deliverables)", "Outstanding decision log"],
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
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: "normal", color: "var(--color-navy)", margin: 0, lineHeight: 1.2 }}>{phase.title}</h2>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-slate)", background: "rgba(143,163,177,0.12)", padding: "4px 10px", borderRadius: "var(--radius)", whiteSpace: "nowrap" }}>{phase.duration}</span>
          </div>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "17px", color: "var(--color-navy)", lineHeight: 1.75, margin: "0 0 28px", opacity: 0.85 }}>{phase.description}</p>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-sage)", marginBottom: "12px" }}>Outputs</div>
          <ul className="sage-list">
            {phase.outputs.map(output => (
              <li key={output} style={{ color: "var(--color-navy)", fontFamily: "var(--font-display)", fontSize: "16px", lineHeight: 1.6, opacity: 0.8 }}>{output}</li>
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
      <div style={{ fontFamily: "var(--font-display)", fontSize: "16px", color: "var(--color-navy)", lineHeight: 1.5 }}>{value}</div>
    </div>
  );
}
