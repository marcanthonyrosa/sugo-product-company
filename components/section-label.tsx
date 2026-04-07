interface SectionLabelProps {
  number?: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SectionLabel({ number, label, className = "", style }: SectionLabelProps) {
  const text = number ? `${number} · ${label}` : label;
  return (
    <div className={className} style={style}>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--color-sage)",
          display: "block",
          marginBottom: "8px",
        }}
      >
        {text}
      </span>
      <div
        style={{
          width: "40px",
          height: "1px",
          background: "var(--color-sage)",
        }}
      />
    </div>
  );
}
