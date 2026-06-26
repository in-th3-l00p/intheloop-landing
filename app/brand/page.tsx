import type { Metadata } from "next";
import Frame from "@/components/Frame";
import TopBar from "@/components/TopBar";
import { MONO, BLACKLETTER } from "@/components/tokens";

export const metadata: Metadata = {
  title: "Brand Book · Vol. 01",
  alternates: { canonical: "/brand" },
  description:
    "A reference for the marks, type, colour and voice of intheloop, an independent software research & development studio.",
};

const MARKS = [
  { svg: "/assets/il-seal.svg", png: "/assets/il-seal.png", title: "Primary Seal", sub: "on dark · primary", w: "54%", light: false },
  { svg: "/assets/il-monogram.svg", png: "/assets/il-monogram.png", title: "Monogram", sub: "il · no ring", w: "38%", light: false },
  { svg: "/assets/il-seal-dark.svg", png: "/assets/il-seal-dark.png", title: "Seal · on light", sub: "dark mark", w: "54%", light: true },
  { svg: "/assets/il-monogram-dark.svg", png: "/assets/il-monogram-dark.png", title: "Monogram · on light", sub: "dark mark", w: "38%", light: true },
];

const COLORS = [
  { name: "Void", hex: "#0E0A14", swatch: "#0E0A14", role: "Ground" },
  { name: "Panel", hex: "#15101C", swatch: "#15101C", role: "Surface" },
  { name: "Deep Violet", hex: "#6C4F93", swatch: "#6C4F93", role: "Accent / deep" },
  { name: "Amethyst", hex: "#A585CF", swatch: "#A585CF", role: "Accent" },
  { name: "Soft Lilac", hex: "#C4A9E0", swatch: "#C4A9E0", role: "Highlight" },
  { name: "Ivory", hex: "#E9E2D3", swatch: "#E9E2D3", role: "Type / light" },
];

const VOICE = [
  { n: "01", t: "State, don’t sell", d: "Plain declaratives. No hype, no exclamation, no superlatives." },
  { n: "02", t: "Exact over clever", d: "Precise technical nouns. Say what the work is, not what it disrupts." },
  { n: "03", t: "Quiet authority", d: "Confidence through restraint. We work by referral; we don’t announce." },
];

const sectionHead = (num: string, left: string, right: string) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#9a8ea4", borderBottom: "1px solid rgba(233,226,211,.15)", paddingBottom: 14 }}>
    <span><span style={{ color: "#a585cf" }}>{num}</span> &nbsp;{left}</span>
    <span>{right}</span>
  </div>
);

export default function BrandBookPage() {
  return (
    <Frame>
      {/* top radial glow, unique to the brand book cover */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(120% 60% at 50% -10%,rgba(108,79,147,.16),transparent 55%)", zIndex: 0 }} />

      <TopBar crumbs={[{ label: "Home", href: "/" }, { label: "Brand Book" }]} />

      {/* cover */}
      <div style={{ padding: "120px 40px 90px", maxWidth: 1320, margin: "0 auto" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/il-seal.svg" alt="" style={{ width: 96, height: 96, display: "block", marginBottom: 40 }} />
        <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: "#9a8ea4" }}>Identity Guidelines &nbsp;/&nbsp; Vol. 01</div>
        <h1 style={{ fontWeight: 400, fontSize: "clamp(56px,11vw,150px)", lineHeight: ".92", letterSpacing: "-.02em", marginTop: 24 }}>
          The <em style={{ fontStyle: "italic", color: "#c4a9e0" }}>intheloop</em><br />brand book.
        </h1>
        <p style={{ fontFamily: MONO, fontSize: 13, lineHeight: 1.9, color: "#b3a6bf", maxWidth: "56ch", marginTop: 30 }}>
          A reference for the marks, type, colour and voice of intheloop, an independent software research &amp; development studio. Built quietly, in the dark, until it is ready for light.
        </p>
      </div>

      {/* index */}
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 40px 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 1, borderTop: "1px solid rgba(233,226,211,.15)", fontFamily: MONO, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#9a8ea4" }}>
          {[["01", "Logo"], ["02", "Type"], ["03", "Colour"], ["04", "Voice"], ["05", "Motifs"]].map(([n, t]) => (
            <div key={n} style={{ padding: "16px 0", borderBottom: "1px solid rgba(233,226,211,.15)" }}>
              <span style={{ color: "#a585cf" }}>{n}</span> &nbsp;{t}
            </div>
          ))}
        </div>
      </div>

      {/* I · LOGO */}
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "60px 40px" }}>
        {sectionHead("01", "The Mark", "Seal · Monogram")}
        <p style={{ fontSize: "clamp(22px,2.6vw,32px)", fontWeight: 400, lineHeight: 1.4, maxWidth: "30ch", marginTop: 34 }}>
          The name is the idea: a closed loop. The <em style={{ fontStyle: "italic", color: "#c4a9e0" }}>il</em> monogram, drawn as a serif ligature, sits inside an engraved double ring: a seal for a studio that works by referral.
        </p>

        {/* download cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, marginTop: 48 }}>
          {MARKS.map((m) => (
            <div key={m.title} style={{ border: "1px solid rgba(233,226,211,.16)", background: "#15101c" }}>
              <div style={{ aspectRatio: "1/1", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid rgba(233,226,211,.12)", background: m.light ? "#e9e2d3" : undefined }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.svg} alt="" style={{ width: m.w }} />
              </div>
              <div style={{ padding: 16, fontFamily: MONO }}>
                <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#e9e2d3" }}>{m.title}</div>
                <div style={{ fontSize: 10, color: "#82749a", margin: "5px 0 12px" }}>{m.sub}</div>
                <div style={{ display: "flex", gap: 8, fontSize: 10, letterSpacing: ".08em", textTransform: "uppercase" }}>
                  <a href={m.svg} download style={{ flex: 1, textAlign: "center", padding: "7px 0", border: "1px solid rgba(196,169,224,.4)", color: "#c4a9e0", textDecoration: "none" }}>SVG</a>
                  <a href={m.png} download style={{ flex: 1, textAlign: "center", padding: "7px 0", border: "1px solid rgba(196,169,224,.4)", color: "#c4a9e0", textDecoration: "none" }}>PNG</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* usage rules */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28, marginTop: 44, fontFamily: MONO }}>
          {[
            ["Clear space", "Keep margin equal to the ring's width on all sides. Never crowd the seal."],
            ["Minimum size", "Seal 24px, monogram 16px. Below this, use the monogram."],
            ["Don't", "Recolour outside the palette, rotate, stretch, or add shadow to the mark."],
          ].map(([h, d]) => (
            <div key={h}>
              <div style={{ fontSize: 11, color: "#a585cf", marginBottom: 9 }}>{h}</div>
              <div style={{ fontSize: 13, lineHeight: 1.7, color: "#b3a6bf" }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* II · TYPE */}
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "60px 40px" }}>
        {sectionHead("02", "Typography", "Three voices")}
        <div style={{ borderBottom: "1px solid rgba(233,226,211,.12)", padding: "40px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: MONO, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#9a8ea4" }}>
            <span>Cormorant Garamond</span><span>Display · 300–600</span>
          </div>
          <div style={{ fontSize: "clamp(48px,8vw,104px)", fontWeight: 400, lineHeight: 1, letterSpacing: "-.01em", marginTop: 18 }}>
            Software at the <em style={{ fontStyle: "italic", color: "#c4a9e0" }}>edge</em>.
          </div>
          <div style={{ fontFamily: MONO, fontSize: 12, color: "#82749a", marginTop: 18 }}>Headlines, statements, the wordmark. High-contrast, old-money serif. Set 300–400 weight, tight tracking.</div>
        </div>

        <div style={{ borderBottom: "1px solid rgba(233,226,211,.12)", padding: "40px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: MONO, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#9a8ea4" }}>
            <span>JetBrains Mono</span><span>Technical · 400–700</span>
          </div>
          <div style={{ fontFamily: MONO, fontSize: "clamp(22px,3vw,38px)", fontWeight: 500, marginTop: 18, letterSpacing: "-.01em" }}>Research &amp; Development / № 001</div>
          <div style={{ fontFamily: MONO, fontSize: 12, color: "#82749a", marginTop: 18 }}>Labels, navigation, metadata, body copy. Uppercase with wide tracking for labels (.14–.24em).</div>
        </div>

        <div style={{ padding: "40px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: MONO, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#9a8ea4" }}>
            <span>UnifrakturCook</span><span>Ornament · 700</span>
          </div>
          <div style={{ fontFamily: BLACKLETTER, fontSize: "clamp(46px,7vw,92px)", lineHeight: 1, marginTop: 14, color: "#c4a9e0" }}>intheloop</div>
          <div style={{ fontFamily: MONO, fontSize: 12, color: "#82749a", marginTop: 18 }}>Ornamental only: drop-initials, watermarks, the № mark. Never set body or whole words at small sizes.</div>
        </div>
      </div>

      {/* III · COLOUR */}
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "60px 40px" }}>
        {sectionHead("03", "Colour", "Aubergine & ivory")}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 14, marginTop: 40 }}>
          {COLORS.map((c) => (
            <div key={c.name} style={{ border: "1px solid rgba(233,226,211,.14)" }}>
              <div style={{ aspectRatio: "3/4", background: c.swatch }} />
              <div style={{ padding: 13, fontFamily: MONO }}>
                <div style={{ fontSize: 11, letterSpacing: ".06em", color: "#e9e2d3" }}>{c.name}</div>
                <div style={{ fontSize: 11, color: "#9a8ea4", marginTop: 4 }}>{c.hex}</div>
                <div style={{ fontSize: 9, letterSpacing: ".08em", textTransform: "uppercase", color: "#82749a", marginTop: 8 }}>{c.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* IV · VOICE */}
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "60px 40px" }}>
        {sectionHead("04", "Brand Voice", "How we speak")}
        <p style={{ fontSize: "clamp(26px,3.6vw,46px)", fontWeight: 400, lineHeight: 1.32, maxWidth: "24ch", marginTop: 36 }}>
          Quiet, exact, and a little austere. We state, we don&apos;t sell. <em style={{ fontStyle: "italic", color: "#c4a9e0" }}>Restraint is the tone.</em>
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28, marginTop: 56 }}>
          {VOICE.map((v) => (
            <div key={v.n} style={{ borderTop: "1px solid rgba(233,226,211,.15)", paddingTop: 20 }}>
              <div style={{ fontFamily: MONO, fontSize: 11, color: "#a585cf", marginBottom: 12 }}>{v.n}</div>
              <div style={{ fontSize: 21, fontWeight: 500, lineHeight: 1.25 }}>{v.t}</div>
              <div style={{ fontFamily: MONO, fontSize: 12, lineHeight: 1.7, color: "#9a8ea4", marginTop: 12 }}>{v.d}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginTop: 48, fontFamily: MONO }}>
          <div style={{ border: "1px solid rgba(196,169,224,.3)", padding: 22 }}>
            <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#c4a9e0", marginBottom: 14 }}>Say</div>
            <div style={{ fontSize: 14, lineHeight: 1.9, color: "#cdbfe0" }}>
              &ldquo;We build software at the edge of research and craft.&rdquo;<br />
              &ldquo;By invitation and referral.&rdquo;<br />
              &ldquo;Built quietly, until it is ready for light.&rdquo;
            </div>
          </div>
          <div style={{ border: "1px solid rgba(233,226,211,.14)", padding: 22 }}>
            <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#82749a", marginBottom: 14 }}>Avoid</div>
            <div style={{ fontSize: 14, lineHeight: 1.9, color: "#82749a" }}>
              &ldquo;Revolutionary AI-powered solutions!&rdquo;<br />
              Exclamation marks, hype, buzzwords.<br />
              Emoji, slang, growth-speak.
            </div>
          </div>
        </div>
      </div>

      {/* V · MOTIFS */}
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "60px 40px 30px" }}>
        {sectionHead("05", "Motifs", "The marginalia")}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18, marginTop: 40 }}>
          <div style={{ aspectRatio: "1/1", border: "1px solid rgba(233,226,211,.16)", background: "#15101c", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", backgroundImage: "radial-gradient(rgba(180,164,200,.16) 1px,transparent 1px)", backgroundSize: "16px 16px" }}>
            <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "#82749a", position: "absolute", bottom: 12, left: 12 }}>Dot grid</span>
          </div>
          <div style={{ aspectRatio: "1/1", border: "1px solid rgba(233,226,211,.16)", background: "#15101c", position: "relative" }}>
            <span style={{ position: "absolute", top: 14, left: 14, width: 16, height: 16, borderLeft: "1px solid #c4a9e0", borderTop: "1px solid #c4a9e0" }} />
            <span style={{ position: "absolute", bottom: 14, right: 14, width: 16, height: 16, borderRight: "1px solid #c4a9e0", borderBottom: "1px solid #c4a9e0" }} />
            <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "#82749a", position: "absolute", bottom: 12, left: 12 }}>Crosshairs</span>
          </div>
          <div style={{ aspectRatio: "1/1", border: "1px solid rgba(233,226,211,.16)", background: "#15101c", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", gap: 14, fontSize: 30, color: "#c4a9e0" }}>
            ❧ ✠ ❦
            <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "#82749a", position: "absolute", bottom: 12, left: 12 }}>Ornaments</span>
          </div>
          <div style={{ aspectRatio: "1/1", border: "1px solid rgba(233,226,211,.16)", background: "#15101c", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: MONO, fontSize: 26, color: "#e9e2d3", letterSpacing: ".06em" }}>
            № 001
            <span style={{ fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "#82749a", position: "absolute", bottom: 12, left: 12 }}>Numbering</span>
          </div>
        </div>
      </div>

      {/* footer */}
      <div style={{ maxWidth: 1320, margin: "40px auto 0", padding: 40, borderTop: "1px solid rgba(233,226,211,.15)", display: "flex", justifyContent: "space-between", fontFamily: MONO, fontSize: 11, letterSpacing: ".06em", color: "#9a8ea4" }}>
        <span><span style={{ color: "#a585cf" }}>[</span>intheloop<span style={{ color: "#a585cf" }}>]</span> &nbsp; © 2026</span>
        <span>Brand Book / Vol. 01</span>
      </div>
    </Frame>
  );
}
