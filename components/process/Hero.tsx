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
        <Reveal delay={160}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "17px",
              color: "var(--foreground)",
              opacity: 0.72,
              margin: 0,
              lineHeight: 1.65,
              maxWidth: "640px",
            }}
          >
            Eight steps from problem to shipped product. AI does the volume; we own the decisions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
