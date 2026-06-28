import type { Metadata } from "next";
import Link from "next/link";
import Frame from "@/components/Frame";
import TopBar from "@/components/TopBar";
import VisualLog from "@/components/VisualLog";
import { MONO, BLACKLETTER } from "@/components/tokens";
import { reader } from "@/lib/reader";
import { accent, lines } from "@/lib/accent";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await reader.singletons.settings.read();
  return {
    title: { absolute: "✧ intheloop ✧" },
    description: settings?.description || undefined,
    alternates: { canonical: "/" },
  };
}

export default async function LandingPage() {
  const [home, settings, projectEntries] = await Promise.all([
    reader.singletons.home.readOrThrow(),
    reader.singletons.settings.readOrThrow(),
    reader.collections.projects.all(),
  ]);
  const projects = projectEntries
    .map((p) => p.entry)
    .sort((a, b) => a.number.localeCompare(b.number));
  const workCount = String(projects.length).padStart(2, "0");

  return (
    <Frame>
      <TopBar />

      {/* hero: full screen, image-backed */}
      <div style={{ position: "relative", width: "100%", height: "100vh", minHeight: 680, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div data-parallax="0.05" style={{ position: "absolute", inset: 0 }}>
          <div style={{ position: "absolute", left: "-5%", top: "-7%", width: "110%", height: "120%", background: "#0c0e10 url('/uploads/hero.png') center/cover no-repeat", filter: "grayscale(.32) saturate(.82) brightness(.96)", animation: "kenburns 38s ease-in-out infinite alternate" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,#0c0e10 6%,rgba(12,14,16,.74) 42%,rgba(12,14,16,.64) 72%,rgba(12,14,16,.82))" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 90% at 50% 30%,rgba(12,14,16,.2),rgba(12,14,16,.7))", mixBlendMode: "multiply" }} />
        <div data-parallax="0.07" style={{ position: "absolute", top: "5%", right: 30, pointerEvents: "none", userSelect: "none" }}>
          <span style={{ display: "inline-block", fontFamily: BLACKLETTER, fontSize: "clamp(170px,24vw,360px)", lineHeight: 1, color: "rgba(96,110,120,.12)", animation: "floaty 11s ease-in-out infinite" }}>il</span>
        </div>
        <div className="il-px" style={{ position: "relative", zIndex: 2, maxWidth: 1320, margin: "0 auto", width: "100%", padding: "0 40px 15vh" }}>
          <div data-reveal="" style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: "#b4b9bf", display: "flex", gap: 16, alignItems: "center" }}>
            <span style={{ width: 46, height: 1, background: "#7d8a92", display: "inline-block" }} />
            {home.heroEyebrow}
          </div>
          <h1 data-reveal="" style={{ fontWeight: 400, fontSize: "clamp(52px,8.6vw,138px)", lineHeight: ".95", letterSpacing: "-.015em", marginTop: 28, maxWidth: "15ch", textShadow: "0 2px 40px rgba(12,14,16,.6)" }}>
            {accent(home.heroHeading)}
          </h1>
          <p data-reveal="" style={{ fontFamily: MONO, fontSize: 13, lineHeight: 1.9, color: "#c2c6cb", maxWidth: "54ch", marginTop: 30 }}>
            {home.heroSubcopy}
          </p>
        </div>
      </div>

      {/* ABOUT */}
      <div id="about" className="il-px il-secpad" style={{ position: "relative", padding: "130px 40px 96px", maxWidth: 1320, margin: "0 auto", scrollMarginTop: 40 }}>
        <div data-reveal="" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#97a0a7", borderBottom: "1px solid rgba(230,230,226,.15)", paddingBottom: 14 }}>
          <span><span style={{ color: "#7d8a92" }}>❦</span>&nbsp; {home.aboutLabel}</span>
          <span>{home.aboutNumber}</span>
        </div>

        <div className="il-about" style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: 64, marginTop: 54, alignItems: "start" }}>
          <div>
            <h2 data-reveal="" style={{ fontWeight: 400, fontSize: "clamp(30px,3.6vw,52px)", lineHeight: 1.26, letterSpacing: "-.01em", maxWidth: "24ch" }}>
              {accent(home.aboutStatement)}
            </h2>
            <p data-reveal="" style={{ fontFamily: MONO, fontSize: 13, lineHeight: 2, color: "#c2c6cb", maxWidth: "52ch", marginTop: 30 }}>
              {home.aboutBody}
            </p>
            <p data-reveal="" style={{ fontFamily: MONO, fontSize: 13, lineHeight: 2, color: "#c2c6cb", maxWidth: "52ch", marginTop: 22 }}>
              Curious what&apos;s happening intheloop? The{" "}
              <Link href="/publishings" className="il-navlink" style={{ color: "#aeb9bf", textDecoration: "none" }}>publishings page</Link>{" "}
              gathers our case studies and articles, everything we&apos;re thinking through in the open.
            </p>
          </div>
          <div data-reveal="" className="il-about-aside" style={{ fontFamily: MONO, borderLeft: "1px solid rgba(230,230,226,.15)", paddingLeft: 34, display: "flex", flexDirection: "column", gap: 26 }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "#79838b", marginBottom: 7 }}>Founded</div>
              <div style={{ fontSize: 14, color: "#e6e6e2" }}>{home.founded}</div>
            </div>
            <div>
              <div style={{ fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "#79838b", marginBottom: 7 }}>Practice</div>
              <div style={{ fontSize: 14, color: "#e6e6e2", lineHeight: 1.7 }}>{lines(home.practice)}</div>
            </div>
            <div>
              <div style={{ fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "#79838b", marginBottom: 7 }}>Engagement</div>
              <div style={{ fontSize: 14, color: "#e6e6e2" }}>{home.engagement}</div>
            </div>
          </div>
        </div>

        {/* portal links */}
        <div className="il-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24, marginTop: 72 }}>
          <Link href="/publishings" data-reveal="" className="il-card" style={{ position: "relative", textDecoration: "none", color: "inherit", border: "1px solid rgba(230,230,226,.16)", background: "#15181b", overflow: "hidden", padding: "40px 38px 34px", minHeight: 262, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <span style={{ position: "absolute", top: 14, left: 15, width: 11, height: 11, borderLeft: "1px solid rgba(230,230,226,.34)", borderTop: "1px solid rgba(230,230,226,.34)" }} />
            <span style={{ position: "absolute", bottom: 14, right: 15, width: 11, height: 11, borderRight: "1px solid rgba(230,230,226,.34)", borderBottom: "1px solid rgba(230,230,226,.34)" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "#97a0a7" }}>
              <span>→ 01 / Index</span>
              <span style={{ color: "#7d8a92" }}>{workCount} works</span>
            </div>
            <div>
              <div style={{ fontSize: "clamp(38px,4.4vw,60px)", fontWeight: 400, letterSpacing: "-.015em", lineHeight: 1 }}>Publishings</div>
              <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: ".06em", color: "#b4b9bf", marginTop: 14, display: "flex", alignItems: "center", gap: 10 }}>Projects, case studies &amp; articles <span style={{ color: "#aeb9bf", fontSize: 15 }}>↗</span></div>
            </div>
          </Link>
          <Link href="/brand" data-reveal="" className="il-card" style={{ position: "relative", textDecoration: "none", color: "inherit", border: "1px solid rgba(230,230,226,.16)", background: "#15181b", overflow: "hidden", padding: "40px 38px 34px", minHeight: 262, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <span style={{ position: "absolute", top: 14, left: 15, width: 11, height: 11, borderLeft: "1px solid rgba(230,230,226,.34)", borderTop: "1px solid rgba(230,230,226,.34)" }} />
            <span style={{ position: "absolute", bottom: 14, right: 15, width: 11, height: 11, borderRight: "1px solid rgba(230,230,226,.34)", borderBottom: "1px solid rgba(230,230,226,.34)" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/il-seal.svg" alt="" style={{ position: "absolute", right: -26, bottom: -26, width: 170, opacity: 0.07 }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "#97a0a7" }}>
              <span>→ 02 / Identity</span>
              <span style={{ color: "#7d8a92" }}>Vol. 01</span>
            </div>
            <div>
              <div style={{ fontSize: "clamp(38px,4.4vw,60px)", fontWeight: 400, letterSpacing: "-.015em", lineHeight: 1 }}>Brand Book</div>
              <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: ".06em", color: "#b4b9bf", marginTop: 14, display: "flex", alignItems: "center", gap: 10 }}>Marks, type, colour &amp; voice <span style={{ color: "#aeb9bf", fontSize: 15 }}>↗</span></div>
            </div>
          </Link>
        </div>
      </div>

      {/* statement band: galaxy background */}
      <div style={{ position: "relative", margin: "80px 0", borderTop: "1px solid rgba(230,230,226,.15)", borderBottom: "1px solid rgba(230,230,226,.15)", overflow: "hidden" }}>
        <div data-parallax="0.08" style={{ position: "absolute", left: "-5%", top: "-18%", width: "110%", height: "136%", background: "#0c0e10 url('/uploads/galaxy.png') center/cover no-repeat", filter: "grayscale(.5) saturate(.62) brightness(.9) contrast(1.04)", animation: "kenburns 50s ease-in-out infinite alternate" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(95% 130% at 50% 50%,rgba(12,14,16,.18),rgba(12,14,16,.74))" }} />
        <div data-reveal="" className="il-px" style={{ position: "relative", padding: "118px 40px", maxWidth: 1320, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px 52px" }}>
          <span style={{ fontFamily: BLACKLETTER, fontSize: 88, color: "#aeb9bf", lineHeight: ".8" }}>A</span>
          <div style={{ fontSize: "clamp(26px,3vw,44px)", fontWeight: 400, letterSpacing: "-.005em", maxWidth: "22ch", fontStyle: "italic", color: "#e6e6e2" }}>{accent(home.bandQuote)}</div>
        </div>
      </div>

      {/* visual log */}
      <VisualLog />

      {/* contact */}
      <div id="contact" className="il-px" style={{ position: "relative", padding: "96px 40px 72px", maxWidth: 1320, margin: "68px auto 0", borderTop: "1px solid rgba(230,230,226,.15)", scrollMarginTop: 40 }}>
        <div data-reveal="" className="il-hide-sm" style={{ position: "absolute", top: 54, right: 40, fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#97a0a7" }}>[ Inquiries open ]</div>
        <h2 data-reveal="" style={{ fontSize: "clamp(56px,10vw,168px)", lineHeight: ".92", fontWeight: 400, letterSpacing: "-.02em" }}>{home.contactHeading}</h2>
        <div data-reveal="" style={{ display: "flex", flexWrap: "wrap", gap: 48, marginTop: 52, fontFamily: MONO, fontSize: 13, color: "#b4b9bf" }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "#79838b", marginBottom: 8 }}>Inquiries</div>
            <a href={`mailto:${settings.contactEmail}`} className="il-navlink" style={{ color: "#b4b9bf", textDecoration: "none" }}>{settings.contactEmail}</a>
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "#79838b", marginBottom: 8 }}>Based</div>
            {settings.location}
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "#79838b", marginBottom: 8 }}>Index</div>
            {settings.indexHandle}
          </div>
        </div>
        <div className="il-footrow" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 88, fontFamily: MONO, fontSize: 11, letterSpacing: ".06em", color: "#97a0a7" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
            <span style={{ letterSpacing: "-.01em" }}><span style={{ color: "#7d8a92" }}>[</span>{settings.studioName}<span style={{ color: "#7d8a92" }}>]</span></span>
            <span style={{ color: "#79838b" }}>© {settings.copyrightYear}</span>
          </span>
          <span>{settings.footerTagline}</span>
        </div>
      </div>
    </Frame>
  );
}
