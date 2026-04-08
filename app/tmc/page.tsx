import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import SectionLabel from "@/components/section-label";
import ProductTableToggle from "@/components/product-table-toggle";

export const metadata: Metadata = {
  title: "Product Benefits — TMC × Sugo",
  description:
    "Org-wide impact summary: 6 deployed software products, ~$1.5M equiv. headcount value automated, 3 teams benefiting across Innovation, Comms, and Fund.",
};

/* ── Data ──────────────────────────────────────────────────────────────── */

interface Metric {
  label: string;
  value: string;
  note?: string;
  tags?: { text: string; variant: "innovation" | "comms" }[];
}

const metrics: Metric[] = [
  {
    label: "Software products",
    value: "6",
    note: "Across portfolio intelligence, marketing, ops, and pipeline",
  },
  {
    label: "Savings + revenue",
    value: "$550K–$960K",
    note: "Conservative–aggressive range",
  },
  {
    label: "Benefitting functions",
    value: "4",
    tags: [
      { text: "Innovation", variant: "innovation" },
      { text: "Venture Fund", variant: "innovation" },
      { text: "Comms", variant: "comms" },
      { text: "Development", variant: "comms" },
    ],
  },
];

type BenefitColor = "teal" | "purple" | "amber";

interface Benefit {
  color: BenefitColor;
  title: string;
  body: string;
  pill?: { label: string; variant: "green" | "blue" | "amber" };
}

interface Product {
  num: string;
  slug: string;
  name: string;
  tag: string;
  benefits: Benefit[];
}

const products: Product[] = [
  {
    num: "01",
    slug: "portfolio-intelligence-platform",
    name: "Portfolio intelligence platform",
    tag: "Tom Luby · Innovation + Venture Fund",
    benefits: [
      {
        color: "teal",
        title: "Scales a 500-company network",
        body: "without adding headcount. Today this is a manual, unsustainable process for Tom\u2019s team \u2014 the platform automates surveillance on funding, hiring, and milestone signals across the entire portfolio automatically.",
      },
      {
        color: "teal",
        title: "Improves investment timing",
        body: "by surfacing companies 12\u201318 months early \u2014 before they\u2019re ready for a traditional conversation, but with enough signal to warm a relationship now.",
      },
      {
        color: "teal",
        title: "Drives Houston ecosystem density.",
        body: 'The \u201Cmagic\u201D network introduction experience \u2014 matching companies to TMC faculty, labs, and partners \u2014 creates the FOMO effect that makes Houston a destination, not a fallback.',
      },
    ],
  },
  {
    num: "02",
    slug: "social-media-marketing-automation",
    name: "Social media & marketing automation",
    tag: "Bill McKeon · Communications + Talent + Brand",
    benefits: [
      {
        color: "purple",
        title: "Makes hiring materially easier.",
        body: "A consistently active, high-signal TMC presence \u2014 conference coverage, portfolio milestones, founder stories \u2014 is employer brand at scale. Candidates who see TMC as a vibrant ecosystem are warmer before the first conversation.",
        pill: { label: "Talent acquisition", variant: "blue" },
      },
      {
        color: "purple",
        title: "Recruits stronger portfolio companies.",
        body: 'Founders choose accelerators partly based on visibility and community. Automated content that celebrates portfolio milestones \u2014 \u201CRemember Motif when they were early days, now they\u2019ve raised $18.7M\u201D \u2014 is a live proof-of-value signal to incoming companies.',
        pill: { label: "Pipeline quality", variant: "blue" },
      },
      {
        color: "purple",
        title: "Retains employees by amplifying their work.",
        body: "Staff whose contributions are regularly visible externally feel more recognized and connected to the mission. Internal digital boards become a real-time activity feed, not a static event calendar.",
        pill: { label: "Retention", variant: "blue" },
      },
      {
        color: "purple",
        title: "10x marketing output without additional headcount.",
        body: "Pre-created conference content, automated post-event reflections, and scheduled posts replace dozens of hours of manual coordination per month across Innovation and Comms.",
        pill: { label: "Cost avoidance", variant: "green" },
      },
    ],
  },
  {
    num: "03",
    slug: "strategic-business-intelligence",
    name: "Strategic business intelligence",
    tag: "Bill McKeon · Fund + Business Development",
    benefits: [
      {
        color: "amber",
        title: "Replaces 2 research analysts",
        body: "running venture partner surveillance, pre-travel briefing prep, VC identification ahead of conferences like LSI, and competitive landscape monitoring. At $120\u2013$150K each, that\u2019s $240K\u2013$300K in annual headcount avoided at higher throughput.",
        pill: { label: "~$240\u2013300K saved", variant: "green" },
      },
      {
        color: "amber",
        title: "Produces better diligence",
        body: "on incoming decks \u2014 Japanese, Korean, and European companies \u2014 by running structured analysis, rack-and-stack comparisons, and clinical trial context before it hits Tom\u2019s desk. Less noise, better signal.",
        pill: { label: "Diligence quality", variant: "amber" },
      },
      {
        color: "amber",
        title: "Drives sponsorship revenue",
        body: "through budget tracking and sponsor identification \u2014 the agent surfaces likely candidates, enables targeted outreach, and feeds the social media automation pipeline to build awareness before the ask.",
      },
    ],
  },
  {
    num: "04",
    slug: "program-operations-diligence-automation",
    name: "Program operations & diligence automation",
    tag: "Tom Luby · Accelerator + Program teams",
    benefits: [
      {
        color: "teal",
        title: "Eliminates the program manager coordination tax.",
        body: "Today Megan manually coordinates contracting, CRM, scheduling, events, and reporting across 6\u20139 month programs. Automation handles the routine \u2014 she handles the judgment calls.",
      },
      {
        color: "teal",
        title: "Scales the Netherlands accelerator model",
        body: "without scaling the team. The same tooling that runs one program runs three \u2014 standardizing the operational playbook across geographies and cohorts.",
        pill: { label: "Org scalability", variant: "green" },
      },
      {
        color: "teal",
        title: "Surfaces licensing opportunities passively",
        body: "through automated technology transfer website scraping \u2014 a revenue channel that currently requires manual monitoring to capture.",
      },
    ],
  },
  {
    num: "05",
    slug: "eir-talent-pipeline",
    name: "EIR talent pipeline",
    tag: "Tom Luby · Venture Studio + T Labs",
    benefits: [
      {
        color: "purple",
        title: "Builds a continuously refreshed candidate pool",
        body: "of seasoned med-device and therapeutics executives \u2014 PhD-level profiles who can hunt for technology and spin out companies \u2014 without a standing recruiter or executive search firm.",
      },
      {
        color: "purple",
        title: "Strengthens the Venture Studio pipeline",
        body: "by combining EIR identification with portfolio intelligence \u2014 surfacing which med-device companies are ready to come into T Labs and which executives are the right match for them.",
      },
    ],
  },
  {
    num: "06",
    slug: "philanthropic-investment-intelligence",
    name: "Philanthropic investment intelligence",
    tag: "Bill McKeon · Foundation + Development",
    benefits: [
      {
        color: "amber",
        title: "Tracks Houston\u2019s philanthropic community",
        body: "\u2014 Brown Foundation, Kinder Foundation, and others \u2014 surfacing giving cycles, board connections, and investment appetite before outreach. The Russell Franklin dinner is the right example: prep that used to take days takes minutes.",
      },
      {
        color: "amber",
        title: "Enables Program Related Investment (PRI) positioning.",
        body: "The IRS-approved structure that lets foundations count early-stage investments toward their 5% giving requirement is an underused channel. A tool that identifies foundations with capacity and surfaces the right moment to introduce the concept could unlock meaningful non-dilutive capital.",
        pill: { label: "Capital strategy", variant: "amber" },
      },
    ],
  },
];

/* ── Color maps ────────────────────────────────────────────────────────── */

const dotColors: Record<BenefitColor, { bg: string; dot: string }> = {
  teal:   { bg: "var(--cat-design-bg)",   dot: "var(--cat-design-text)" },
  purple: { bg: "var(--cat-strategy-bg)", dot: "var(--cat-strategy-text)" },
  amber:  { bg: "var(--cat-build-bg)",    dot: "var(--cat-build-text)" },
};

const pillStyles: Record<string, { background: string; color: string }> = {
  green: { background: "#EAF3DE", color: "#27500A" },
  blue:  { background: "#E6F1FB", color: "#0C447C" },
  amber: { background: "#FAEEDA", color: "#633806" },
};

/* ── Page ──────────────────────────────────────────────────────────────── */

export default function TmcBenefitsPage() {
  return (
    <>
      <style>{`
        @media (prefers-color-scheme: dark) {
          .pill-green { background: #1a2e10 !important; color: #b2d98c !important; }
          .pill-blue  { background: #0c2744 !important; color: #8ec5f0 !important; }
          .pill-amber { background: #2C1F08 !important; color: #F5B850 !important; }
          .ptt-team-innovation { background: #0d2e22 !important; color: #6fcfa5 !important; }
          .ptt-team-comms { background: #1c1a3a !important; color: #b0a8e8 !important; }
        }
        @media (max-width: 640px) {
          .benefits-summary-grid { grid-template-columns: 1fr !important; }
        }
        .tmc-deep-dive-toggle summary::-webkit-details-marker { display: none; }
        .tmc-deep-dive-toggle[open] .tmc-chevron { transform: rotate(180deg); }
        .tmc-deep-dive-toggle .tmc-chevron {
          transition: transform 160ms ease;
        }
      `}</style>

      <section
        style={{
          padding: "var(--section-pad-y) 24px",
          background: "var(--background)",
        }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div id="portfolio-overview" style={{ marginBottom: "40px" }}>
            <Reveal delay={0}>
              <SectionLabel label="Portfolio overview" />
            </Reveal>
            <Reveal delay={20}>
              <p
                style={{
                  margin: "4px 0 18px",
                  fontSize: "13px",
                  color: "var(--muted)",
                  lineHeight: 1.5,
                }}
              >
                Snapshot of org-level KPI performance and the project portfolio.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <div
                className="benefits-summary-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: "10px",
                  marginBottom: "22px",
                }}
              >
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    style={{
                      background: "var(--card-surface)",
                      border: "0.5px solid var(--border)",
                      borderRadius: "var(--radius)",
                      padding: "16px 18px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "12px",
                        color: "var(--muted)",
                        marginBottom: "6px",
                      }}
                    >
                      {m.label}
                    </div>
                    <div
                      style={{
                        fontSize: "22px",
                        fontWeight: 500,
                        color: "var(--foreground)",
                        lineHeight: 1.1,
                      }}
                    >
                      {m.value}
                    </div>
                    {m.note && (
                      <div
                        style={{
                          fontSize: "11px",
                          color: "var(--muted)",
                          marginTop: "5px",
                          lineHeight: 1.4,
                        }}
                      >
                        {m.note}
                      </div>
                    )}
                    {m.tags && (
                      <div style={{ marginTop: "5px" }}>
                        {m.tags.map((tag) => (
                          <span
                            key={tag.text}
                            className={
                              tag.variant === "innovation"
                                ? "ptt-team-innovation"
                                : "ptt-team-comms"
                            }
                            style={{
                              display: "inline-block",
                              fontSize: "11px",
                              fontWeight: 500,
                              padding: "1px 7px",
                              borderRadius: "100px",
                              margin: "2px 2px 0 0",
                              ...(tag.variant === "innovation"
                                ? { background: "#E1F5EE", color: "#085041" }
                                : { background: "#EEEDFE", color: "#3C3489" }),
                            }}
                          >
                            {tag.text}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={70}>
              <div
                id="projects-table"
                style={{
                  background: "var(--card-surface)",
                  border: "0.5px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "12px",
                }}
              >
                <ProductTableToggle />
              </div>
            </Reveal>
          </div>

          <div
            id="project-deep-dives"
            style={{
              background: "color-mix(in srgb, var(--card-surface) 75%, var(--background))",
              border: "0.5px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              padding: "20px",
              marginTop: "52px",
            }}
          >
            <Reveal delay={100}>
              <SectionLabel label="Project deep dives" />
            </Reveal>
            <Reveal delay={120}>
              <p
                style={{
                  margin: "4px 0 16px",
                  fontSize: "13px",
                  color: "var(--muted)",
                  lineHeight: 1.5,
                }}
              >
                Expand each project to review detailed impact assumptions and value levers.
              </p>
            </Reveal>

            {products.map((product, i) => (
              <Reveal key={product.num} delay={140 + i * 60}>
                <details
                  id={`project-${product.slug}`}
                  className="tmc-deep-dive-toggle"
                  open={i === 0}
                  style={{
                    background: "var(--card-surface)",
                    border: "0.5px solid var(--border)",
                    borderRadius: "var(--radius-lg)",
                    marginBottom: "12px",
                    overflow: "hidden",
                  }}
                >
                  <summary
                    style={{
                      listStyle: "none",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "12px",
                      padding: "16px 20px",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: 500,
                          fontFamily: "var(--font-mono)",
                          color: "var(--muted)",
                          marginTop: "2px",
                          minWidth: "20px",
                        }}
                      >
                        {product.num}
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "15px",
                            fontWeight: 500,
                            color: "var(--foreground)",
                            marginBottom: "3px",
                          }}
                        >
                          {product.name}
                        </div>
                        <div style={{ fontSize: "11px", color: "var(--muted)" }}>
                          {product.tag}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "var(--muted)",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontSize: "11px" }}>
                        {product.benefits.length} points
                      </span>
                      <span className="tmc-chevron" aria-hidden="true">
                        ▾
                      </span>
                    </div>
                  </summary>

                  <div style={{ padding: "0 20px 14px", borderTop: "0.5px solid var(--border)" }}>
                    {product.benefits.map((benefit, j) => (
                      <div
                        key={benefit.title}
                        style={{
                          display: "flex",
                          gap: "10px",
                          padding: "11px 0",
                          borderBottom:
                            j < product.benefits.length - 1
                              ? "0.5px solid var(--border)"
                              : "none",
                          paddingBottom:
                            j === product.benefits.length - 1 ? "0" : "11px",
                        }}
                      >
                        <div
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            flexShrink: 0,
                            marginTop: "2px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: dotColors[benefit.color].bg,
                          }}
                        >
                          <div
                            style={{
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              background: dotColors[benefit.color].dot,
                            }}
                          />
                        </div>

                        <div
                          style={{
                            fontSize: "13px",
                            color: "var(--muted)",
                            lineHeight: 1.55,
                            flex: 1,
                          }}
                        >
                          <strong
                            style={{
                              fontWeight: 500,
                              color: "var(--foreground)",
                            }}
                          >
                            {benefit.title}
                          </strong>{" "}
                          {benefit.body}
                          {benefit.pill && (
                            <span
                              className={`pill-${benefit.pill.variant}`}
                              style={{
                                display: "inline-block",
                                fontSize: "11px",
                                fontWeight: 500,
                                padding: "2px 8px",
                                borderRadius: "100px",
                                marginLeft: "6px",
                                verticalAlign: "middle",
                                whiteSpace: "nowrap",
                                ...pillStyles[benefit.pill.variant],
                              }}
                            >
                              {benefit.pill.label}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
