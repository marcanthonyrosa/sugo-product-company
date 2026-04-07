"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Services",     href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About",        href: "/#about" },
  { label: "Contact",      href: "/#contact" },
];

export default function Nav() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* ── Outer nav ────────────────────────────────────────────────────── */}
      <nav
        aria-label="Primary"
        style={{
          position: "fixed",
          inset: "0 0 auto 0",
          zIndex: 50,
          borderBottom: scrolled
            ? "1px solid rgba(143, 163, 177, 0.2)"
            : "1px solid transparent",
          background: "rgba(250, 250, 247, 0.96)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          boxShadow: scrolled ? "0 1px 3px rgba(143,163,177,0.08)" : "none",
          transition: "border-color 300ms ease, box-shadow 300ms ease",
        }}
      >
        {/* ── Inner container ──────────────────────────────────────────── */}
        <div
          className="section-shell"
          style={{
            display: "flex",
            height: "80px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ── Logo lockup ────────────────────────────────────────────── */}
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
            }}
            aria-label="Sugo Product Company — Home"
          >
            <Image
              src="/logo-tomato.png"
              alt="Sugo Product Company logo"
              width={32}
              height={32}
              style={{ borderRadius: "8px", display: "block" }}
              priority
            />
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "22px",
                fontWeight: "normal",
                letterSpacing: "-0.03em",
                color: "var(--color-navy)",
                lineHeight: 1,
              }}
            >
              Sugo
            </span>
          </Link>

          {/* ── Desktop links + CTA ────────────────────────────────────── */}
          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="eyebrow-link">
                {link.label}
              </Link>
            ))}
            <Link href="/#contact" className="button-primary">
              Get In Touch
            </Link>
          </div>

          {/* ── Mobile hamburger ───────────────────────────────────────── */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMenuOpen((o) => !o)}
            className="mobile-hamburger"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              borderRadius: "var(--radius-md)",
              border: "1px solid rgba(143, 163, 177, 0.3)",
              background: "rgba(255, 255, 255, 0.60)",
              cursor: "pointer",
            }}
          >
            {/* Hamburger lines */}
            <span style={{ position: "relative", display: "block", width: "20px", height: "16px" }}>
              <span style={{
                position: "absolute", left: 0, top: 0,
                width: "20px", height: "1px",
                background: "var(--color-navy)",
                transition: "transform 200ms ease",
                transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none",
              }} />
              <span style={{
                position: "absolute", left: 0, top: "8px",
                width: "20px", height: "1px",
                background: "var(--color-navy)",
                transition: "opacity 200ms ease",
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                position: "absolute", left: 0, top: "16px",
                width: "20px", height: "1px",
                background: "var(--color-navy)",
                transition: "transform 200ms ease",
                transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none",
              }} />
            </span>
          </button>
        </div>
      </nav>

      {/* ── Mobile panel ─────────────────────────────────────────────────── */}
      <div
        id="mobile-nav-panel"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className="mobile-panel"
        style={{
          position: "fixed",
          inset: "80px 0 auto 0",
          zIndex: 40,
          borderBottom: "1px solid rgba(143, 163, 177, 0.2)",
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          padding: "0 24px",
          boxShadow: "0 10px 15px -3px rgba(143,163,177,0.1)",
          transition: "opacity 300ms ease, transform 300ms ease, visibility 300ms ease",
          opacity:    menuOpen ? 1 : 0,
          transform:  menuOpen ? "translateY(0)" : "translateY(-16px)",
          visibility: menuOpen ? "visible" : "hidden",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <div style={{ paddingTop: "24px", paddingBottom: "32px", display: "flex", flexDirection: "column", gap: "4px" }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#4a5568",
                textDecoration: "none",
                padding: "14px 0",
                borderBottom: "1px solid rgba(143, 163, 177, 0.15)",
                transition: "color 200ms ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--foreground)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#4a5568"; }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={close}
            className="button-primary"
            style={{ marginTop: "20px", justifyContent: "center" }}
          >
            Get In Touch
          </Link>
        </div>
      </div>

      <style>{`
        /* Hide desktop nav below md (768px) */
        @media (max-width: 767px) { .desktop-nav { display: none !important; } }
        /* Hide hamburger at md+ */
        @media (min-width: 768px) { .mobile-hamburger { display: none !important; } }
        /* Hide panel at md+ (insurance) */
        @media (min-width: 768px) { .mobile-panel { display: none !important; } }
      `}</style>
    </>
  );
}
