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
    shortDescription: "Understand the real problem before jumping to solutions.",
    fullDescription: "We start by making sure we're solving the right problem. We use AI to ask tough questions, poke holes in assumptions, and research what's already out there — so we don't waste time building the wrong thing.",
    whatWeDo: [
      "Simulate conversations with potential users to stress-test whether the problem is real",
      "Use AI to challenge our thinking and surface risks we might have missed",
      "Research the market and competitors so every decision is grounded in evidence",
    ],
    tools: ["Claude", "Perplexity", "ChatPRD"],
    whyItMatters: "Most projects fail because they skip this step and jump straight to building something nobody needs.",
    furtherReading: [
      { label: "Strategy Blocks: An operator's guide to product strategy", url: "https://www.lennysnewsletter.com/p/strategy-blocks-an-operators-guide" },
    ],
  },
  {
    number: 2,
    title: "Write the plan",
    category: "strategy",
    shortDescription: "A short, clear document that defines what we're building and why.",
    fullDescription: "We write a simple one-page plan — not a long, bloated document — that spells out the problem, what success looks like, what we're not building, and who it's for. AI writes the first draft; we sharpen it into the single source of truth for the whole project.",
    whatWeDo: [
      "Use AI to turn a rough idea into a complete written plan",
      "Boil it down to one page: the problem, what's out of scope, how we'll measure success, and who the users are",
      "Check the plan against the strategy from Step 1 to make sure everything lines up",
    ],
    tools: ["ChatPRD", "Claude", "WriteMyPRD"],
    whyItMatters: "This one document drives every decision that follows — getting it right up front saves weeks of wasted effort later.",
    furtherReading: [
      { label: "How AI will impact product management", url: "https://www.lennysnewsletter.com/p/how-ai-will-impact-product-management" },
    ],
  },
  {
    number: 3,
    title: "Technical blueprint",
    category: "design",
    shortDescription: "The plan becomes a technical blueprint — how the product will actually work under the hood.",
    fullDescription: "We turn the written plan into a technical blueprint: what data the product needs, how the pieces connect, and how users will interact with it. This step is about making the big structural decisions before anyone starts building.",
    whatWeDo: [
      "Use AI to turn the plan into a technical design document",
      "Map out the major building blocks — what data is stored, how components talk to each other, and where the boundaries are",
      "Document key decisions and tradeoffs so the team knows why things are built a certain way",
    ],
    tools: ["Claude Code", "Cursor", "v0"],
    whyItMatters: "Decisions made early — even rough ones — save weeks of rework once building has started.",
    furtherReading: [
      { label: "How to build AI product sense", url: "https://www.lennysnewsletter.com/p/how-to-build-ai-product-sense" },
    ],
  },
  {
    number: 4,
    title: "Mockups & visual prototypes",
    category: "design",
    shortDescription: "Clickable prototypes you can see and interact with — before any real building begins.",
    fullDescription: "We create clickable, visual versions of the product from the plan or rough sketches. You and your stakeholders can see and interact with these before we commit to building the real thing.",
    whatWeDo: [
      "Turn the written plan into an interactive, clickable prototype using AI design tools",
      "Generate reusable visual building blocks and design patterns",
      "Walk stakeholders through the prototype so everyone is aligned before building starts",
    ],
    tools: ["Lovable", "Bolt", "v0", "Magic Patterns", "Gamma", "Figma"],
    whyItMatters: "Showing people something they can click on early prevents the kind of misunderstandings that waste months down the line.",
    furtherReading: [
      { label: "A guide to AI prototyping for product managers", url: "https://www.lennysnewsletter.com/p/a-guide-to-ai-prototyping-for-product" },
    ],
  },
  {
    number: 5,
    title: "Build the product",
    category: "build",
    shortDescription: "The plan becomes working software. This is where it gets real.",
    fullDescription: "We feed the plan directly into AI coding tools that generate working software. We move fast, test ideas quickly, and don't hesitate to change direction. Most consultants stop at the prototype. We actually build the thing.",
    whatWeDo: [
      "Use the written plan as a direct brief for AI coding tools that write real software",
      "Move fast — try things quickly, drop what doesn't work, double down on what does",
      "Treat building as a series of quick experiments, not a rigid, step-by-step assembly line",
    ],
    tools: ["Claude Code", "Cursor", "Bolt", "Lovable", "Replit"],
    whyItMatters: "The ability to try ideas quickly and cheaply is the biggest advantage. Changing direction costs almost nothing.",
    furtherReading: [
      { label: "The complete beginner's guide to coding with AI", url: "https://www.lennysnewsletter.com/p/the-complete-beginners-guide-to-coding" },
      { label: "Everyone should be using Claude Code more", url: "https://www.lennysnewsletter.com/p/everyone-should-be-using-claude-code" },
    ],
  },
  {
    number: 6,
    title: "Quality testing",
    category: "build",
    isAISpecific: true,
    shortDescription: "Structured tests to make sure the product works correctly, consistently, and on-brand.",
    fullDescription: "This is what separates a polished product from a rough demo. We write clear tests that check whether the product (especially any AI-powered features) gives correct, consistent, and on-brand results — and we set up monitoring so we know if quality drops after launch.",
    whatWeDo: [
      "Write test cases that check the product's outputs for accuracy, consistency, and tone of voice",
      "Replace gut-feel quality checks with clear pass/fail criteria",
      "Set up monitoring tools so we can spot quality issues in the live product before users do",
    ],
    tools: ["Arize", "PostHog", "custom eval suites"],
    whyItMatters: "Without structured testing, you're hoping the product works rather than knowing it does.",
    furtherReading: [
      { label: "Beyond vibe checks: A PM's complete guide to evals", url: "https://www.lennysnewsletter.com/p/beyond-vibe-checks-a-pms-complete" },
      { label: "Why AI evals are the hottest new skill for product builders", url: "https://www.lennysnewsletter.com/p/why-ai-evals-are-the-hottest-new-skill" },
    ],
  },
  {
    number: 7,
    title: "Launch & growth",
    category: "ship",
    shortDescription: "Put it in front of real users — and measure what happens.",
    fullDescription: "We launch the product and immediately start tracking how people use it. We log every decision, capture meeting notes, and pipe everything back into the product. Launching is not the finish line — it's the starting line.",
    whatWeDo: [
      "Set up tracking and analytics before launch so we can measure from day one",
      "Keep a written record of every shipping decision so nothing gets lost",
      "Capture meeting notes and feed key decisions back into the project record",
    ],
    tools: ["PostHog", "Linear", "Granola", "Resend"],
    whyItMatters: "Launching without measuring is just guessing. You can only grow what you can see.",
  },
  {
    number: 8,
    title: "Learn & repeat",
    category: "ship",
    shortDescription: "Take what we learned and run the whole process again — smarter and faster each time.",
    fullDescription: "The process loops back to the beginning — but now we know more. Every round builds on the last: what worked, what didn't, and what AI can realistically handle. Each cycle gets faster and more precise.",
    whatWeDo: [
      "Run through the full process again, informed by everything we learned in the previous round",
      "Develop a sharper sense of what AI can and can't do well, so we make better bets each time",
      "Feed test results and usage data back into Step 1 to refine the next version of the problem",
    ],
    tools: ["Claude Code", "Cursor", "evals feedback loop"],
    whyItMatters: "Teams that repeat this cycle get faster every time. Teams that don't fall behind.",
    furtherReading: [
      { label: "Build your personal AI copilot", url: "https://www.lennysnewsletter.com/p/build-your-personal-ai-copilot" },
    ],
  },
];
