"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Phase, CATEGORY_VARS } from "@/lib/phases";
import ToolBadge from "./ToolBadge";
import Reveal from "@/components/reveal";
import { PhaseVisual } from "./PhaseVisual";

interface PhaseCardProps {
  phase: Phase;
  delay?: number;
}

export default function PhaseCard({ phase, delay = 0 }: PhaseCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const vars = CATEGORY_VARS[phase.category];

  return (
    <Reveal delay={delay}>
      <div
        style={{
          background: "var(--card-surface)",
          border: "0.5px solid var(--border)",
          borderLeft: `2px solid ${vars.border}`,
          borderRadius: "12px",
          overflow: "hidden",
          transition: "border-color var(--transition)",
        }}
        className="phase-card"
      >
        {/* ── Card header (always visible) ────────────────────────────── */}
        <button
          onClick={() => setIsOpen((o) => !o)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Collapse phase details" : "Expand phase details"}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            gap: "14px",
            padding: "14px 16px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", flex: 1 }}>
            {/* Phase number circle */}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: vars.bg,
                color: vars.text,
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                fontWeight: 500,
                flexShrink: 0,
                marginTop: "1px",
              }}
            >
              {phase.number}
            </span>

            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Title row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  flexWrap: "wrap",
                  marginBottom: "6px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "var(--foreground)",
                    lineHeight: 1.4,
                  }}
                >
                  {phase.title}
                </span>
                {phase.isAISpecific && (
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      background: "var(--cat-build-bg)",
                      color: "var(--cat-build-text)",
                      border: "0.5px solid var(--cat-build-border)",
                      borderRadius: "20px",
                      padding: "2px 8px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    ★ AI-specific
                  </span>
                )}
              </div>

              {/* Short description */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "var(--foreground)",
                  opacity: 0.65,
                  margin: "0 0 10px",
                  lineHeight: 1.6,
                }}
              >
                {phase.shortDescription}
              </p>

              {/* Tool badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {phase.tools.map((tool) => (
                  <ToolBadge key={tool} label={tool} />
                ))}
              </div>
            </div>
          </div>

          <ChevronDown
            size={16}
            style={{
              color: "var(--muted)",
              flexShrink: 0,
              transition: "transform var(--transition)",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              marginTop: "6px",
            }}
          />
        </button>

        {/* ── Expandable deep-dive ─────────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateRows: isOpen ? "1fr" : "0fr",
            transition: "grid-template-rows 280ms ease",
          }}
        >
          <div style={{ overflow: "hidden" }}>
            <div
              style={{
                borderTop: "0.5px solid var(--border)",
                display: "flex",
                gap: "20px",
                padding: "20px 16px 20px 58px",
              }}
            >
              {/* Left: text content */}
              <div style={{ flex: 1, minWidth: 0 }}>
              {/* Full description */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "var(--foreground)",
                  opacity: 0.8,
                  lineHeight: 1.7,
                  margin: "0 0 20px",
                }}
              >
                {phase.fullDescription}
              </p>

              {/* What we do */}
              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: "10px",
                  }}
                >
                  What we do
                </div>
                <ul className="sage-list">
                  {phase.whatWeDo.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        color: "var(--foreground)",
                        opacity: 0.8,
                        lineHeight: 1.6,
                        marginBottom: "6px",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why it matters */}
              <div style={{ marginBottom: phase.furtherReading ? "20px" : 0 }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: "8px",
                  }}
                >
                  Why it matters
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    fontStyle: "italic",
                    color: "var(--foreground)",
                    opacity: 0.7,
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {phase.whyItMatters}
                </p>
              </div>

              {/* Further reading */}
              {phase.furtherReading && phase.furtherReading.length > 0 && (
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginBottom: "8px",
                    }}
                  >
                    Further reading
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
                    {phase.furtherReading.map((link) => (
                      <li key={link.url}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="phase-reading-link"
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "13px",
                            color: "var(--color-sage)",
                            textDecoration: "none",
                            lineHeight: 1.5,
                          }}
                        >
                          {link.label} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              </div>

              {/* Right: visual panel */}
              <div
                className="phase-visual-panel"
                style={{
                  flexShrink: 0,
                  width: "180px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--muted-bg, rgba(0,0,0,0.03))",
                  borderRadius: "12px",
                  border: "0.5px solid var(--border)",
                  padding: "12px",
                }}
              >
                <PhaseVisual phase={phase.number} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .phase-card:hover { border-color: var(--border); }
        .phase-reading-link:hover { opacity: 0.75; }

        @media (max-width: 640px) {
          .phase-card [style*="padding: 20px 16px 20px 58px"] {
            padding-left: 16px !important;
          }
          .phase-visual-panel {
            display: none !important;
          }
        }
      `}</style>
    </Reveal>
  );
}
