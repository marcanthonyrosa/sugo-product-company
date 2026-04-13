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
    shortDescription: "Validate the problem before you build.",
    fullDescription:
      "Stress-test the problem with AI-led research and user simulation so you don’t ship something nobody needs.",
    whatWeDo: [
      "Simulate user conversations to see if the pain is real",
      "Use AI to surface blind spots and competitor context fast",
    ],
    tools: ["Claude", "Perplexity", "ChatPRD"],
    whyItMatters: "Skipping this is how teams build the wrong thing confidently.",
    furtherReading: [
      { label: "Strategy Blocks: An operator's guide to product strategy", url: "https://www.lennysnewsletter.com/p/strategy-blocks-an-operators-guide" },
    ],
  },
  {
    number: 2,
    title: "Write the plan",
    category: "strategy",
    shortDescription: "One page: problem, scope, success, audience.",
    fullDescription:
      "AI drafts; we refine a single source of truth—problem, out-of-scope, metrics, and users.",
    whatWeDo: [
      "Turn a rough idea into a tight written plan",
      "Reconcile the plan with Step 1 so bets stay coherent",
    ],
    tools: ["ChatPRD", "Claude", "WriteMyPRD"],
    whyItMatters: "This page steers every later decision—get it crisp early.",
    furtherReading: [
      { label: "How AI will impact product management", url: "https://www.lennysnewsletter.com/p/how-ai-will-impact-product-management" },
    ],
  },
  {
    number: 3,
    title: "Technical blueprint",
    category: "design",
    shortDescription: "Structure before code: data, boundaries, flows.",
    fullDescription:
      "Translate the plan into architecture—what to store, how pieces connect, and key tradeoffs—before build starts.",
    whatWeDo: [
      "Produce a technical design doc from the plan",
      "Document major boundaries and why they exist",
    ],
    tools: ["Claude Code", "Cursor", "v0"],
    whyItMatters: "Cheap to change on paper; expensive to unwind mid-build.",
    furtherReading: [
      { label: "How to build AI product sense", url: "https://www.lennysnewsletter.com/p/how-to-build-ai-product-sense" },
    ],
  },
  {
    number: 4,
    title: "Mockups & visual prototypes",
    category: "design",
    shortDescription: "Clickable flows before engineering commits.",
    fullDescription:
      "Ship interactive prototypes from the plan so stakeholders align on what “it” is early.",
    whatWeDo: [
      "Generate clickable prototypes with AI design tools",
      "Walk stakeholders through to kill ambiguity pre-build",
    ],
    tools: ["Lovable", "Bolt", "v0", "Magic Patterns", "Gamma", "Figma"],
    whyItMatters: "Clicks surface misunderstandings decks hide.",
    furtherReading: [
      { label: "A guide to AI prototyping for product managers", url: "https://www.lennysnewsletter.com/p/a-guide-to-ai-prototyping-for-product" },
    ],
  },
  {
    number: 5,
    title: "Build the product",
    category: "build",
    shortDescription: "Plan → working software, fast iteration.",
    fullDescription:
      "Use AI coding tools against the plan; experiment, cut losers, double winners—most shops stop at mockups.",
    whatWeDo: [
      "Brief AI coding tools from the written plan",
      "Iterate in small loops instead of a rigid assembly line",
    ],
    tools: ["Claude Code", "Cursor", "Bolt", "Lovable", "Replit"],
    whyItMatters: "Cheap experiments beat big bets on the wrong path.",
    furtherReading: [
      { label: "The complete beginner's guide to coding with AI", url: "https://www.lennysnewsletter.com/p/the-complete-beginners-guide-to-coding" },
    ],
  },
  {
    number: 6,
    title: "Quality testing",
    category: "build",
    isAISpecific: true,
    shortDescription: "Prove quality—especially for AI outputs.",
    fullDescription:
      "Replace vibes with tests: accuracy, consistency, tone—and monitoring so regressions surface early.",
    whatWeDo: [
      "Define pass/fail checks for outputs (incl. AI features)",
      "Instrument monitoring for live quality drift",
    ],
    tools: ["Arize", "PostHog", "custom eval suites"],
    whyItMatters: "Hope isn’t a QA strategy.",
    furtherReading: [
      { label: "Beyond vibe checks: A PM's complete guide to evals", url: "https://www.lennysnewsletter.com/p/beyond-vibe-checks-a-pms-complete" },
    ],
  },
  {
    number: 7,
    title: "Launch & growth",
    category: "ship",
    shortDescription: "Ship, measure, learn—day one.",
    fullDescription:
      "Launch with analytics on, decisions logged, and notes feeding the record—go-live is the start line.",
    whatWeDo: [
      "Instrument before launch for real usage signal",
      "Keep a written trail of shipping calls and rationale",
    ],
    tools: ["PostHog", "Linear", "Granola", "Resend"],
    whyItMatters: "You can’t improve what you don’t measure.",
  },
  {
    number: 8,
    title: "Learn & repeat",
    category: "ship",
    shortDescription: "Loop the process with better data each time.",
    fullDescription:
      "Run the cycle again with what worked, what didn’t, and sharper AI boundaries—each lap gets faster.",
    whatWeDo: [
      "Re-enter Step 1 with usage and test results",
      "Tighten bets on what AI handles well vs. not",
    ],
    tools: ["Claude Code", "Cursor", "evals feedback loop"],
    whyItMatters: "Compounding process beats one-off heroics.",
    furtherReading: [
      { label: "Build your personal AI copilot", url: "https://www.lennysnewsletter.com/p/build-your-personal-ai-copilot" },
    ],
  },
];
