import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Sugo Product Company — Fractional Product Leadership";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "app", "icon.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F5EFD6",
          padding: "72px 88px",
          fontFamily: "sans-serif",
          color: "#112240",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            fontSize: 32,
            fontWeight: 600,
            letterSpacing: "0.02em",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={88} height={88} />
          <span>SUGO PRODUCT COMPANY</span>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              maxWidth: 1024,
            }}
          >
            Fractional product leadership for busy founders.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              lineHeight: 1.35,
              color: "#4A7C59",
              maxWidth: 960,
            }}
          >
            Senior product thinking, without the full-time overhead.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            color: "#112240",
            opacity: 0.75,
          }}
        >
          <span>sugoproduct.co</span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontWeight: 500,
            }}
          >
            Strategy · Design · Build · Ship
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
