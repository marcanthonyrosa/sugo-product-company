import Link from "next/link";
import TomatoLogo from "@/components/tomato-logo";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-navy)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "48px 24px",
      }}
    >
      <TomatoLogo size={56} />
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--color-sage)",
          marginTop: "32px",
          marginBottom: "16px",
        }}
      >
        404 · Not Found
      </div>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(28px, 4vw, 40px)",
          fontWeight: "normal",
          color: "var(--color-cream)",
          margin: "0 0 16px",
          lineHeight: 1.2,
        }}
      >
        This page doesn&apos;t exist.
      </h1>
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "17px",
          color: "var(--color-slate)",
          margin: "0 0 40px",
          lineHeight: 1.6,
        }}
      >
        If you&apos;re looking for a client workspace, check the link in your email.
      </p>
      <Link
        href="/"
        className="not-found-cta"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "white",
          background: "var(--color-sage)",
          padding: "12px 24px",
          borderRadius: "var(--radius)",
          textDecoration: "none",
          display: "inline-block",
          transition: "background var(--transition), transform var(--transition)",
        }}
      >
        ← Back to Home
      </Link>
      <style>{`
        .not-found-cta:hover {
          background: #5a9469 !important;
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}
