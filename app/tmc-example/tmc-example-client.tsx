"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Database,
  Layers,
  Monitor,
  Mail,
  FileText,
  ExternalLink,
  MonitorPlay,
} from "lucide-react";
import Reveal from "@/components/reveal";
import SectionLabel from "@/components/section-label";

/* ── Data ──────────────────────────────────────────────────────────────── */

const stats = [
  { label: "Companies Tracked", value: "450+" },
  { label: "Total Funding Raised", value: "$5.2B" },
  { label: "Data Sources", value: "4" },
  { label: "AI Classification", value: "Real-time" },
];

const surfaces = [
  {
    icon: Monitor,
    title: "Internal Dashboard",
    desc: "Real-time portfolio intelligence for TMC leadership — funding signals, company health scores, and AI-classified news.",
  },
  {
    icon: Layers,
    title: "Public Marketing Feed",
    desc: "Curated, positive-signal company activity feed for TMC's website and digital boards throughout the campus.",
  },
  {
    icon: Mail,
    title: "Email Digest",
    desc: "Weekly stakeholder briefings with portfolio highlights, new funding rounds, and emerging trends.",
  },
];

const archImages = [
  {
    src: "/tmc-example/arch-02-enrichment-pipeline.png",
    caption: "Nightly Enrichment Pipeline — Data ingestion, AI classification, scoring",
  },
  {
    src: "/tmc-example/arch-03-database-erd.png",
    caption: "Database ERD — Companies, signals, users, preferences",
  },
];

type Tab = "prototype" | "product" | "architecture";

const TABS: { value: Tab; label: string; icon: React.ElementType }[] = [
  { value: "prototype", label: "Prototype", icon: MonitorPlay },
  { value: "product", label: "Product", icon: FileText },
  { value: "architecture", label: "Architecture", icon: Database },
];

/* ── Component ─────────────────────────────────────────────────────────── */

export default function TmcExampleClient() {
  const [activeTab, setActiveTab] = useState<Tab>("prototype");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .tmc-ex-stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .tmc-ex-surfaces-grid { grid-template-columns: 1fr !important; }
          .tmc-ex-users-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── Lightbox ──────────────────────────────────────────────────── */}
      {lightboxImg && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged diagram"
          onClick={() => setLightboxImg(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            background: "rgba(17, 34, 64, 0.88)",
            cursor: "zoom-out",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightboxImg}
            alt=""
            style={{
              maxHeight: "90vh",
              maxWidth: "90vw",
              borderRadius: "var(--radius-lg)",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      )}

      {/* ── Deep Dive ─────────────────────────────────────────────────── */}
      <section
        id="deep-dive"
        style={{
          padding: "120px 24px var(--section-pad-y)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--overlay-section)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "8%",
            left: "4%",
            width: "360px",
            height: "280px",
            borderRadius: "50%",
            background: "var(--glow-green-soft)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "10%",
            right: "4%",
            width: "300px",
            height: "220px",
            borderRadius: "50%",
            background: "var(--glow-navy-soft)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative" }}>
          <Reveal delay={0}>
            <SectionLabel label="Deep dive" />
          </Reveal>
          <Reveal delay={60}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: "normal",
                color: "var(--foreground)",
                margin: "24px 0 12px",
                lineHeight: 1.25,
              }}
            >
              Portfolio intelligence for TMC leadership.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p
              style={{
                margin: "0 0 40px",
                fontSize: "15px",
                color: "var(--foreground)",
                lineHeight: 1.65,
                fontWeight: 300,
                maxWidth: "580px",
              }}
            >
              A portfolio intelligence platform that transforms scattered data into actionable
              insights for TMC leadership.
            </p>
          </Reveal>

          {/* Stats */}
          <Reveal delay={140}>
            <div
              className="tmc-ex-stats-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: "10px",
                marginBottom: "40px",
              }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: "var(--card-surface)",
                    border: "0.5px solid var(--border)",
                    borderRadius: "var(--radius-lg)",
                    padding: "16px 18px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "22px",
                      fontWeight: 500,
                      color: "var(--foreground)",
                      lineHeight: 1.1,
                      marginBottom: "6px",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--muted)",
                      lineHeight: 1.4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Tabs */}
          <Reveal delay={180}>
            <div
              role="tablist"
              aria-label="Deep dive sections"
              style={{
                display: "flex",
                gap: "4px",
                padding: "4px",
                borderRadius: "var(--radius-lg)",
                background: "var(--card-surface)",
                border: "0.5px solid var(--border)",
                marginBottom: "24px",
                flexWrap: "wrap",
              }}
            >
              {TABS.map(({ value, label, icon: Icon }) => {
                const isActive = activeTab === value;
                return (
                  <button
                    key={value}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(value)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 16px",
                      borderRadius: "var(--radius-md)",
                      border: "none",
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      background: isActive ? "var(--accent)" : "transparent",
                      color: isActive ? "white" : "var(--muted)",
                      cursor: "pointer",
                      transition: "background 160ms ease, color 160ms ease",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Icon size={14} strokeWidth={1.75} />
                    {label}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Prototype Tab */}
          {activeTab === "prototype" && (
            <Reveal delay={0}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ flex: "1 1 320px" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "20px",
                        fontWeight: "normal",
                        color: "var(--foreground)",
                        margin: "0 0 6px",
                      }}
                    >
                      Working Figma prototype.
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "14px",
                        color: "var(--foreground)",
                        lineHeight: 1.65,
                        fontWeight: 300,
                      }}
                    >
                      Click through the interactive prototype below — it demonstrates the
                      dashboard, company detail views, and signal feeds.
                    </p>
                  </div>
                  <a
                    href="https://fixed-dawn-29068691.figma.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{ flexShrink: 0 }}
                  >
                    <ExternalLink size={14} strokeWidth={1.75} />
                    Open in Figma
                  </a>
                </div>
                <div
                  style={{
                    background: "var(--card-surface)",
                    border: "0.5px solid var(--border)",
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    boxShadow: "0 1px 3px rgba(17,34,64,0.06)",
                  }}
                >
                  <iframe
                    src="https://fixed-dawn-29068691.figma.site"
                    title="TMC Intelligence Prototype"
                    allowFullScreen
                    style={{ width: "100%", height: 700, border: "none", display: "block" }}
                  />
                </div>
              </div>
            </Reveal>
          )}

          {/* Product Tab */}
          {activeTab === "product" && (
            <Reveal delay={0}>
              <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "20px",
                      fontWeight: "normal",
                      color: "var(--foreground)",
                      margin: "0 0 12px",
                    }}
                  >
                    The problem.
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "15px",
                      color: "var(--foreground)",
                      lineHeight: 1.75,
                      fontWeight: 300,
                    }}
                  >
                    TMC tracks 450+ portfolio companies across its Innovation and Venture Fund
                    programs, but company data is scattered across Salesforce, spreadsheets,
                    news feeds, and individual knowledge. Leadership lacks a unified, real-time
                    view of portfolio health and activity.
                  </p>
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "20px",
                      fontWeight: "normal",
                      color: "var(--foreground)",
                      margin: "0 0 16px",
                    }}
                  >
                    Three surfaces.
                  </h3>
                  <div
                    className="tmc-ex-surfaces-grid"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                      gap: "12px",
                    }}
                  >
                    {surfaces.map((s) => {
                      const Icon = s.icon;
                      return (
                        <div
                          key={s.title}
                          style={{
                            background: "var(--card-surface)",
                            border: "0.5px solid var(--border)",
                            borderRadius: "var(--radius-lg)",
                            padding: "20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                          }}
                        >
                          <div
                            style={{
                              width: 40,
                              height: 40,
                              borderRadius: "var(--radius-md)",
                              background: "var(--cat-design-bg)",
                              color: "var(--cat-design-text)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Icon size={20} strokeWidth={1.75} />
                          </div>
                          <h4
                            style={{
                              margin: 0,
                              fontSize: "14px",
                              fontWeight: 500,
                              color: "var(--foreground)",
                            }}
                          >
                            {s.title}
                          </h4>
                          <p
                            style={{
                              margin: 0,
                              fontSize: "13px",
                              color: "var(--foreground)",
                              lineHeight: 1.65,
                              fontWeight: 300,
                            }}
                          >
                            {s.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "20px",
                      fontWeight: "normal",
                      color: "var(--foreground)",
                      margin: "0 0 16px",
                    }}
                  >
                    User segments.
                  </h3>
                  <div
                    className="tmc-ex-users-grid"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                      gap: "10px",
                    }}
                  >
                    {[
                      { role: "TMC Leadership", need: "High-level portfolio health and fundraising metrics" },
                      { role: "Investment Team", need: "Company-level signals and due diligence data" },
                      { role: "Marketing Team", need: "Curated positive stories for external comms" },
                      { role: "External Stakeholders", need: "Public-facing success metrics and activity" },
                    ].map((u) => (
                      <div
                        key={u.role}
                        style={{
                          background: "var(--card-surface)",
                          border: "0.5px solid var(--border)",
                          borderRadius: "var(--radius-lg)",
                          padding: "16px 18px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "var(--foreground)",
                            marginBottom: "4px",
                          }}
                        >
                          {u.role}
                        </div>
                        <div
                          style={{
                            fontSize: "13px",
                            color: "var(--muted)",
                            lineHeight: 1.55,
                            fontWeight: 300,
                          }}
                        >
                          {u.need}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* Architecture Tab */}
          {activeTab === "architecture" && (
            <Reveal delay={0}>
              <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "20px",
                      fontWeight: "normal",
                      color: "var(--foreground)",
                      margin: "0 0 8px",
                    }}
                  >
                    Interactive system architecture.
                  </h3>
                  <p
                    style={{
                      margin: "0 0 16px",
                      fontSize: "13px",
                      color: "var(--muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    Three-layer stack: External APIs → Supabase backend → React frontend.
                  </p>
                  <div
                    style={{
                      background: "#ffffff",
                      border: "0.5px solid var(--border)",
                      borderRadius: "var(--radius-lg)",
                      overflow: "hidden",
                      boxShadow: "0 1px 3px rgba(17,34,64,0.06)",
                    }}
                  >
                    <iframe
                      src="/tmc-example/tmc_system_architecture.html"
                      title="TMC System Architecture"
                      style={{ width: "100%", height: 600, border: "none", display: "block" }}
                    />
                  </div>
                </div>

                <div>
                  <p
                    style={{
                      margin: "0 0 16px",
                      fontSize: "13px",
                      color: "var(--muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    Click any diagram to enlarge.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    {archImages.map((img) => (
                      <figure key={img.src} style={{ margin: 0 }}>
                        <button
                          type="button"
                          onClick={() => setLightboxImg(img.src)}
                          style={{
                            display: "block",
                            width: "100%",
                            padding: 0,
                            background: "#ffffff",
                            border: "0.5px solid var(--border)",
                            borderRadius: "var(--radius-lg)",
                            overflow: "hidden",
                            cursor: "zoom-in",
                            boxShadow: "0 1px 3px rgba(17,34,64,0.06)",
                          }}
                        >
                          <Image
                            src={img.src}
                            alt={img.caption}
                            width={1456}
                            height={816}
                            style={{ width: "100%", height: "auto", display: "block" }}
                          />
                        </button>
                        <figcaption
                          style={{
                            marginTop: "10px",
                            fontSize: "12px",
                            color: "var(--muted)",
                            textAlign: "center",
                            lineHeight: 1.5,
                          }}
                        >
                          {img.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── Attribution ───────────────────────────────────────────────── */}
      <section
        style={{
          padding: "48px 24px 72px",
          background: "var(--background)",
          borderTop: "1px solid rgba(74,124,89,0.15)",
        }}
      >
        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            textAlign: "center",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--muted)",
          }}
        >
          Prepared by{" "}
          <a
            href="https://marcanthonyrosa.com"
            style={{ color: "var(--accent)", textDecoration: "none" }}
          >
            Marc Anthony Rosa
          </a>
          {" "}· March 2026
        </div>
      </section>
    </>
  );
}
