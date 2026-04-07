"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm({ dark = false }: { dark?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          padding: "40px 32px",
          border: "1px solid var(--color-sage)",
          borderRadius: "var(--radius)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "16px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-sage)",
            margin: 0,
          }}
        >
          GOT IT. WE&apos;LL BE IN TOUCH.
        </p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: dark ? "rgba(250,250,247,0.06)" : "var(--background)",
    border: dark ? "1px solid rgba(143,163,177,0.35)" : "1px solid var(--border)",
    borderRadius: "var(--radius-md)",
    padding: "12px 16px",
    fontFamily: "var(--font-body)",
    fontSize: "15px",
    color: dark ? "var(--primary-fg)" : "var(--foreground)",
    outline: "none",
    transition: "border-color var(--transition)",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--color-slate)",
    marginBottom: "8px",
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {/* Name */}
        <div>
          <label htmlFor="contact-name" style={labelStyle}>Name</label>
          <input
            id="contact-name"
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
            onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--color-sage)"; }}
            onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(143,163,177,0.35)"; }}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" style={labelStyle}>Email</label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="you@company.co"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
            onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--color-sage)"; }}
            onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(143,163,177,0.35)"; }}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" style={labelStyle}>Tell us what&apos;s going on</label>
          <textarea
            id="contact-message"
            required
            placeholder="Where you are, what you're building, what's slipping..."
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
            onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--color-sage)"; }}
            onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(143,163,177,0.35)"; }}
          />
        </div>

        {status === "error" && (
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "#e74c3c", margin: 0, letterSpacing: "0.05em" }}>
            Something went wrong. Email marc@sugoproduct.co directly.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "white",
            background: status === "loading" ? "rgba(74,124,89,0.6)" : "var(--color-sage)",
            border: "none",
            padding: "14px 28px",
            borderRadius: "var(--radius)",
            cursor: status === "loading" ? "not-allowed" : "pointer",
            alignSelf: "flex-start",
            transition: "background var(--transition), transform var(--transition), box-shadow var(--transition)",
          }}
          onMouseEnter={(e) => {
            if (status !== "loading") {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#5a9469";
              el.style.transform = "translateY(-1px)";
              el.style.boxShadow = "0 6px 20px rgba(74,124,89,0.35)";
            }
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "var(--color-sage)";
            el.style.transform = "none";
            el.style.boxShadow = "none";
          }}
        >
          {status === "loading" ? "SENDING..." : "→ GET IN TOUCH"}
        </button>

        <div>
          <a
            href="mailto:marc@sugoproduct.co"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--color-slate)",
              textDecoration: "none",
              transition: "color var(--transition)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-cream)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-slate)"; }}
          >
            marc@sugoproduct.co
          </a>
        </div>
      </div>
    </form>
  );
}
