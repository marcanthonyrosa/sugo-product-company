export type PhaseCategory = 'strategy' | 'design' | 'build' | 'ship';

export interface FurtherReading {
  label: string;
  url: string;
}

export interface Phase {
  number: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  whatWeDo: string[];
  tools: string[];
  whyItMatters: string;
  furtherReading?: FurtherReading[];
  category: PhaseCategory;
  isAISpecific?: boolean;
}

export const CATEGORY_META: Record<PhaseCategory, { label: string }> = {
  strategy: { label: 'Strategy & spec' },
  design:   { label: 'Design & architecture' },
  build:    { label: 'Build & test' },
  ship:     { label: 'Ship & learn' },
};

/** CSS variable references — auto-handled via globals.css for light/dark */
export const CATEGORY_VARS: Record<PhaseCategory, { border: string; bg: string; text: string }> = {
  strategy: { border: 'var(--cat-strategy-border)', bg: 'var(--cat-strategy-bg)', text: 'var(--cat-strategy-text)' },
  design:   { border: 'var(--cat-design-border)',   bg: 'var(--cat-design-bg)',   text: 'var(--cat-design-text)'   },
  build:    { border: 'var(--cat-build-border)',     bg: 'var(--cat-build-bg)',     text: 'var(--cat-build-text)'   },
  ship:     { border: 'var(--cat-ship-border)',       bg: 'var(--cat-ship-bg)',       text: 'var(--cat-ship-text)'   },
};

export const phases: Phase[] = [
  {
    number: 1,
    title: "Problem discovery & strategy",
    category: "strategy",
    shortDescription: "Define the problem before touching a single tool.",
    fullDescription: "We define the problem before touching a single tool. Using Claude to stress-test assumptions, simulate user interviews, and challenge the framing — grounded in the strategic hierarchy: Mission → Vision → Strategy → Goals → Roadmap → Task.",
    whatWeDo: [
      "Run AI-simulated user interviews to pressure-test the problem statement",
      "Use Claude to challenge assumptions and identify blind spots before any solution work begins",
      "Synthesize market research with Perplexity to ground the problem in real data",
    ],
    tools: ["Claude", "Perplexity", "ChatPRD"],
    whyItMatters: "Most AI-assisted builds fail because they skip this step and jump straight to building.",
    furtherReading: [
      { label: "Strategy Blocks: An operator's guide to product strategy", url: "https://www.lennysnewsletter.com/p/strategy-blocks-an-operators-guide" },
    ],
  },
  {
    number: 2,
    title: "PRD & 1-pager",
    category: "strategy",
    shortDescription: "A tight 1-pager capturing problem, non-goals, success criteria, and user stories.",
    fullDescription: "A tight 1-pager — not a 20-page spec — capturing problem statement, non-goals, success criteria, and user stories. AI generates the first draft; we refine it into the north star for every downstream decision.",
    whatWeDo: [
      "Draft a complete PRD from a raw idea using ChatPRD or Claude",
      "Tighten to Lenny's 1-pager format: problem, non-goals, success criteria, user stories",
      "Validate the spec against the strategic hierarchy established in Phase 1",
    ],
    tools: ["ChatPRD", "Claude", "WriteMyPRD"],
    whyItMatters: "The PRD is the single document every downstream phase flows from — getting it right saves weeks.",
    furtherReading: [
      { label: "How AI will impact product management", url: "https://www.lennysnewsletter.com/p/how-ai-will-impact-product-management" },
    ],
  },
  {
    number: 3,
    title: "Architecture & technical design",
    category: "design",
    shortDescription: "The PRD becomes a system design — data models, API surface, component breakdown.",
    fullDescription: "The PRD becomes a system design document — data models, API surface, component breakdown. This phase is about making decisions, not writing code yet.",
    whatWeDo: [
      "Generate a system design doc using Claude Code or Cursor, seeded by the PRD",
      "Define the data model, API surface, and major component boundaries",
      "Document architectural decisions and tradeoffs before any code is written",
    ],
    tools: ["Claude Code", "Cursor", "v0"],
    whyItMatters: "Architectural decisions made early — even rough ones — save weeks of rework after the build has started.",
    furtherReading: [
      { label: "How to build AI product sense", url: "https://www.lennysnewsletter.com/p/how-to-build-ai-product-sense" },
    ],
  },
  {
    number: 4,
    title: "Mockups & design prototyping",
    category: "design",
    shortDescription: "Working visual prototypes validated with stakeholders before any production code is written.",
    fullDescription: "Working visual prototypes generated from the PRD or rough sketches — validated with stakeholders before a line of production code is written.",
    whatWeDo: [
      "Convert PRD into interactive prototype using Lovable, Bolt, or v0",
      "Generate UI component libraries and design patterns with Magic Patterns",
      "Present prototypes to stakeholders for alignment before committing to build",
    ],
    tools: ["Lovable", "Bolt", "v0", "Magic Patterns", "Gamma", "Figma"],
    whyItMatters: "Showing stakeholders something real early eliminates misalignment that would otherwise surface after months of build time.",
    furtherReading: [
      { label: "A guide to AI prototyping for product managers", url: "https://www.lennysnewsletter.com/p/a-guide-to-ai-prototyping-for-product" },
    ],
  },
  {
    number: 5,
    title: "Build & vibe code",
    category: "build",
    shortDescription: "The PRD feeds directly into Claude Code to generate working code. We ship.",
    fullDescription: "The PRD feeds directly into Claude Code or Lovable to generate working code. Rapid iteration, fast pivots, no sunk-cost guilt. Most consultants stop at Phase 4. We ship.",
    whatWeDo: [
      "Feed the Phase 2 PRD directly into Claude Code as the build brief",
      "Iterate rapidly — test things quickly, kill what doesn't work, double down on what does",
      "Treat the build as a series of fast experiments, not a linear waterfall",
    ],
    tools: ["Claude Code", "Cursor", "Bolt", "Lovable", "Replit"],
    whyItMatters: "Speed of iteration is the unfair advantage. Vibe coding with AI makes pivots cheap.",
    furtherReading: [
      { label: "The complete beginner's guide to coding with AI", url: "https://www.lennysnewsletter.com/p/the-complete-beginners-guide-to-coding" },
      { label: "Everyone should be using Claude Code more", url: "https://www.lennysnewsletter.com/p/everyone-should-be-using-claude-code" },
    ],
  },
  {
    number: 6,
    title: "Evals & quality testing",
    category: "build",
    isAISpecific: true,
    shortDescription: "Systematic test cases that measure LLM output quality, consistency, and brand alignment.",
    fullDescription: "The phase that separates disciplined AI builders from lucky ones. We write systematic test cases that measure LLM output quality, consistency, and brand alignment — replacing traditional QA for AI features.",
    whatWeDo: [
      "Write eval suites that test AI outputs for correctness, consistency, and tone",
      "Move from 'vibes' to systematic quality measurement with defined pass/fail criteria",
      "Instrument the product with observability tooling to monitor AI output quality in production",
    ],
    tools: ["Arize", "PostHog", "custom eval suites"],
    whyItMatters: "Evals are the new PRDs — this is the defining skill for serious AI product builders in 2025 and beyond.",
    furtherReading: [
      { label: "Beyond vibe checks: A PM's complete guide to evals", url: "https://www.lennysnewsletter.com/p/beyond-vibe-checks-a-pms-complete" },
      { label: "Why AI evals are the hottest new skill for product builders", url: "https://www.lennysnewsletter.com/p/why-ai-evals-are-the-hottest-new-skill" },
    ],
  },
  {
    number: 7,
    title: "Launch & growth",
    category: "ship",
    shortDescription: "Ship decisions tracked in Linear. Analytics in PostHog. Launch is the starting gun.",
    fullDescription: "Ship decisions tracked in Linear. Analytics in PostHog. Meeting intelligence in Granola. Everything feeds back into the product — launch is not the finish line, it's the starting gun.",
    whatWeDo: [
      "Set up analytics instrumentation (PostHog) before launch, not after",
      "Track all shipping decisions and rollbacks in Linear for institutional memory",
      "Use Granola to capture meeting notes and feed decisions back into the product record",
    ],
    tools: ["PostHog", "Linear", "Granola", "Resend"],
    whyItMatters: "A launch without measurement is just a deployment. Growth requires knowing what's working.",
  },
  {
    number: 8,
    title: "Iteration loop & AI product sense",
    category: "ship",
    shortDescription: "The loop closes and restarts — with compounding intuition about what AI can and can't do.",
    fullDescription: "The loop closes and restarts — with compounding intuition about what AI can and can't do. Every iteration makes the next one faster. This is what separates good AI product builders from great ones.",
    whatWeDo: [
      "Run the full cycle again with everything learned from the previous iteration",
      "Build genuine AI product sense — intuition about what AI will and won't do reliably",
      "Feed eval results and analytics back into Phase 1 to sharpen the next problem statement",
    ],
    tools: ["Claude Code", "Cursor", "evals feedback loop"],
    whyItMatters: "The teams who build this muscle compound it. The teams who don't get lapped.",
    furtherReading: [
      { label: "Build your personal AI copilot", url: "https://www.lennysnewsletter.com/p/build-your-personal-ai-copilot" },
    ],
  },
];
