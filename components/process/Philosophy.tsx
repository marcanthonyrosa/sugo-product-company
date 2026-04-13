import Reveal from "@/components/reveal";

export default function Philosophy() {
  return (
    <section style={{ padding: "var(--section-pad-y) 24px", background: "var(--background)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
              We use AI to do the work, not just give advice.
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
              AI handles drafting, code, and research—you keep the calls and tradeoffs.
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
              Each step ships a deliverable; we don’t improvise the playbook mid-flight.
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
              Most consultants give you a slide deck. We give you a working product.
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
