import Image from "next/image";

interface TomatoLogoProps {
  size?: number;
  /** Border radius in px or CSS value. Defaults to 12px. */
  radius?: number | string;
}

export default function TomatoLogo({ size = 36, radius = "16%" }: TomatoLogoProps) {
  const r = typeof radius === "number" ? `${radius}px` : radius;
  return (
    <Image
      src="/logo-tomato.png"
      alt="Sugo Product Company logo"
      width={size}
      height={size}
      style={{ borderRadius: r, display: "block", flexShrink: 0 }}
      priority
    />
  );
}
