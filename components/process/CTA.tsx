import Link from "next/link";
import Reveal from "@/components/reveal";

export default function ProcessCTA() {
  return (
    <section
      style={{
        background: "var(--background)",
        borderTop: "1px solid var(--border)",
        padding: "var(--section-pad-y) 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "560px", margin: "0 auto" }}>
        <Reveal delay={0}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 5vw, 36px)",
              fontWeight: "normal",
              color: "var(--foreground)",
              margin: "0 0 12px",
              lineHeight: 1.2,
            }}
          >
            Ready to build something?
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "17px",
              color: "var(--foreground)",
              opacity: 0.65,
              margin: "0 0 36px",
              lineHeight: 1.6,
            }}
          >
            Walk your idea through the same eight steps.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <Link href="/#contact" className="btn-primary">
            Work with us →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
