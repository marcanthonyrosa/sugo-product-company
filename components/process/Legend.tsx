import { CATEGORY_META, CATEGORY_VARS, PhaseCategory } from "@/lib/phases";

const categories: PhaseCategory[] = ["strategy", "design", "build", "ship"];

export default function Legend() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px 24px",
        marginBottom: "40px",
      }}
    >
      {categories.map((cat) => {
        const vars = CATEGORY_VARS[cat];
        const meta = CATEGORY_META[cat];
        return (
          <div
            key={cat}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <span
              style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: vars.border,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.08em",
                color: "var(--foreground)",
                opacity: 0.7,
              }}
            >
              {meta.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
