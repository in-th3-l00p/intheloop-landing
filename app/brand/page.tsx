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
  { name: "Graphite", hex: "#0c0e10", swatch: "#0c0e10", role: "Ground" },
  { name: "Panel", hex: "#15181b", swatch: "#15181b", role: "Surface" },
  { name: "Slate", hex: "#3f4a52", swatch: "#3f4a52", role: "Structure / deep" },
  { name: "Amethyst", hex: "#9a78cf", swatch: "#9a78cf", role: "Accent" },
  { name: "Soft Amethyst", hex: "#b79ae6", swatch: "#b79ae6", role: "Highlight" },
  { name: "Cool Ivory", hex: "#e6e6e2", swatch: "#e6e6e2", role: "Type / light" },
];

const VOICE = [
  { n: "01", t: "State, don’t sell", d: "Plain declaratives. No hype, no exclamation, no superlatives." },
  { n: "02", t: "Exact over clever", d: "Precise technical nouns. Say what the work is, not what it disrupts." },
  { n: "03", t: "Quiet authority", d: "Confidence through restraint. We let the work speak for itself." },
];

const sectionHead = (num: string, left: string, right: string) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#97a0a7", borderBottom: "1px solid rgba(230,230,226,.15)", paddingBottom: 14 }}>
    <span><span style={{ color: "#9a78cf" }}>{num}</span> &nbsp;{left}</span>
    <span>{right}</span>
  </div>
);

export default function BrandBookPage() {
  return (
    <Frame>
      {/* top radial glow, unique to the brand book cover */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(120% 60% at 50% -10%,rgba(84,98,108,.16),transparent 55%)", zIndex: 0 }} />

      <TopBar crumbs={[{ label: "Home", href: "/" }, { label: "Brand Book" }]} />

      {/* cover */}
      <div className="il-px il-secpad" style={{ padding: "120px 40px 90px", maxWidth: 1320, margin: "0 auto" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/il-seal.svg" alt="" style={{ width: 96, height: 96, display: "block", marginBottom: 40 }} />
        <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: "#97a0a7" }}>Identity Guidelines &nbsp;/&nbsp; Vol. 01</div>
        <h1 style={{ fontWeight: 400, fontSize: "clamp(56px,11vw,150px)", lineHeight: ".92", letterSpacing: "-.02em", marginTop: 24 }}>
          The <em style={{ fontStyle: "italic", color: "#b79ae6" }}>intheloop</em><br />brand book.
        </h1>
        <p style={{ fontFamily: MONO, fontSize: 13, lineHeight: 1.9, color: "#b4b9bf", maxWidth: "56ch", marginTop: 30 }}>
          A reference for the marks, type, colour and voice of intheloop, an independent software research &amp; development studio. Built quietly, in the dark, until it is ready for light.
        </p>
      </div>

      {/* index */}
      <div className="il-px" style={{ maxWidth: 1320, margin: "0 auto", padding: "0 40px 60px" }}>
        <div className="il-grid-5" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 1, borderTop: "1px solid rgba(230,230,226,.15)", fontFamily: MONO, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#97a0a7" }}>
          {[["01", "Logo"], ["02", "Type"], ["03", "Colour"], ["04", "Voice"], ["05", "Motifs"]].map(([n, t]) => (
            <div key={n} style={{ padding: "16px 0", borderBottom: "1px solid rgba(230,230,226,.15)" }}>
              <span style={{ color: "#9a78cf" }}>{n}</span> &nbsp;{t}
            </div>
          ))}
        </div>
      </div>

      {/* I · LOGO */}
      <div className="il-px" style={{ maxWidth: 1320, margin: "0 auto", padding: "60px 40px" }}>
        {sectionHead("01", "The Mark", "Seal · Monogram")}
        <p style={{ fontSize: "clamp(22px,2.6vw,32px)", fontWeight: 400, lineHeight: 1.4, maxWidth: "30ch", marginTop: 34 }}>
          The name is the idea: a closed loop. The <em style={{ fontStyle: "italic", color: "#b79ae6" }}>il</em> monogram, drawn as a serif ligature, sits inside an engraved double ring: a seal for a studio at the edge of research and craft.
        </p>

        {/* download cards */}
        <div className="il-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, marginTop: 48 }}>
          {MARKS.map((m) => (
            <div key={m.title} style={{ border: "1px solid rgba(230,230,226,.16)", background: "#15181b" }}>
              <div style={{ aspectRatio: "1/1", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid rgba(230,230,226,.12)", background: m.light ? "#e6e6e2" : undefined }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.svg} alt="" style={{ width: m.w }} />
              </div>
              <div style={{ padding: 16, fontFamily: MONO }}>
                <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#e6e6e2" }}>{m.title}</div>
                <div style={{ fontSize: 10, color: "#79838b", margin: "5px 0 12px" }}>{m.sub}</div>
                <div style={{ display: "flex", gap: 8, fontSize: 10, letterSpacing: ".08em", textTransform: "uppercase" }}>
                  <a href={m.svg} download style={{ flex: 1, textAlign: "center", padding: "7px 0", border: "1px solid rgba(183,154,230,.4)", color: "#b79ae6", textDecoration: "none" }}>SVG</a>
                  <a href={m.png} download style={{ flex: 1, textAlign: "center", padding: "7px 0", border: "1px solid rgba(183,154,230,.4)", color: "#b79ae6", textDecoration: "none" }}>PNG</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* usage rules */}
        <div className="il-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28, marginTop: 44, fontFamily: MONO }}>
          {[
            ["Clear space", "Keep margin equal to the ring's width on all sides. Never crowd the seal."],
            ["Minimum size", "Seal 24px, monogram 16px. Below this, use the monogram."],
            ["Don't", "Recolour outside the palette, rotate, stretch, or add shadow to the mark."],
          ].map(([h, d]) => (
            <div key={h}>
              <div style={{ fontSize: 11, color: "#9a78cf", marginBottom: 9 }}>{h}</div>
              <div style={{ fontSize: 13, lineHeight: 1.7, color: "#b4b9bf" }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* II · TYPE */}
      <div className="il-px" style={{ maxWidth: 1320, margin: "0 auto", padding: "60px 40px" }}>
        {sectionHead("02", "Typography", "Three voices")}
        <div style={{ borderBottom: "1px solid rgba(230,230,226,.12)", padding: "40px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: MONO, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#97a0a7" }}>
            <span>Cormorant Garamond</span><span>Display · 300–600</span>
          </div>
          <div style={{ fontSize: "clamp(48px,8vw,104px)", fontWeight: 400, lineHeight: 1, letterSpacing: "-.01em", marginTop: 18 }}>
            Software at the <em style={{ fontStyle: "italic", color: "#b79ae6" }}>edge</em>.
          </div>
          <div style={{ fontFamily: MONO, fontSize: 12, color: "#79838b", marginTop: 18 }}>Headlines, statements, the wordmark. High-contrast, old-money serif. Set 300–400 weight, tight tracking.</div>
        </div>

        <div style={{ borderBottom: "1px solid rgba(230,230,226,.12)", padding: "40px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: MONO, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#97a0a7" }}>
            <span>JetBrains Mono</span><span>Technical · 400–700</span>
          </div>
          <div style={{ fontFamily: MONO, fontSize: "clamp(22px,3vw,38px)", fontWeight: 500, marginTop: 18, letterSpacing: "-.01em" }}>Research &amp; Development / № 001</div>
          <div style={{ fontFamily: MONO, fontSize: 12, color: "#79838b", marginTop: 18 }}>Labels, navigation, metadata, body copy. Uppercase with wide tracking for labels (.14–.24em).</div>
        </div>

        <div style={{ padding: "40px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: MONO, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#97a0a7" }}>
            <span>UnifrakturCook</span><span>Ornament · 700</span>
          </div>
          <div style={{ fontFamily: BLACKLETTER, fontSize: "clamp(46px,7vw,92px)", lineHeight: 1, marginTop: 14, color: "#b79ae6" }}>intheloop</div>
          <div style={{ fontFamily: MONO, fontSize: 12, color: "#79838b", marginTop: 18 }}>Ornamental only: drop-initials, watermarks, the № mark. Never set body or whole words at small sizes.</div>
        </div>
      </div>

      {/* III · COLOUR */}
      <div className="il-px" style={{ maxWidth: 1320, margin: "0 auto", padding: "60px 40px" }}>
        {sectionHead("03", "Colour", "Graphite & amethyst")}
        <div className="il-grid-6" style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 14, marginTop: 40 }}>
          {COLORS.map((c) => (
            <div key={c.name} style={{ border: "1px solid rgba(230,230,226,.14)" }}>
              <div style={{ aspectRatio: "3/4", background: c.swatch }} />
              <div style={{ padding: 13, fontFamily: MONO }}>
                <div style={{ fontSize: 11, letterSpacing: ".06em", color: "#e6e6e2" }}>{c.name}</div>
                <div style={{ fontSize: 11, color: "#97a0a7", marginTop: 4 }}>{c.hex}</div>
                <div style={{ fontSize: 9, letterSpacing: ".08em", textTransform: "uppercase", color: "#79838b", marginTop: 8 }}>{c.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* IV · VOICE */}
      <div className="il-px" style={{ maxWidth: 1320, margin: "0 auto", padding: "60px 40px" }}>
        {sectionHead("04", "Brand Voice", "How we speak")}
        <p style={{ fontSize: "clamp(26px,3.6vw,46px)", fontWeight: 400, lineHeight: 1.32, maxWidth: "24ch", marginTop: 36 }}>
          Quiet, exact, and a little austere. We state, we don&apos;t sell. <em style={{ fontStyle: "italic", color: "#b79ae6" }}>Restraint is the tone.</em>
        </p>
        <div className="il-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28, marginTop: 56 }}>
          {VOICE.map((v) => (
            <div key={v.n} style={{ borderTop: "1px solid rgba(230,230,226,.15)", paddingTop: 20 }}>
              <div style={{ fontFamily: MONO, fontSize: 11, color: "#9a78cf", marginBottom: 12 }}>{v.n}</div>
              <div style={{ fontSize: 21, fontWeight: 500, lineHeight: 1.25 }}>{v.t}</div>
              <div style={{ fontFamily: MONO, fontSize: 12, lineHeight: 1.7, color: "#97a0a7", marginTop: 12 }}>{v.d}</div>
            </div>
          ))}
        </div>
        <div className="il-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginTop: 48, fontFamily: MONO }}>
          <div style={{ border: "1px solid rgba(183,154,230,.3)", padding: 22 }}>
            <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#b79ae6", marginBottom: 14 }}>Say</div>
            <div style={{ fontSize: 14, lineHeight: 1.9, color: "#c8cdd2" }}>
              &ldquo;We build software at the edge of research and craft.&rdquo;<br />
              &ldquo;We work with anyone who needs our services.&rdquo;<br />
              &ldquo;Built quietly, until it is ready for light.&rdquo;
            </div>
          </div>
          <div style={{ border: "1px solid rgba(230,230,226,.14)", padding: 22 }}>
            <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#79838b", marginBottom: 14 }}>Avoid</div>
            <div style={{ fontSize: 14, lineHeight: 1.9, color: "#79838b" }}>
              &ldquo;Revolutionary AI-powered solutions!&rdquo;<br />
              Exclamation marks, hype, buzzwords.<br />
              Emoji, slang, growth-speak.
            </div>
          </div>
        </div>
      </div>

      {/* V · MOTIFS */}
      <div className="il-px" style={{ maxWidth: 1320, margin: "0 auto", padding: "60px 40px 30px" }}>
        {sectionHead("05", "Motifs", "The marginalia")}
        <div className="il-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18, marginTop: 40 }}>
          <div style={{ aspectRatio: "1/1", border: "1px solid rgba(230,230,226,.16)", background: "#15181b", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", backgroundImage: "radial-gradient(rgba(150,160,168,.16) 1px,transparent 1px)", backgroundSize: "16px 16px" }}>
            <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "#79838b", position: "absolute", bottom: 12, left: 12 }}>Dot grid</span>
          </div>
          <div style={{ aspectRatio: "1/1", border: "1px solid rgba(230,230,226,.16)", background: "#15181b", position: "relative" }}>
            <span style={{ position: "absolute", top: 14, left: 14, width: 16, height: 16, borderLeft: "1px solid #b79ae6", borderTop: "1px solid #b79ae6" }} />
            <span style={{ position: "absolute", bottom: 14, right: 14, width: 16, height: 16, borderRight: "1px solid #b79ae6", borderBottom: "1px solid #b79ae6" }} />
            <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "#79838b", position: "absolute", bottom: 12, left: 12 }}>Crosshairs</span>
          </div>
          <div style={{ aspectRatio: "1/1", border: "1px solid rgba(230,230,226,.16)", background: "#15181b", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", gap: 14, fontSize: 30, color: "#b79ae6" }}>
            ❧ ✠ ❦
            <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "#79838b", position: "absolute", bottom: 12, left: 12 }}>Ornaments</span>
          </div>
          <div style={{ aspectRatio: "1/1", border: "1px solid rgba(230,230,226,.16)", background: "#15181b", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: MONO, fontSize: 26, color: "#e6e6e2", letterSpacing: ".06em" }}>
            № 001
            <span style={{ fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "#79838b", position: "absolute", bottom: 12, left: 12 }}>Numbering</span>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="il-px il-footrow" style={{ maxWidth: 1320, margin: "40px auto 0", padding: 40, borderTop: "1px solid rgba(230,230,226,.15)", display: "flex", justifyContent: "space-between", fontFamily: MONO, fontSize: 11, letterSpacing: ".06em", color: "#97a0a7" }}>
        <span><span style={{ color: "#9a78cf" }}>[</span>intheloop<span style={{ color: "#9a78cf" }}>]</span> &nbsp; © 2026</span>
        <span>Brand Book / Vol. 01</span>
      </div>
    </Frame>
  );
}
