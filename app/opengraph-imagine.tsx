// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const navy = "#0D1B2A";
  const orange = "#FF7A00";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: `linear-gradient(135deg, ${navy} 0%, #16263a 60%, ${orange} 100%)`,
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
            Networking, smart tech, clean cabling, and on-site IT in North Jersey.
          </div>

          {/* Bullets */}
          <div style={{ display: "flex", gap: 16, marginTop: 6, fontSize: 22, opacity: 0.95 }}>
            <span>• Wi-Fi & APs</span>
            <span>• Low-Voltage Cabling</span>
            <span>• Smart Home/Office</span>
          </div>

          {/* Ciudades */}
          <div style={{ marginTop: 18, fontSize: 22, opacity: 0.9 }}>
            Jersey City • Hoboken • Kearny • Union City • North Bergen
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
