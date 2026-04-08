"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Phase, CATEGORY_VARS } from "@/lib/phases";
import ToolBadge from "./ToolBadge";
import { PhaseVisual } from "./PhaseVisual";

interface PhaseAccordionProps {
  phases: Phase[];
}

export default function PhaseAccordion({ phases }: PhaseAccordionProps) {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  function toggle(num: number) {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(num)) {
        next.delete(num);
      } else {
        next.add(num);
      }
      return next;
    });
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {phases.map((phase) => {
        const isOpen = openSet.has(phase.number);
        const vars = CATEGORY_VARS[phase.category];

        return (
          <div
            key={phase.number}
            style={{
              border: "0.5px solid var(--border)",
              borderLeft: `2px solid ${vars.border}`,
              borderRadius: "12px",
              overflow: "hidden",
              background: "var(--background)",
            }}
          >
            {/* Trigger */}
            <button
              onClick={() => toggle(phase.number)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "16px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              {/* Number circle */}
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
                }}
              >
                {phase.number}
              </span>

              <span style={{ flex: 1, display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
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
              </span>

              <ChevronDown
                size={16}
                style={{
                  color: "var(--muted)",
                  flexShrink: 0,
                  transition: "transform var(--transition)",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {/* Collapsible content */}
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
                    display: "flex",
                    gap: "20px",
                    padding: "20px 16px 20px 58px",
                    borderTop: "0.5px solid var(--border)",
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

                  {/* Tools */}
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
                      Tools we use
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {phase.tools.map((tool) => (
                        <ToolBadge key={tool} label={tool} />
                      ))}
                    </div>
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
                              className="accordion-reading-link"
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
        );
      })}

      <style>{`
        .accordion-reading-link:hover { opacity: 0.75; }

        @media (max-width: 640px) {
          .phase-visual-panel {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
