import type { Metadata } from "next";
import Link from "next/link";
import Frame from "@/components/Frame";
import TopBar from "@/components/TopBar";
import VisualLog from "@/components/VisualLog";
import { MONO, BLACKLETTER } from "@/components/tokens";

export const metadata: Metadata = {
  title: "intheloop — Software at the edge of research and craft",
  description:
    "intheloop is an independent studio for software development, research, consulting, and creative work — sitting between what is known and what comes next.",
};

export default function LandingPage() {
  return (
    <Frame>
      <TopBar />

      {/* hero — full screen, image-backed */}
      <div style={{ position: "relative", width: "100%", height: "100vh", minHeight: 680, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        {/* full-bleed background field (parallax outer, ken-burns inner) */}
        <div data-parallax="0.05" style={{ position: "absolute", inset: 0 }}>
          <div style={{ position: "absolute", left: "-5%", top: "-7%", width: "110%", height: "120%", background: "#0e0a14 url('/uploads/hero.svg') center/cover no-repeat", animation: "kenburns 38s ease-in-out infinite alternate" }} />
        </div>
        {/* blend washes */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,#0e0a14 6%,rgba(14,10,20,.74) 42%,rgba(14,10,20,.64) 72%,rgba(14,10,20,.82))" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 90% at 50% 30%,rgba(14,10,20,.2),rgba(14,10,20,.7))", mixBlendMode: "multiply" }} />
        {/* blackletter watermark */}
        <div data-parallax="0.07" style={{ position: "absolute", top: "5%", right: 30, pointerEvents: "none", userSelect: "none" }}>
          <span style={{ display: "inline-block", fontFamily: BLACKLETTER, fontSize: "clamp(170px,24vw,360px)", lineHeight: 1, color: "rgba(124,95,166,.12)", animation: "floaty 11s ease-in-out infinite" }}>il</span>
        </div>
        {/* content */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1320, margin: "0 auto", width: "100%", padding: "0 40px 15vh" }}>
          <div data-reveal="" style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: "#b3a6bf", display: "flex", gap: 16, alignItems: "center" }}>
            <span style={{ width: 46, height: 1, background: "#a585cf", display: "inline-block" }} />
            Software R&amp;D Studio &nbsp;/&nbsp; № 001
          </div>
          <h1 data-reveal="" style={{ fontWeight: 400, fontSize: "clamp(52px,8.6vw,138px)", lineHeight: ".95", letterSpacing: "-.015em", marginTop: 28, maxWidth: "15ch", textShadow: "0 2px 40px rgba(14,10,20,.6)" }}>
            Software at the edge of <em style={{ fontStyle: "italic", fontWeight: 400, color: "#c4a9e0" }}>research</em> and <em style={{ fontStyle: "italic", fontWeight: 400, color: "#c4a9e0" }}>craft</em>.
          </h1>
          <p data-reveal="" style={{ fontFamily: MONO, fontSize: 13, lineHeight: 1.9, color: "#c2b7cd", maxWidth: "54ch", marginTop: 30 }}>
            intheloop is an independent studio for software development, research, consulting, and creative work — sitting between what is known and what comes next.
          </p>
        </div>
        {/* scroll cue */}
        <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", fontFamily: MONO, fontSize: 9, letterSpacing: ".24em", textTransform: "uppercase", color: "#82749a", display: "flex", flexDirection: "column", alignItems: "center", gap: 9 }}>
          Scroll
          <span style={{ width: 1, height: 32, background: "linear-gradient(#a585cf,transparent)", animation: "cue 2.4s ease-in-out infinite" }} />
        </div>
      </div>

      {/* ABOUT */}
      <div id="about" style={{ position: "relative", padding: "130px 40px 96px", maxWidth: 1320, margin: "0 auto", scrollMarginTop: 40 }}>
        <div data-reveal="" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#9a8ea4", borderBottom: "1px solid rgba(233,226,211,.15)", paddingBottom: 14 }}>
          <span><span style={{ color: "#a585cf" }}>❦</span>&nbsp; About — The Studio</span>
          <span>№ 002</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: 64, marginTop: 54, alignItems: "start" }}>
          {/* statement */}
          <div>
            <h2 data-reveal="" style={{ fontWeight: 400, fontSize: "clamp(30px,3.6vw,52px)", lineHeight: 1.26, letterSpacing: "-.01em", maxWidth: "24ch" }}>
              We work between disciplines — <em style={{ fontStyle: "italic", color: "#c4a9e0" }}>engineering</em>, <em style={{ fontStyle: "italic", color: "#c4a9e0" }}>research</em> and <em style={{ fontStyle: "italic", color: "#c4a9e0" }}>design</em> — where the most interesting problems tend to live.
            </h2>
            <p data-reveal="" style={{ fontFamily: MONO, fontSize: 13, lineHeight: 2, color: "#c2b7cd", maxWidth: "52ch", marginTop: 30 }}>
              intheloop is an independent studio. Every engagement begins with a question and ends with something built — distributed systems, applied research, interfaces, and the quiet tooling in between. We take on a small number of projects at a time, by invitation and referral.
            </p>
          </div>
          {/* meta column */}
          <div data-reveal="" style={{ fontFamily: MONO, borderLeft: "1px solid rgba(233,226,211,.15)", paddingLeft: 34, display: "flex", flexDirection: "column", gap: 26 }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "#82749a", marginBottom: 7 }}>Founded</div>
              <div style={{ fontSize: 14, color: "#e9e2d3" }}>2026 · Remote / Worldwide</div>
            </div>
            <div>
              <div style={{ fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "#82749a", marginBottom: 7 }}>Practice</div>
              <div style={{ fontSize: 14, color: "#e9e2d3", lineHeight: 1.7 }}>R&amp;D · Consulting<br />Development · Creative</div>
            </div>
            <div>
              <div style={{ fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "#82749a", marginBottom: 7 }}>Engagement</div>
              <div style={{ fontSize: 14, color: "#e9e2d3" }}>By invitation &amp; referral</div>
            </div>
          </div>
        </div>

        {/* portal links */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24, marginTop: 72 }}>
          {/* portfolio */}
          <Link href="/portfolio" data-reveal="" className="il-card" style={{ position: "relative", textDecoration: "none", color: "inherit", border: "1px solid rgba(233,226,211,.16)", background: "#15101c", overflow: "hidden", padding: "40px 38px 34px", minHeight: 262, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <span style={{ position: "absolute", top: 14, left: 15, width: 11, height: 11, borderLeft: "1px solid rgba(233,226,211,.34)", borderTop: "1px solid rgba(233,226,211,.34)" }} />
            <span style={{ position: "absolute", bottom: 14, right: 15, width: 11, height: 11, borderRight: "1px solid rgba(233,226,211,.34)", borderBottom: "1px solid rgba(233,226,211,.34)" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "#9a8ea4" }}>
              <span>→ 01 / Index</span>
              <span style={{ color: "#a585cf" }}>06 works</span>
            </div>
            <div>
              <div style={{ fontSize: "clamp(38px,4.4vw,60px)", fontWeight: 400, letterSpacing: "-.015em", lineHeight: 1 }}>Portfolio</div>
              <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: ".06em", color: "#b3a6bf", marginTop: 14, display: "flex", alignItems: "center", gap: 10 }}>Selected work, 2026 <span style={{ color: "#c4a9e0", fontSize: 15 }}>↗</span></div>
            </div>
          </Link>
          {/* brand book */}
          <Link href="/brand" data-reveal="" className="il-card" style={{ position: "relative", textDecoration: "none", color: "inherit", border: "1px solid rgba(233,226,211,.16)", background: "#15101c", overflow: "hidden", padding: "40px 38px 34px", minHeight: 262, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <span style={{ position: "absolute", top: 14, left: 15, width: 11, height: 11, borderLeft: "1px solid rgba(233,226,211,.34)", borderTop: "1px solid rgba(233,226,211,.34)" }} />
            <span style={{ position: "absolute", bottom: 14, right: 15, width: 11, height: 11, borderRight: "1px solid rgba(233,226,211,.34)", borderBottom: "1px solid rgba(233,226,211,.34)" }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/il-seal.svg" alt="" style={{ position: "absolute", right: -26, bottom: -26, width: 170, opacity: 0.07 }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "#9a8ea4" }}>
              <span>→ 02 / Identity</span>
              <span style={{ color: "#a585cf" }}>Vol. 01</span>
            </div>
            <div>
              <div style={{ fontSize: "clamp(38px,4.4vw,60px)", fontWeight: 400, letterSpacing: "-.015em", lineHeight: 1 }}>Brand Book</div>
              <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: ".06em", color: "#b3a6bf", marginTop: 14, display: "flex", alignItems: "center", gap: 10 }}>Marks, type, colour &amp; voice <span style={{ color: "#c4a9e0", fontSize: 15 }}>↗</span></div>
            </div>
          </Link>
        </div>
      </div>

      {/* statement band — galaxy background */}
      <div style={{ position: "relative", margin: "80px 0", borderTop: "1px solid rgba(233,226,211,.15)", borderBottom: "1px solid rgba(233,226,211,.15)", overflow: "hidden" }}>
        <div data-parallax="0.08" style={{ position: "absolute", left: "-5%", top: "-18%", width: "110%", height: "136%", background: "#0e0a14 url('/uploads/galaxy.svg') center/cover no-repeat", animation: "kenburns 50s ease-in-out infinite alternate" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(95% 130% at 50% 50%,rgba(14,10,20,.18),rgba(14,10,20,.74))" }} />
        <div data-reveal="" style={{ position: "relative", padding: "118px 40px", maxWidth: 1320, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px 52px" }}>
          <span style={{ fontFamily: BLACKLETTER, fontSize: 88, color: "#c4a9e0", lineHeight: ".8" }}>A</span>
          <div style={{ fontSize: "clamp(26px,3vw,44px)", fontWeight: 400, letterSpacing: "-.005em", maxWidth: "22ch", fontStyle: "italic", color: "#e9e2d3" }}>small studio, working quietly on hard problems — by invitation and referral.</div>
        </div>
      </div>

      {/* visual log */}
      <VisualLog />

      {/* contact */}
      <div id="contact" style={{ position: "relative", padding: "96px 40px 72px", maxWidth: 1320, margin: "68px auto 0", borderTop: "1px solid rgba(233,226,211,.15)", scrollMarginTop: 40 }}>
        <div data-reveal="" style={{ position: "absolute", top: 54, right: 40, fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#9a8ea4" }}>[ Inquiries open ]</div>
        <h2 data-reveal="" style={{ fontSize: "clamp(56px,10vw,168px)", lineHeight: ".92", fontWeight: 400, letterSpacing: "-.02em" }}>the world is yours</h2>
        <div data-reveal="" style={{ display: "flex", flexWrap: "wrap", gap: 48, marginTop: 52, fontFamily: MONO, fontSize: 13, color: "#b3a6bf" }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "#82749a", marginBottom: 8 }}>Inquiries</div>
            <a href="mailto:hello@intheloop.studio" className="il-navlink" style={{ color: "#b3a6bf", textDecoration: "none" }}>hello@intheloop.studio</a>
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "#82749a", marginBottom: 8 }}>Based</div>
            Remote / Worldwide
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "#82749a", marginBottom: 8 }}>Index</div>
            @intheloop
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 88, fontFamily: MONO, fontSize: 11, letterSpacing: ".06em", color: "#9a8ea4" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
            <span style={{ letterSpacing: "-.01em" }}><span style={{ color: "#a585cf" }}>[</span>intheloop<span style={{ color: "#a585cf" }}>]</span></span>
            <span style={{ color: "#82749a" }}>© 2026</span>
          </span>
          <span>Software Research &amp; Development</span>
        </div>
      </div>
    </Frame>
  );
}
