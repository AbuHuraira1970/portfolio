import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

const handle = (pos: React.CSSProperties) => ({
  position: "absolute" as const,
  width: 18,
  height: 18,
  background: "#fff",
  border: "3px solid #0B6FC2",
  ...pos,
});

/** Share card in the site's style: dotted canvas, selection box around the headline. */
export function renderOg({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#EDEFF2",
          backgroundImage: "radial-gradient(#C9CED6 2px, transparent 2.4px)",
          backgroundSize: "28px 28px",
          color: "#14161B",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#5A6170", letterSpacing: 2, textTransform: "uppercase" }}>
          {eyebrow}
        </div>
        <div style={{ display: "flex", position: "relative", border: "3px solid #0B6FC2", padding: "18px 28px", alignSelf: "flex-start" }}>
          <div style={handle({ left: -11, top: -11 })} />
          <div style={handle({ right: -11, top: -11 })} />
          <div style={handle({ left: -11, bottom: -11 })} />
          <div style={handle({ right: -11, bottom: -11 })} />
          <div style={{ display: "flex", fontSize: title.length > 30 ? 70 : 96, fontWeight: 900, letterSpacing: -3, lineHeight: 1, maxWidth: 960 }}>
            {title}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 28 }}>
          <span style={{ maxWidth: 820, color: "#5A6170" }}>{footer}</span>
          <span style={{ background: "#FFD966", color: "#2B2410", padding: "10px 20px", borderRadius: 6 }}>Lahore, PK</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
