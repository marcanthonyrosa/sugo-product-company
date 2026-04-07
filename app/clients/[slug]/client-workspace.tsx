"use client";

import Link from "next/link";
import TomatoLogo from "@/components/tomato-logo";
import type { Client } from "@/lib/clients";

export default function ClientWorkspace({ client }: { client: Client }) {
  const formattedStart = new Date(client.startDate).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-white)" }}>
      {/* ── Top bar ────────────────────────────────────────────────────── */}
      <div
        style={{
          background: "var(--color-navy)",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          borderBottom: "1px solid rgba(74,124,89,0.3)",
        }}
      >
        <Link href="/" aria-label="Back to Sugo Product Company">
          <TomatoLogo size={36} />
        </Link>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-sage)",
            }}
          >
            Client Workspace
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "14px",
              color: "var(--color-cream)",
            }}
          >
            {client.name}
          </span>
        </div>
      </div>

      {/* ── Main content ───────────────────────────────────────────────── */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "56px 24px 80px" }}>

        {/* Header card */}
        <div
          style={{
            background: "var(--color-cream)",
            borderTop: "3px solid var(--color-sage)",
            borderRadius: "0 0 var(--radius) var(--radius)",
            padding: "32px 36px",
            marginBottom: "48px",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "32px",
              fontWeight: "normal",
              color: "var(--color-navy)",
              margin: "0 0 12px",
            }}
          >
            {client.name}
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--color-slate)",
                letterSpacing: "0.05em",
              }}
            >
              {client.engagementType} · Started {formattedStart}
            </span>
            <StatusBadge status={client.status} />
          </div>
        </div>

        {/* Deliverables */}
        <section aria-label="Deliverables" style={{ marginBottom: "48px" }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-sage)",
              marginBottom: "8px",
            }}
          >
            Deliverables
          </div>
          <div style={{ width: "40px", height: "1px", background: "var(--color-sage)", marginBottom: "24px" }} />

          <div style={{ border: "1px solid rgba(143,163,177,0.2)", borderRadius: "var(--radius)", overflow: "hidden" }}>
            {/* Table header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 120px 120px 80px",
                padding: "12px 20px",
                background: "var(--color-navy)",
                gap: "16px",
              }}
              className="deliverable-row"
            >
              {["Title", "Type", "Date", ""].map((h) => (
                <span
                  key={h}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-slate)",
                  }}
                >
                  {h}
                </span>
              ))}
            </div>

            {/* Rows */}
            {client.deliverables.map((d, i) => (
              <div
                key={d.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 120px 120px 80px",
                  padding: "16px 20px",
                  gap: "16px",
                  borderTop: i > 0 ? "1px solid rgba(143,163,177,0.15)" : undefined,
                  alignItems: "center",
                }}
                className="deliverable-data-row"
              >
                <span style={{ fontFamily: "var(--font-display)", fontSize: "16px", color: "var(--color-navy)" }}>
                  {d.title}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--color-slate)", letterSpacing: "0.05em" }}>
                  {d.type}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--color-slate)" }}>
                  {d.date}
                </span>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="deliverable-link"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--color-sage)",
                    textDecoration: "none",
                    letterSpacing: "0.05em",
                    transition: "opacity var(--transition)",
                  }}
                >
                  → Open
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Notes */}
        {client.notes && (
          <section aria-label="Notes" style={{ marginBottom: "48px" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-sage)",
                marginBottom: "8px",
              }}
            >
              Current Context
            </div>
            <div style={{ width: "40px", height: "1px", background: "var(--color-sage)", marginBottom: "24px" }} />
            <div
              style={{
                background: "rgba(245,239,214,0.35)",
                border: "1px solid rgba(74,124,89,0.2)",
                borderRadius: "var(--radius)",
                padding: "24px 28px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "17px",
                  color: "var(--color-navy)",
                  margin: 0,
                  lineHeight: 1.75,
                }}
              >
                {client.notes}
              </p>
            </div>
          </section>
        )}

        {/* Contact bar */}
        <div style={{ borderTop: "1px solid rgba(143,163,177,0.2)", paddingTop: "32px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--color-slate)",
              letterSpacing: "0.05em",
            }}
          >
            Questions?{" "}
            <a
              href="mailto:marc@sugoproduct.co"
              className="contact-link"
              style={{
                color: "var(--color-sage)",
                textDecoration: "none",
                transition: "opacity var(--transition)",
              }}
            >
              marc@sugoproduct.co
            </a>
          </span>
        </div>
      </div>

      <style>{`
        .deliverable-data-row { transition: background var(--transition); }
        .deliverable-data-row:hover { background: rgba(245,239,214,0.4); }
        .deliverable-link:hover { opacity: 0.7; }
        .contact-link:hover { opacity: 0.7; }

        @media (max-width: 600px) {
          .deliverable-row { grid-template-columns: 1fr 80px 80px 60px !important; }
          .deliverable-data-row { grid-template-columns: 1fr 80px 80px 60px !important; }
        }
        @media (max-width: 480px) {
          .deliverable-row { grid-template-columns: 1fr 60px !important; }
          .deliverable-data-row { grid-template-columns: 1fr 60px !important; }
          .deliverable-row > span:nth-child(2),
          .deliverable-row > span:nth-child(3),
          .deliverable-data-row > span:nth-child(2),
          .deliverable-data-row > span:nth-child(3) { display: none; }
        }
      `}</style>
    </div>
  );
}

function StatusBadge({ status }: { status: "active" | "complete" }) {
  const isActive = status === "active";
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: isActive ? "var(--color-sage)" : "var(--color-slate)",
        background: isActive ? "rgba(74,124,89,0.12)" : "rgba(143,163,177,0.12)",
        padding: "4px 10px",
        borderRadius: "var(--radius)",
        border: `1px solid ${isActive ? "rgba(74,124,89,0.3)" : "rgba(143,163,177,0.25)"}`,
      }}
    >
      {isActive ? "Active" : "Complete"}
    </span>
  );
}
