import Reveal from "@/components/reveal";
import SectionLabel from "@/components/section-label";

export default function Hero() {
  return (
    <section
      style={{
        background: "var(--background)",
        padding: "160px 24px 80px",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Reveal delay={0}>
          <SectionLabel label="HOW WE BUILD" />
        </Reveal>
        <Reveal delay={80}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 6vw, 40px)",
              fontWeight: 500,
              color: "var(--foreground)",
              lineHeight: 1.15,
              margin: "24px 0 20px",
              letterSpacing: "-0.02em",
            }}
          >
            How we build
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "18px",
              color: "var(--foreground)",
              opacity: 0.7,
              margin: "0 0 20px",
              lineHeight: 1.6,
              maxWidth: "640px",
              fontStyle: "italic",
            }}
          >
            A clear, step-by-step process for turning your idea into a real
            product — faster than you thought possible.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              color: "var(--foreground)",
              opacity: 0.65,
              margin: 0,
              lineHeight: 1.7,
              maxWidth: "600px",
            }}
          >
            Every project we take on follows 8 clear steps — from
            understanding the problem to launching something real. We use AI
            to handle the heavy lifting so we can focus on the decisions that
            matter.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
