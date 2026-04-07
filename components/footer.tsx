"use client";

import Link from "next/link";
import TomatoLogo from "./tomato-logo";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--background)",
        padding: "48px 24px",
      }}
    >
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "24px" }}
          className="footer-grid"
        >
          {/* Left: logo + name */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <TomatoLogo size={24} />
            <span style={{ fontFamily: "var(--font-display)", fontSize: "15px", color: "var(--foreground)" }}>
              Sugo Product Company
            </span>
          </div>

          {/* Center: nav */}
          <nav aria-label="Footer navigation" style={{ display: "flex", gap: "28px" }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="footer-nav-link"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  color: "var(--foreground)",
                  textDecoration: "none",
                  transition: "color var(--transition)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: copyright */}
          <div style={{ textAlign: "right" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--foreground)", letterSpacing: "0.05em" }}>
              © 2026 Sugo Product Company
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-nav-link:hover { color: var(--foreground) !important; }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; text-align: center; gap: 20px !important; }
          .footer-grid > div:first-child { justify-content: center; }
          .footer-grid > div:last-child { text-align: center !important; }
          .footer-grid nav { justify-content: center; flex-wrap: wrap; gap: 16px !important; }
        }
      `}</style>
    </footer>
  );
}
