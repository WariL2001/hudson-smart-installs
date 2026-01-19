// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const navy = "#0B1C2B";
  const accent = "#FF7A00";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: `linear-gradient(135deg, ${navy} 0%, #162c3a 60%, ${accent} 100%)`,
          color: "white",
          padding: 60,
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 820 }}>
          {/* Marca */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 999,
                background: "rgba(255,255,255,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: 28,
                letterSpacing: -0.5,
              }}
            >
              HSI
            </div>
            <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: -0.5 }}>
              Hudson Smart Installs
            </div>
          </div>

          {/* Claim */}
          <div style={{ fontSize: 28, opacity: 0.95, lineHeight: 1.25 }}>
            Low-voltage installations for homes and small businesses in North Jersey.
          </div>

          {/* Bullets */}
          <div style={{ display: "flex", gap: 16, marginTop: 6, fontSize: 22, opacity: 0.95 }}>
            <span>- Security Cameras</span>
            <span>- Structured Cabling</span>
            <span>- Smart Home Devices</span>
          </div>

          {/* Ciudades */}
          <div style={{ marginTop: 18, fontSize: 22, opacity: 0.9 }}>
            Jersey City - Hoboken - Kearny - Union City - North Bergen
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
