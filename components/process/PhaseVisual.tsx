// phase-visuals.tsx
// Drop these into /components/process/PhaseVisual.tsx
// Usage: <PhaseVisual phase={1} />

import type { JSX } from "react";

export function PhaseVisual({ phase }: { phase: number }) {
  const visuals: Record<number, JSX.Element> = {
    1: <Phase1 />,
    2: <Phase2 />,
    3: <Phase3 />,
    4: <Phase4 />,
    5: <Phase5 />,
    6: <Phase6 />,
    7: <Phase7 />,
    8: <Phase8 />,
  }
  return visuals[phase] ?? null
}

// ─── Phase 1: Problem discovery & strategy ───────────────────────────────────
// Visual: Strategic hierarchy pyramid (Mission → Vision → Strategy → Goals → Roadmap → Tasks)

function Phase1() {
  return (
    <svg viewBox="0 0 156 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect x="38" y="8" width="80" height="18" rx="4" fill="#EEEDFE" stroke="#AFA9EC" strokeWidth="0.5" />
      <text x="78" y="21" textAnchor="middle" fontSize="9" fill="#3C3489" fontFamily="sans-serif" fontWeight="500">Mission</text>
      <line x1="78" y1="26" x2="78" y2="34" stroke="#AFA9EC" strokeWidth="0.5" />
      <rect x="28" y="34" width="100" height="16" rx="4" fill="#EEEDFE" stroke="#AFA9EC" strokeWidth="0.5" />
      <text x="78" y="46" textAnchor="middle" fontSize="9" fill="#3C3489" fontFamily="sans-serif">Vision</text>
      <line x1="78" y1="50" x2="78" y2="58" stroke="#AFA9EC" strokeWidth="0.5" />
      <rect x="18" y="58" width="120" height="16" rx="4" fill="#EEEDFE" stroke="#AFA9EC" strokeWidth="0.5" />
      <text x="78" y="70" textAnchor="middle" fontSize="9" fill="#3C3489" fontFamily="sans-serif">Strategy</text>
      <line x1="78" y1="74" x2="78" y2="82" stroke="#AFA9EC" strokeWidth="0.5" />
      <rect x="10" y="82" width="136" height="16" rx="4" fill="#EEEDFE" stroke="#AFA9EC" strokeWidth="0.5" />
      <text x="78" y="94" textAnchor="middle" fontSize="9" fill="#3C3489" fontFamily="sans-serif">Goals</text>
      <line x1="78" y1="98" x2="78" y2="106" stroke="#AFA9EC" strokeWidth="0.5" />
      <rect x="2" y="106" width="152" height="16" rx="4" fill="#EEEDFE" stroke="#AFA9EC" strokeWidth="0.5" />
      <text x="78" y="118" textAnchor="middle" fontSize="9" fill="#3C3489" fontFamily="sans-serif">Roadmap → Tasks</text>
    </svg>
  )
}

// ─── Phase 2: PRD & 1-pager ──────────────────────────────────────────────────
// Visual: Structured document card with labelled sections

function Phase2() {
  return (
    <svg viewBox="0 0 156 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect x="20" y="8" width="116" height="124" rx="6" fill="#EEEDFE" stroke="#AFA9EC" strokeWidth="0.5" />
      <rect x="28" y="18" width="60" height="7" rx="2" fill="#AFA9EC" opacity="0.6" />
      <text x="28" y="36" fontSize="7" fill="#534AB7" fontFamily="sans-serif" fontWeight="500">Problem</text>
      <rect x="28" y="39" width="100" height="4" rx="1" fill="#AFA9EC" opacity="0.25" />
      <rect x="28" y="45" width="80" height="4" rx="1" fill="#AFA9EC" opacity="0.25" />
      <text x="28" y="62" fontSize="7" fill="#534AB7" fontFamily="sans-serif" fontWeight="500">Non-goals</text>
      <rect x="28" y="65" width="90" height="4" rx="1" fill="#AFA9EC" opacity="0.25" />
      <rect x="28" y="71" width="60" height="4" rx="1" fill="#AFA9EC" opacity="0.25" />
      <text x="28" y="88" fontSize="7" fill="#534AB7" fontFamily="sans-serif" fontWeight="500">Success criteria</text>
      <rect x="28" y="91" width="50" height="4" rx="1" fill="#AFA9EC" opacity="0.4" />
      <rect x="82" y="91" width="40" height="4" rx="1" fill="#AFA9EC" opacity="0.4" />
      <rect x="28" y="97" width="70" height="4" rx="1" fill="#AFA9EC" opacity="0.4" />
      <text x="28" y="114" fontSize="7" fill="#534AB7" fontFamily="sans-serif" fontWeight="500">User stories</text>
      <rect x="28" y="117" width="94" height="4" rx="1" fill="#AFA9EC" opacity="0.25" />
      <rect x="28" y="123" width="70" height="4" rx="1" fill="#AFA9EC" opacity="0.25" />
    </svg>
  )
}

// ─── Phase 3: Architecture & technical design ─────────────────────────────────
// Visual: System layers diagram (UI → API → DB + External APIs)

function Phase3() {
  return (
    <svg viewBox="0 0 156 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect x="50" y="8" width="56" height="24" rx="4" fill="#E1F5EE" stroke="#5DCAA5" strokeWidth="0.5" />
      <text x="78" y="24" textAnchor="middle" fontSize="8" fill="#0F6E56" fontFamily="sans-serif" fontWeight="500">UI Layer</text>
      <line x1="78" y1="32" x2="78" y2="46" stroke="#5DCAA5" strokeWidth="0.5" strokeDasharray="3,2" />
      <rect x="50" y="46" width="56" height="24" rx="4" fill="#E1F5EE" stroke="#5DCAA5" strokeWidth="0.5" />
      <text x="78" y="62" textAnchor="middle" fontSize="8" fill="#0F6E56" fontFamily="sans-serif" fontWeight="500">API / Logic</text>
      <line x1="78" y1="70" x2="40" y2="86" stroke="#5DCAA5" strokeWidth="0.5" strokeDasharray="3,2" />
      <line x1="78" y1="70" x2="116" y2="86" stroke="#5DCAA5" strokeWidth="0.5" strokeDasharray="3,2" />
      <rect x="8" y="86" width="62" height="24" rx="4" fill="#E1F5EE" stroke="#5DCAA5" strokeWidth="0.5" />
      <text x="39" y="102" textAnchor="middle" fontSize="8" fill="#0F6E56" fontFamily="sans-serif" fontWeight="500">Database</text>
      <rect x="86" y="86" width="62" height="24" rx="4" fill="#E1F5EE" stroke="#5DCAA5" strokeWidth="0.5" />
      <text x="117" y="102" textAnchor="middle" fontSize="8" fill="#0F6E56" fontFamily="sans-serif" fontWeight="500">External APIs</text>
      <text x="78" y="130" textAnchor="middle" fontSize="7" fill="#1D9E75" fontFamily="sans-serif" opacity="0.7">data model · api surface · components</text>
    </svg>
  )
}

// ─── Phase 4: Mockups & design prototyping ────────────────────────────────────
// Visual: Browser window wireframe with basic layout blocks

function Phase4() {
  return (
    <svg viewBox="0 0 156 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect x="24" y="8" width="108" height="88" rx="6" fill="#E1F5EE" stroke="#5DCAA5" strokeWidth="0.5" />
      <rect x="24" y="8" width="108" height="16" rx="6" fill="#5DCAA5" opacity="0.4" />
      <circle cx="34" cy="16" r="3" fill="#0F6E56" opacity="0.5" />
      <circle cx="44" cy="16" r="3" fill="#0F6E56" opacity="0.5" />
      <circle cx="54" cy="16" r="3" fill="#0F6E56" opacity="0.5" />
      <rect x="32" y="30" width="92" height="10" rx="3" fill="#9FE1CB" opacity="0.5" />
      <rect x="32" y="46" width="40" height="36" rx="3" fill="#9FE1CB" opacity="0.3" />
      <rect x="78" y="46" width="46" height="16" rx="3" fill="#9FE1CB" opacity="0.3" />
      <rect x="78" y="66" width="46" height="16" rx="3" fill="#9FE1CB" opacity="0.3" />
      <rect x="52" y="104" width="52" height="8" rx="2" fill="#E1F5EE" stroke="#5DCAA5" strokeWidth="0.5" />
      <rect x="60" y="112" width="36" height="20" rx="2" fill="#E1F5EE" stroke="#5DCAA5" strokeWidth="0.5" />
    </svg>
  )
}

// ─── Phase 5: Build & vibe code ───────────────────────────────────────────────
// Visual: Dark terminal with Claude Code prompt output

function Phase5() {
  return (
    <svg viewBox="0 0 156 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect x="8" y="8" width="140" height="110" rx="6" fill="#1a1a1a" />
      <rect x="8" y="8" width="140" height="16" rx="6" fill="#2a2a2a" />
      <text x="24" y="20" fontSize="7" fill="#888" fontFamily="monospace">claude_code — zsh</text>
      <text x="16" y="38" fontSize="8" fill="#EF9F27" fontFamily="monospace">$ claude &quot;build auth flow&quot;</text>
      <text x="16" y="52" fontSize="7" fill="#5DCAA5" fontFamily="monospace">✓ Scaffolding routes...</text>
      <text x="16" y="63" fontSize="7" fill="#5DCAA5" fontFamily="monospace">✓ Generating components...</text>
      <text x="16" y="74" fontSize="7" fill="#5DCAA5" fontFamily="monospace">✓ Writing tests...</text>
      <text x="16" y="85" fontSize="7" fill="#AFA9EC" fontFamily="monospace">→ 12 files created</text>
      <text x="16" y="96" fontSize="7" fill="#AFA9EC" fontFamily="monospace">→ Ready to iterate</text>
      <rect x="16" y="104" width="6" height="10" rx="1" fill="#EF9F27" opacity="0.8" />
    </svg>
  )
}

// ─── Phase 6: Evals & quality testing ────────────────────────────────────────
// Visual: Eval score bars with pass/fail summary

function Phase6() {
  return (
    <svg viewBox="0 0 156 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <text x="78" y="18" textAnchor="middle" fontSize="8" fill="#854F0B" fontFamily="sans-serif" fontWeight="500">Eval Results</text>
      <rect x="12" y="24" width="132" height="16" rx="3" fill="#FAEEDA" stroke="#FAC775" strokeWidth="0.5" />
      <rect x="12" y="24" width="118" height="16" rx="3" fill="#EF9F27" opacity="0.5" />
      <text x="78" y="36" textAnchor="middle" fontSize="7" fill="#633806" fontFamily="sans-serif">Correctness — 89%</text>
      <rect x="12" y="44" width="132" height="16" rx="3" fill="#FAEEDA" stroke="#FAC775" strokeWidth="0.5" />
      <rect x="12" y="44" width="105" height="16" rx="3" fill="#EF9F27" opacity="0.5" />
      <text x="78" y="56" textAnchor="middle" fontSize="7" fill="#633806" fontFamily="sans-serif">Consistency — 80%</text>
      <rect x="12" y="64" width="132" height="16" rx="3" fill="#FAEEDA" stroke="#FAC775" strokeWidth="0.5" />
      <rect x="12" y="64" width="126" height="16" rx="3" fill="#EF9F27" opacity="0.5" />
      <text x="78" y="76" textAnchor="middle" fontSize="7" fill="#633806" fontFamily="sans-serif">Brand alignment — 95%</text>
      <line x1="12" y1="90" x2="144" y2="90" stroke="#FAC775" strokeWidth="0.5" />
      <circle cx="30" cy="106" r="8" fill="#E1F5EE" stroke="#5DCAA5" strokeWidth="0.5" />
      <text x="30" y="110" textAnchor="middle" fontSize="7" fill="#0F6E56" fontFamily="sans-serif">✓</text>
      <text x="44" y="110" fontSize="7" fill="#854F0B" fontFamily="sans-serif">12 passed</text>
      <circle cx="100" cy="106" r="8" fill="#FAECE7" stroke="#F0997B" strokeWidth="0.5" />
      <text x="100" y="110" textAnchor="middle" fontSize="7" fill="#993C1D" fontFamily="sans-serif">✗</text>
      <text x="114" y="110" fontSize="7" fill="#854F0B" fontFamily="sans-serif">2 failed</text>
    </svg>
  )
}

// ─── Phase 7: Launch & growth ─────────────────────────────────────────────────
// Visual: Line chart with upward growth curve and launch marker

function Phase7() {
  return (
    <svg viewBox="0 0 156 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <line x1="20" y1="116" x2="144" y2="116" stroke="#F0997B" strokeWidth="0.5" />
      <line x1="20" y1="116" x2="20" y2="20" stroke="#F0997B" strokeWidth="0.5" />
      <polyline
        points="20,110 36,105 52,98 68,88 80,60 96,50 112,38 128,28 144,22"
        fill="none"
        stroke="#F0997B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="80" cy="60" r="4" fill="#FAECE7" stroke="#D85A30" strokeWidth="1" />
      <line x1="80" y1="56" x2="80" y2="20" stroke="#D85A30" strokeWidth="0.5" strokeDasharray="3,2" />
      <text x="82" y="18" fontSize="7" fill="#993C1D" fontFamily="sans-serif" fontWeight="500">Launch</text>
      <text x="12" y="90" fontSize="7" fill="#F0997B" fontFamily="sans-serif" opacity="0.7">DAU</text>
      <text x="28" y="128" fontSize="7" fill="#F0997B" fontFamily="sans-serif" opacity="0.7">Time →</text>
    </svg>
  )
}

// ─── Phase 8: Iteration loop & AI product sense ───────────────────────────────
// Visual: Circular loop with 4 nodes and "AI sense" at center

function Phase8() {
  return (
    <svg viewBox="0 0 156 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <marker id="arr8" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#F0997B" />
        </marker>
      </defs>
      <circle cx="78" cy="70" r="44" fill="none" stroke="#F0997B" strokeWidth="0.5" strokeDasharray="4,3" />
      <circle cx="78" cy="26" r="10" fill="#FAECE7" stroke="#F0997B" strokeWidth="0.5" />
      <text x="78" y="30" textAnchor="middle" fontSize="7" fill="#993C1D" fontFamily="sans-serif" fontWeight="500">Discover</text>
      <circle cx="122" cy="70" r="10" fill="#FAECE7" stroke="#F0997B" strokeWidth="0.5" />
      <text x="122" y="74" textAnchor="middle" fontSize="7" fill="#993C1D" fontFamily="sans-serif" fontWeight="500">Build</text>
      <circle cx="78" cy="114" r="10" fill="#FAECE7" stroke="#F0997B" strokeWidth="0.5" />
      <text x="78" y="118" textAnchor="middle" fontSize="7" fill="#993C1D" fontFamily="sans-serif" fontWeight="500">Eval</text>
      <circle cx="34" cy="70" r="10" fill="#FAECE7" stroke="#F0997B" strokeWidth="0.5" />
      <text x="34" y="74" textAnchor="middle" fontSize="7" fill="#993C1D" fontFamily="sans-serif" fontWeight="500">Ship</text>
      <path d="M88 27 Q111 36 118 58" fill="none" stroke="#F0997B" strokeWidth="1" markerEnd="url(#arr8)" />
      <path d="M122 82 Q118 104 90 112" fill="none" stroke="#F0997B" strokeWidth="1" markerEnd="url(#arr8)" />
      <path d="M66 112 Q42 104 36 84" fill="none" stroke="#F0997B" strokeWidth="1" markerEnd="url(#arr8)" />
      <path d="M34 58 Q38 36 66 28" fill="none" stroke="#F0997B" strokeWidth="1" markerEnd="url(#arr8)" />
      <circle cx="78" cy="70" r="12" fill="#FAECE7" stroke="#F0997B" strokeWidth="0.5" />
      <text x="78" y="68" textAnchor="middle" fontSize="6" fill="#993C1D" fontFamily="sans-serif">AI</text>
      <text x="78" y="76" textAnchor="middle" fontSize="6" fill="#993C1D" fontFamily="sans-serif">sense</text>
    </svg>
  )
}
