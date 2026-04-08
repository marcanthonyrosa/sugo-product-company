"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutGrid,
  Target,
  Clock,
  Zap,
  Compass,
  Map,
  PenLine,
  CheckSquare,
} from "lucide-react";

/* ── Animation helpers ──────────────────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as const;

function FadeUp({ children, delay = 0, className = "", style = {} }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ── Floating decorative shape ──────────────────────────────────────────── */
function FloatingShape({ size, color, top, left, right, bottom, delay = 0 }: {
  size: number; color: string; top?: string; left?: string; right?: string; bottom?: string; delay?: number;
}) {
  return (
    <motion.div
      aria-hidden="true"
      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay }}
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        filter: `blur(${size * 0.8}px)`,
        top,
        left,
        right,
        bottom,
        pointerEvents: "none",
      }}
    />
  );
}

/* ── Problem card ───────────────────────────────────────────────────────── */
function ProblemCard({ icon: Icon, color, text, delay }: {
  icon: React.ElementType; color: string; text: string; delay: number;
}) {
  return (
    <FadeUp delay={delay}>
      <motion.div
        whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(74,124,89,0.12)" }}
        transition={{ duration: 0.2 }}
        style={{
          background: "var(--background)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-xl)",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          cursor: "default",
        }}
      >
        <div style={{
          width: 44,
          height: 44,
          borderRadius: "var(--radius)",
          background: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}>
          <Icon size={20} color="white" strokeWidth={1.5} />
        </div>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "15px",
          color: "var(--foreground)",
          margin: 0,
          lineHeight: 1.6,
          fontWeight: 400,
        }}>
          {text}
        </p>
      </motion.div>
    </FadeUp>
  );
}

/* ── Service card ───────────────────────────────────────────────────────── */
function ServiceCard({ icon: Icon, title, description, delay }: {
  icon: React.ElementType; title: string; description: string; delay: number;
}) {
  return (
    <FadeUp delay={delay}>
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
        style={{
          background: "var(--background)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          cursor: "default",
          position: "relative",
          overflow: "hidden",
        }}
        className="service-card"
      >
        {/* Accent bar at top — slides in on hover */}
        <div className="service-accent-bar" style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "var(--accent)",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 240ms ease",
          borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
        }} />

        <div style={{
          width: 44,
          height: 44,
          borderRadius: "var(--radius)",
          background: "rgba(74,124,89,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Icon size={20} color="var(--accent)" strokeWidth={1.5} />
        </div>
        <div>
          <h3 style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            fontWeight: 600,
            color: "var(--foreground)",
            margin: "0 0 8px",
          }}>
            {title}
          </h3>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            color: "var(--foreground)",
            margin: 0,
            lineHeight: 1.65,
          }}>
            {description}
          </p>
        </div>
      </motion.div>
    </FadeUp>
  );
}

/* ── Underline headline ─────────────────────────────────────────────────── */
function UnderlineHeadline() {
  return (
    <h2
      style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(28px, 4vw, 44px)",
        fontWeight: "normal",
        color: "var(--foreground)",
        margin: "0 0 24px",
        lineHeight: 1.2,
      }}
    >
      Founders wear every hat.{" "}
      <span style={{ position: "relative", display: "inline-block" }}>
        Product is one of the hardest.
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          style={{
            position: "absolute",
            bottom: -4,
            left: 0,
            width: "100%",
            height: "3px",
            background: "var(--accent)",
            borderRadius: "2px",
            transformOrigin: "left",
            display: "block",
          }}
        />
      </span>
    </h2>
  );
}

/* ── Main page ──────────────────────────────────────────────────────────── */
export default function HomeClient() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        style={{
          position: "relative",
          display: "flex",
          minHeight: "90vh",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: "32px",
        }}
      >
        {/* Layer 1: Grid overlay */}
        <div className="grid-overlay" aria-hidden="true" style={{ position: "absolute", inset: 0 }} />

        {/* Layer 2: Green + navy radial gradient atmosphere */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(ellipse at top left,var(--glow-green),transparent 50%),radial-gradient(ellipse at 85% 20%,var(--glow-navy),transparent 55%)",
          }}
        />

        {/* Layer 3: Floating blur shapes */}
        <div
          className="float-shape"
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "10%",
            top: "96px",
            width: "96px",
            height: "96px",
            borderRadius: "50%",
            background: "var(--float-green)",
            filter: "blur(64px)",
          }}
        />
        <div
          className="float-shape-delayed"
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "96px",
            right: "12%",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "var(--float-navy)",
            filter: "blur(64px)",
          }}
        />

        {/* Content: section-shell centers page-wide, inner div centers copy block */}
        <div className="section-shell" style={{ position: "relative" }}>
          <div style={{ margin: "0 auto", maxWidth: "56rem" /* max-w-4xl = 896px */, textAlign: "center" }}>

            {/* Logo */}
            <div
              className="reveal-base reveal-in"
              style={{
                "--delay": "0ms",
                marginBottom: "28px",
                display: "flex",
                justifyContent: "center",
              } as React.CSSProperties}
            >
              <Image
                src="/logo-tomato.png"
                alt="Sugo Product Company logo"
                width={84}
                height={84}
                style={{
                  width: "clamp(48px, 13.5vw, 84px)",
                  height: "auto",
                  borderRadius: "9px",
                  display: "block",
                }}
                priority
              />
            </div>

            {/* Kicker label */}
            <p
              className="section-kicker reveal-base reveal-in"
              style={{ "--delay": "100ms" } as React.CSSProperties}
            >
              Fractional Product Leadership
            </p>

            {/* Headline */}
            <h1
              className="reveal-base reveal-in"
              style={{
                "--delay": "200ms",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 7vw, 72px)",
                fontWeight: "normal",
                lineHeight: 0.98,
                letterSpacing: "-0.06em",
                color: "var(--foreground)",
                marginTop: "24px",
                marginBottom: 0,
              } as React.CSSProperties}
            >
              Product leadership for busy founders.
            </h1>

            {/* Supporting paragraph */}
            <p
              className="reveal-base reveal-in"
              style={{
                "--delay": "320ms",
                margin: "24px auto 0",
                maxWidth: "48rem",
                fontSize: "clamp(18px, 2vw, 20px)",
                fontWeight: 300,
                lineHeight: "2rem",
                color: "var(--foreground)",
              } as React.CSSProperties}
            >
              Make better product decisions and execute with confidence — without hiring a full-time product leader too early.
            </p>

            {/* CTA row */}
            <div
              className="reveal-base reveal-in hero-cta-row"
              style={{
                "--delay": "460ms",
                marginTop: "40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
              } as React.CSSProperties}
            >
              <Link href="#contact" className="button-primary hero-cta-btn">Book a Call</Link>
              <Link href="#how-it-works" className="button-secondary hero-cta-btn">Learn More</Link>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        .hero-cta-btn { min-width: 180px; }
        @media (min-width: 640px) {
          .hero-cta-row { flex-direction: row !important; }
        }
      `}</style>

      {/* ── Problem Section ───────────────────────────────────────────────── */}
      <section
        id="problem"
        style={{
          padding: "var(--section-pad-y) 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Cream-ish background */}
        <div style={{ position: "absolute", inset: 0, background: "var(--overlay-section)", pointerEvents: "none" }} />

        {/* Radial glows */}
        <div aria-hidden="true" style={{ position: "absolute", top: "10%", left: "5%", width: "400px", height: "300px", borderRadius: "50%", background: "var(--glow-green-soft)", filter: "blur(60px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: "10%", right: "5%", width: "350px", height: "250px", borderRadius: "50%", background: "var(--glow-navy-soft)", filter: "blur(60px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", position: "relative" }}>
          <FadeUp>
            <span className="section-label">The Reality</span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <UnderlineHeadline />
          </FadeUp>

          <FadeUp delay={0.15}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "var(--foreground)", margin: "0 0 56px", lineHeight: 1.75, maxWidth: "600px", fontWeight: 300 }}>
              You&apos;re building the product, managing the team, chasing revenue, and handling everything in between. Strategic product work shouldn&apos;t be the thing that slips.
            </p>
          </FadeUp>

          {/* 2×2 grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }} className="two-col-grid">
            <ProblemCard
              icon={LayoutGrid}
              color="rgba(17,34,64,0.85)"
              text="You own product, growth, go-to-market, and everything else"
              delay={0.1}
            />
            <ProblemCard
              icon={Target}
              color="rgba(74,124,89,0.85)"
              text="Product strategy gets deprioritized when things get busy"
              delay={0.2}
            />
            <ProblemCard
              icon={Clock}
              color="rgba(143,163,177,0.75)"
              text="Tactical work keeps slipping to next week — indefinitely"
              delay={0.3}
            />
            <ProblemCard
              icon={Zap}
              color="rgba(74,124,89,0.7)"
              text="Hiring a full-time CPO too early doesn&apos;t make sense yet"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* ── Services Section ──────────────────────────────────────────────── */}
      <section
        id="services"
        style={{ padding: "var(--section-pad-y) 24px", background: "var(--background)" }}
      >
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          <FadeUp>
            <span className="section-label">What We Do</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "normal", color: "var(--foreground)", margin: "0 0 16px", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
              Fractional product support to help founders load-balance.
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "var(--foreground)", margin: "0 0 56px", lineHeight: 1.7, maxWidth: "540px", fontWeight: 300 }}>
              Embedded support that moves with your business — strategy to execution, roadmap to spec.
            </p>
          </FadeUp>

          {/* 2×2 card grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", marginBottom: "32px" }} className="two-col-grid">
            <ServiceCard
              icon={Compass}
              title="Product Strategy & Initiative Bets"
              description="Identify the right bets for your stage. We help you decide what to build next and why — so effort goes where it creates the most leverage."
              delay={0.1}
            />
            <ServiceCard
              icon={Map}
              title="Quarterly & Annual Roadmapping"
              description="Structured roadmap artifacts your team can rally around. Quarterly priorities, annual themes, and a clear line from strategy to sprint."
              delay={0.2}
            />
            <ServiceCard
              icon={PenLine}
              title="Specs, Design & Execution"
              description="Product specs, user stories, design collaboration, and feedback loops — the detailed work that keeps engineering and design aligned."
              delay={0.3}
            />
            <ServiceCard
              icon={CheckSquare}
              title="Tactical Work That Keeps Slipping"
              description="The backlog of product work that never makes the cut. We tackle the high-value items that keep getting bumped to next week."
              delay={0.4}
            />
          </div>

          {/* One-time engagements callout */}
          <FadeUp delay={0.3}>
            <div style={{
              border: "1px dashed var(--accent)",
              borderRadius: "var(--radius-lg)",
              padding: "24px 28px",
              background: "rgba(74,124,89,0.04)",
              display: "flex",
              gap: "16px",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}>
              <div style={{ flex: 1, minWidth: "240px" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "8px" }}>
                  One-Time Engagements
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--foreground)", margin: "0 0 4px", fontWeight: 500 }}>
                  Fixed-scope projects for specific decisions.
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--foreground)", margin: 0, lineHeight: 1.6 }}>
                  Product/market fit analysis · PM org design · Audit & handoff packages
                </p>
              </div>
              <Link href="#contact" className="btn-outline" style={{ alignSelf: "center", whiteSpace: "nowrap" }}>
                Describe your situation →
              </Link>
            </div>
          </FadeUp>
        </div>

        <style>{`
          .service-card:hover .service-accent-bar { transform: scaleX(1) !important; }
        `}</style>
      </section>

      {/* ── How It Works + About ──────────────────────────────────────────── */}
      <section
        id="how-it-works"
        style={{ padding: "var(--section-pad-y) 24px", position: "relative", overflow: "hidden" }}
      >
        {/* Background */}
        <div style={{ position: "absolute", inset: 0, background: "var(--overlay-section)", pointerEvents: "none" }} />

        {/* Decorative corner lines */}
        <div aria-hidden="true" style={{ position: "absolute", top: 40, left: 40, width: 48, height: 48, borderTop: "2px solid var(--accent)", borderLeft: "2px solid var(--accent)", opacity: 0.3 }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: 40, right: 40, width: 48, height: 48, borderBottom: "2px solid var(--accent)", borderRight: "2px solid var(--accent)", opacity: 0.3 }} />

        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", position: "relative" }}>
          <FadeUp>
            <span className="section-label">How It Works</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "normal", color: "var(--foreground)", margin: "0 0 56px", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
              Simple to start. Flexible to scale.
            </h2>
          </FadeUp>

          {/* 3-step flow */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0", marginBottom: "80px", position: "relative" }} className="three-col-steps">
            {/* Connecting line (desktop) */}
            <div aria-hidden="true" className="steps-connector" style={{ position: "absolute", top: "28px", left: "calc(16.67% + 16px)", right: "calc(16.67% + 16px)", height: "1px", borderTop: "1px dashed rgba(74,124,89,0.4)", zIndex: 0 }} />

            {[
              { n: "01", title: "Discovery", desc: "We get deep on your product, team structure, current roadmap, and bets on the table. No templates — we listen first." },
              { n: "02", title: "Engagement", desc: "We scope the fractional arrangement: scope, cadence, and what success looks like at 30/60/90 days." },
              { n: "03", title: "Execution", desc: "We embed and deliver. Weekly output — specs, roadmaps, decision docs. Everything written down, nothing in someone's head." },
            ].map((step, i) => (
              <FadeUp key={step.n} delay={i * 0.15}>
                <div style={{ padding: "0 24px 0 0", position: "relative", zIndex: 1 }} className="step-col">
                  <motion.div
                    whileHover={{ color: "var(--accent)" }}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "clamp(28px, 3vw, 36px)",
                      color: "rgba(74,124,89,0.3)",
                      marginBottom: "20px",
                      letterSpacing: "-0.02em",
                      display: "inline-block",
                      transition: "color 200ms ease",
                    }}
                  >
                    {step.n}
                  </motion.div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: "normal", color: "var(--foreground)", margin: "0 0 12px" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--foreground)", margin: 0, lineHeight: 1.7 }}>
                    {step.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Link to full process page */}
          <FadeUp delay={0.35}>
            <div style={{ marginTop: "48px", marginBottom: "56px" }}>
              <Link
                href="/how-we-build"
                className="btn-primary process-link"
                style={{ fontSize: "15px", padding: "14px 28px", letterSpacing: "0.01em", textTransform: "none" }}
              >
                See our full build process →
              </Link>
            </div>
          </FadeUp>

          {/* Divider */}
          <div style={{ borderTop: "1px solid var(--border)", marginBottom: "64px" }} />

          {/* Why Sugo */}
          <FadeUp delay={0.1}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "48px", alignItems: "start" }} className="why-sugo-grid" id="about">
              <div>
                <span className="section-label">Why Sugo</span>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: "normal", color: "var(--foreground)", margin: "0", lineHeight: 1.3 }}>
                  The Sunday Sauce approach.
                </h2>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "var(--foreground)", margin: "0 0 20px", lineHeight: 1.8, fontWeight: 300 }}>
                  Sugo is Italian for sauce — the kind that simmers slowly on a Sunday, never rushed. Great products are built the same way: with intention, craft, and the right ingredients at the right time. That&apos;s the Sugo approach.
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "var(--foreground)", margin: 0, lineHeight: 1.8, fontWeight: 300 }}>
                  Everything produced is written so the founder stays in control. When the engagement ends, you don&apos;t need Sugo to interpret your own product. The artifacts are yours. The decisions are documented. Your next PM can hit the ground running on Day 1.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .three-col-steps { grid-template-columns: 1fr !important; gap: 40px !important; }
            .steps-connector { display: none !important; }
            .step-col { padding-right: 0 !important; }
            .why-sugo-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          }
        `}</style>
      </section>

      {/* ── CTA / Contact ─────────────────────────────────────────────────── */}
      <section
        id="contact"
        style={{
          padding: "var(--section-pad-y) 24px",
          color: "var(--color-cream)",
          position: "relative",
          overflow: "hidden",
          backgroundImage: "url('/contact-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay to ensure text contrast */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(10, 20, 40, 0.18)", pointerEvents: "none" }} />

        {/* Subtle green glow */}
        <div aria-hidden="true" style={{ position: "absolute", top: "10%", left: "-5%", width: "300px", height: "300px", borderRadius: "50%", background: "var(--glow-green)", filter: "blur(80px)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: "10%", right: "-5%", width: "240px", height: "240px", borderRadius: "50%", background: "var(--glow-green-soft)", filter: "blur(80px)", pointerEvents: "none" }} />

        <div className="section-shell" style={{ position: "relative", zIndex: 1 }}>
          <div className="contact-panel">
            <div style={{ maxWidth: "680px", margin: "0 auto", position: "relative" }}>
              <FadeUp>
                <span className="section-label" style={{ color: "var(--accent)" }}>Let&apos;s Talk</span>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(32px, 5vw, 52px)",
                  fontWeight: "normal",
                  color: "var(--color-cream)",
                  margin: "0 0 20px",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}>
                  Building the right product is make-or-break.
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "rgba(245,239,214,0.65)", margin: "0 0 48px", lineHeight: 1.7, fontWeight: 300 }}>
                  Let&apos;s talk about where you are, what&apos;s slipping, and whether Sugo is the right fit. No decks, no sales process — just a 30-minute conversation.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Book a Call
                  </a>
                  <a href="mailto:marc@sugoproduct.com" className="button-secondary" style={{ color: "var(--color-cream)", borderColor: "rgba(245,239,214,0.35)" }}>
                    marc@sugoproduct.com
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-panel {
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          padding: 40px 24px;
        }
        @media (min-width: 768px) {
          .contact-panel { padding: 56px 40px; }
        }
        @media (max-width: 640px) {
          .two-col-grid { grid-template-columns: 1fr !important; }
          :root { --section-pad-y: 72px; }
        }
      `}</style>
    </>
  );
}
