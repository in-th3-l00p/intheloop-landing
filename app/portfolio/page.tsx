import type { Metadata } from "next";
import Link from "next/link";
import Frame from "@/components/Frame";
import TopBar from "@/components/TopBar";
import { MONO, BLACKLETTER } from "@/components/tokens";

export const metadata: Metadata = {
  title: "intheloop — Selected work",
  description:
    "A working index of the studio's practice — distributed systems, applied research, interface craft and the quiet tooling in between.",
};

const PROJECTS = [
  { n: "01", t: "Distributed Systems", k: "infrastructure" },
  { n: "02", t: "Applied Machine Learning", k: "research" },
  { n: "03", t: "Interface Craft", k: "creative" },
  { n: "04", t: "Protocol Design", k: "r&d" },
  { n: "05", t: "Technical Advisory", k: "consulting" },
  { n: "06", t: "Internal Tooling", k: "development" },
];

export default function PortfolioPage() {
  return (
    <Frame>
      <TopBar crumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} />

      {/* header */}
      <div style={{ position: "relative", padding: "118px 40px 60px", maxWidth: 1320, margin: "0 auto", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-4%", right: 24, pointerEvents: "none", userSelect: "none" }}>
          <span style={{ display: "inline-block", fontFamily: BLACKLETTER, fontSize: "clamp(150px,20vw,300px)", lineHeight: 1, color: "rgba(124,95,166,.10)", animation: "floaty 11s ease-in-out infinite" }}>il</span>
        </div>
        <div data-reveal="" style={{ position: "relative", fontFamily: MONO, fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: "#b3a6bf", display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ width: 46, height: 1, background: "#a585cf", display: "inline-block" }} />
          Selected Work &nbsp;/&nbsp; № 001 — Index
        </div>
        <h1 data-reveal="" style={{ position: "relative", fontWeight: 400, fontSize: "clamp(52px,9vw,128px)", lineHeight: ".95", letterSpacing: "-.02em", marginTop: 26 }}>
          Selected <em style={{ fontStyle: "italic", fontWeight: 400, color: "#c4a9e0" }}>work</em>.
        </h1>
        <p data-reveal="" style={{ position: "relative", fontFamily: MONO, fontSize: 13, lineHeight: 1.9, color: "#c2b7cd", maxWidth: "56ch", marginTop: 28 }}>
          A working index of the studio&apos;s practice — distributed systems, applied research, interface craft and the quiet tooling in between. Engagements are taken on by invitation and referral.
        </p>
      </div>

      {/* work grid */}
      <div style={{ padding: "24px 40px 40px", maxWidth: 1320, margin: "0 auto" }}>
        <div data-reveal="" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#9a8ea4", borderBottom: "1px solid rgba(233,226,211,.15)", paddingBottom: 14 }}>
          <span><span style={{ color: "#a585cf" }}>❦</span> Index</span>
          <span>06 works — 2026</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "38px 28px", marginTop: 42 }}>
          {PROJECTS.map((p) => (
            <Link key={p.n} href="/case-study" data-reveal="" className="il-project" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
              <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden", border: "1px solid rgba(233,226,211,.16)", background: "#15101c" }}>
                <div className="il-projimg" style={{ width: "100%", height: "100%", backgroundImage: "repeating-linear-gradient(135deg,#1d1528 0 9px,#150e1f 9px 18px)", position: "relative" }}>
                  <span style={{ position: "absolute", top: 12, left: 12, width: 11, height: 11, borderLeft: "1px solid rgba(233,226,211,.42)", borderTop: "1px solid rgba(233,226,211,.42)" }} />
                  <span style={{ position: "absolute", bottom: 12, right: 12, width: 11, height: 11, borderRight: "1px solid rgba(233,226,211,.42)", borderBottom: "1px solid rgba(233,226,211,.42)" }} />
                  <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: "#6a5b7d" }}>＋</span>
                  <span style={{ position: "absolute", left: 13, bottom: 12, fontFamily: MONO, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "#82749a" }}>img / {p.k}</span>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 15 }}>
                <div style={{ fontSize: 27, fontWeight: 500, letterSpacing: "-.005em" }}>{p.t}</div>
                <div style={{ fontFamily: MONO, fontSize: 11, color: "#a585cf" }}>{p.n}</div>
              </div>
              <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "#9a8ea4", marginTop: 4 }}>{p.k}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* footer */}
      <div style={{ position: "relative", padding: "80px 40px 72px", maxWidth: 1320, margin: "72px auto 0", borderTop: "1px solid rgba(233,226,211,.15)" }}>
        <Link href="/" data-reveal="" className="il-card" style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", textDecoration: "none", color: "inherit", border: "1px solid rgba(233,226,211,.16)", background: "#15101c", overflow: "hidden", padding: "34px 34px 28px", minHeight: 172 }}>
          <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "#9a8ea4" }}>← Back</div>
          <div>
            <div style={{ fontSize: "clamp(30px,3.4vw,44px)", fontWeight: 400, letterSpacing: "-.015em", lineHeight: 1 }}>Home</div>
            <div style={{ fontFamily: MONO, fontSize: 12, color: "#b3a6bf", marginTop: 12 }}>The studio</div>
          </div>
        </Link>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 64, fontFamily: MONO, fontSize: 11, letterSpacing: ".06em", color: "#9a8ea4" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
            <span><span style={{ color: "#a585cf" }}>[</span>intheloop<span style={{ color: "#a585cf" }}>]</span></span>
            <span style={{ color: "#82749a" }}>© 2026</span>
          </span>
          <span>Software Research &amp; Development</span>
        </div>
      </div>
    </Frame>
  );
}
