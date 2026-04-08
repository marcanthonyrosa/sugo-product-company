"use client";

import { useEffect, useRef, ReactNode, ElementType } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: ElementType;
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
  style = {},
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.style.opacity = "1";
      return;
    }

    el.style.opacity = "0";
    el.style.animation = `fadeUp 400ms ease ${delay}ms forwards`;
  }, [delay]);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
}
