"use client";

interface CTASectionProps {
  headline?: string;
  subhead?: string;
  buttonText?: string;
  buttonHref?: string;
  showEmail?: boolean;
}

export default function CTASection({
  headline = "Ready to offload product?",
  subhead = "30 minutes to get oriented. No deck, no sales process.",
  buttonText = "→ GET IN TOUCH",
  buttonHref = "https://calendar.app.google/UkTiJRp4MpWsVLMXA",
  showEmail = true,
}: CTASectionProps) {
  return (
    <section
      id="work-with-us"
      style={{
        background: "var(--color-navy)",
        padding: "var(--section-pad-y) 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "40px",
            fontWeight: "normal",
            color: "var(--color-cream)",
            margin: "0 0 16px",
            lineHeight: 1.2,
          }}
        >
          {headline}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "18px",
            color: "var(--color-slate)",
            margin: "0 0 40px",
            lineHeight: 1.6,
          }}
        >
          {subhead}
        </p>
        <a
          href={buttonHref}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "white",
            background: "var(--color-sage)",
            padding: "14px 28px",
            borderRadius: "var(--radius)",
            textDecoration: "none",
            transition: "background var(--transition), transform var(--transition), box-shadow var(--transition)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "#5a9469";
            el.style.transform = "translateY(-1px)";
            el.style.boxShadow = "0 6px 20px rgba(74,124,89,0.35)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "var(--color-sage)";
            el.style.transform = "none";
            el.style.boxShadow = "none";
          }}
        >
          {buttonText}
        </a>
        {showEmail && (
          <div style={{ marginTop: "20px" }}>
            <a
              href="mailto:marc@sugoproduct.com"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--color-slate)",
                textDecoration: "none",
                transition: "color var(--transition)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-cream)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-slate)"; }}
            >
              marc@sugoproduct.com
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
