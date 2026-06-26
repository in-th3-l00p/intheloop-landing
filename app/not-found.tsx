import type { Metadata } from "next";
import Link from "next/link";
import Frame from "@/components/Frame";
import TopBar from "@/components/TopBar";
import { MONO, BLACKLETTER } from "@/components/tokens";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Frame>
      <TopBar crumbs={[{ label: "Home", href: "/" }, { label: "404" }]} />

      <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto", padding: "120px 40px 150px", overflow: "hidden", minHeight: "64vh" }}>
        <div style={{ position: "absolute", top: "-10%", right: 24, pointerEvents: "none", userSelect: "none" }}>
          <span style={{ display: "inline-block", fontFamily: BLACKLETTER, fontSize: "clamp(170px,24vw,360px)", lineHeight: 1, color: "rgba(124,95,166,.10)", animation: "floaty 11s ease-in-out infinite" }}>?</span>
        </div>

        <div data-reveal="" style={{ position: "relative", fontFamily: MONO, fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: "#b3a6bf", display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ width: 46, height: 1, background: "#a585cf", display: "inline-block" }} />
          Error &nbsp;/&nbsp; № 404 · Off the index
        </div>

        <h1 data-reveal="" style={{ position: "relative", fontWeight: 400, fontSize: "clamp(48px,8vw,116px)", lineHeight: ".96", letterSpacing: "-.02em", marginTop: 26, maxWidth: "16ch" }}>
          This page is <em style={{ fontStyle: "italic", fontWeight: 400, color: "#c4a9e0" }}>not in the loop.</em>
        </h1>

        <p data-reveal="" style={{ position: "relative", fontFamily: MONO, fontSize: 13, lineHeight: 1.9, color: "#c2b7cd", maxWidth: "52ch", marginTop: 28 }}>
          The page you&apos;re looking for has moved, was never built, or never existed. The studio works quietly. Sometimes things stay in the dark.
        </p>

        <div data-reveal="" style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 44, fontFamily: MONO, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase" }}>
          <Link href="/" style={{ padding: "13px 22px", border: "1px solid rgba(196,169,224,.45)", color: "#c4a9e0", textDecoration: "none" }}>← Back home</Link>
          <Link href="/portfolio" className="il-navlink" style={{ padding: "13px 22px", border: "1px solid rgba(233,226,211,.18)", textDecoration: "none" }}>View portfolio</Link>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 96, fontFamily: MONO, fontSize: 11, letterSpacing: ".06em", color: "#9a8ea4" }}>
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
