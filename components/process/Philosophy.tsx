import Reveal from "@/components/reveal";

export default function Philosophy() {
  return (
    <section style={{ padding: "var(--section-pad-y) 24px", background: "var(--background)" }}>
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
        <Reveal delay={0}>
          <div
            style={{
              background: "var(--color-navy)",
              borderRadius: "var(--radius-lg)",
              padding: "48px 40px",
              maxWidth: "720px",
            }}
            className="philosophy-block"
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "20px",
                fontWeight: 500,
                color: "var(--color-cream)",
                margin: "0 0 20px",
                lineHeight: 1.4,
              }}
            >
              We treat AI as the team, not the tool.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                color: "rgba(245,239,214,0.75)",
                margin: "0 0 16px",
                lineHeight: 1.7,
              }}
            >
              Claude and its ecosystem handle the execution. We handle the judgment.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                color: "rgba(245,239,214,0.75)",
                margin: "0 0 16px",
                lineHeight: 1.7,
              }}
            >
              Every phase has a primary AI tool, a best practice, and a clear outcome. Nothing is ad hoc.
              Our process is grounded in the frameworks published by Lenny&apos;s Newsletter — the gold standard
              for modern product practice.
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "16px",
                color: "var(--color-cream)",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              Most product consultants advise. We build.
            </p>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .philosophy-block { padding: 32px 24px !important; }
        }
      `}</style>
    </section>
  );
}
