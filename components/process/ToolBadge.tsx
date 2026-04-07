interface ToolBadgeProps {
  label: string;
}

export default function ToolBadge({ label }: ToolBadgeProps) {
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        fontWeight: 400,
        background: "var(--tool-badge-bg, rgba(143,163,177,0.12))",
        border: "0.5px solid var(--tool-badge-border, rgba(143,163,177,0.35))",
        borderRadius: "20px",
        padding: "3px 10px",
        color: "var(--muted)",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}
