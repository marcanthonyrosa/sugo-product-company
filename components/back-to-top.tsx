"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      <style>{`
        .btt-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 50;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 0.5px solid var(--border);
          background: var(--card-surface);
          color: var(--foreground);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: opacity 200ms ease, transform 200ms ease;
          opacity: 0.85;
        }
        .btt-btn:hover {
          opacity: 1;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
        }
      `}</style>
      <button
        className="btt-btn"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 14V4" />
          <path d="M4 8l5-5 5 5" />
        </svg>
      </button>
    </>
  );
}
