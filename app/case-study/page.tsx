import type { Metadata } from "next";
import Link from "next/link";
import Frame from "@/components/Frame";
import TopBar from "@/components/TopBar";
import { MONO, BLACKLETTER } from "@/components/tokens";
import { reader } from "@/lib/reader";
import { accent } from "@/lib/accent";

export const metadata: Metadata = {
  title: "intheloop — Case Study № 001 · A coordination layer at planet scale",
  alternates: { canonical: "/case-study" },
  description:
    "Rebuilding the consensus and scheduling core beneath a globally distributed product — without a moment of downtime.",
};

export default async function CaseStudyPage() {
  const [cs, settings] = await Promise.all([
    reader.singletons.caseStudy.readOrThrow(),
    reader.singletons.settings.readOrThrow(),
  ]);

  const meta: [string, string][] = [
    ["Client", cs.client],
    ["Year", cs.year],
    ["Role", cs.role],
    ["Duration", cs.duration],
  ];

  return (
    <Frame>
      <TopBar
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
          { label: "Distributed Systems" },
        ]}
      />

      {/* project header */}
      <div style={{ position: "relative", padding: "110px 40px 64px", maxWidth: 1320, margin: "0 auto", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-6%", right: 24, pointerEvents: "none", userSelect: "none" }}>
          <span style={{ display: "inline-block", fontFamily: BLACKLETTER, fontSize: "clamp(140px,18vw,280px)", lineHeight: 1, color: "rgba(124,95,166,.09)", animation: "floaty 11s ease-in-out infinite" }}>i</span>
        </div>
        <div data-reveal="" style={{ position: "relative", fontFamily: MONO, fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: "#b3a6bf", display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ width: 46, height: 1, background: "#a585cf", display: "inline-block" }} />
          {cs.eyebrow}
        </div>
        <h1 data-reveal="" style={{ position: "relative", fontWeight: 400, fontSize: "clamp(48px,8vw,116px)", lineHeight: ".96", letterSpacing: "-.02em", marginTop: 26, maxWidth: "16ch" }}>
          {accent(cs.heading)}
        </h1>
        <p data-reveal="" style={{ position: "relative", fontSize: "clamp(20px,2.2vw,28px)", lineHeight: 1.5, color: "#d7cee0", maxWidth: "40ch", marginTop: 30, fontStyle: "italic" }}>
          {cs.subtitle}
        </p>

        {/* meta grid */}
        <div data-reveal="" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, marginTop: 64, borderTop: "1px solid rgba(233,226,211,.15)", fontFamily: MONO }}>
          {meta.map(([label, value]) => (
            <div key={label} style={{ padding: "22px 0", borderBottom: "1px solid rgba(233,226,211,.12)" }}>
              <div style={{ fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "#82749a", marginBottom: 9 }}>{label}</div>
              <div style={{ fontSize: 14, color: "#e9e2d3" }}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* VIDEO PLACEHOLDER */}
      <div style={{ padding: "24px 40px 0", maxWidth: 1320, margin: "0 auto" }}>
        <div data-reveal="" style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", border: "1px solid rgba(233,226,211,.18)", background: "#15101c", backgroundImage: "repeating-linear-gradient(135deg,#1d1528 0 11px,#150e1f 11px 22px)" }}>
          <span style={{ position: "absolute", top: 14, left: 15, width: 13, height: 13, borderLeft: "1px solid rgba(233,226,211,.42)", borderTop: "1px solid rgba(233,226,211,.42)" }} />
          <span style={{ position: "absolute", top: 14, right: 15, width: 13, height: 13, borderRight: "1px solid rgba(233,226,211,.42)", borderTop: "1px solid rgba(233,226,211,.42)" }} />
          <span style={{ position: "absolute", bottom: 14, left: 15, width: 13, height: 13, borderLeft: "1px solid rgba(233,226,211,.42)", borderBottom: "1px solid rgba(233,226,211,.42)" }} />
          <span style={{ position: "absolute", bottom: 14, right: 15, width: 13, height: 13, borderRight: "1px solid rgba(233,226,211,.42)", borderBottom: "1px solid rgba(233,226,211,.42)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 22 }}>
            <div className="il-play" style={{ width: 92, height: 92, borderRadius: "50%", border: "1px solid rgba(233,226,211,.4)", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(14,10,20,.35)" }}>
              <span style={{ width: 0, height: 0, borderLeft: "20px solid #c4a9e0", borderTop: "12px solid transparent", borderBottom: "12px solid transparent", marginLeft: 6 }} />
            </div>
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#9a8ea4" }}>video / case film — 03:42</div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14, fontFamily: MONO, fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "#82749a" }}>
          <span>Fig. 01 — System walkthrough</span>
          <span>16 : 9 · drop film here</span>
        </div>
      </div>

      {/* OVERVIEW */}
      <Section number="01" label="Overview">
        {cs.overview.map((para, i) => (
          <p key={i} data-reveal="" style={i === 0
            ? { fontSize: "clamp(20px,2vw,26px)", lineHeight: 1.6, color: "#e9e2d3" }
            : { fontSize: 18, lineHeight: 1.85, color: "#c2b7cd", marginTop: i === 1 ? 26 : 22 }}>
            {para}
          </p>
        ))}
      </Section>

      {/* PULL QUOTE */}
      <div style={{ padding: "96px 40px", maxWidth: 1320, margin: "0 auto" }}>
        <blockquote data-reveal="" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "24px 40px", borderTop: "1px solid rgba(233,226,211,.15)", borderBottom: "1px solid rgba(233,226,211,.15)", padding: "72px 0" }}>
          <span style={{ fontFamily: BLACKLETTER, fontSize: 88, color: "#c4a9e0", lineHeight: ".7" }}>&ldquo;</span>
          <div style={{ fontSize: "clamp(26px,3.2vw,46px)", fontStyle: "italic", fontWeight: 400, lineHeight: 1.32, letterSpacing: "-.005em", maxWidth: "24ch", color: "#e9e2d3" }}>{cs.quote}</div>
        </blockquote>
      </div>

      {/* CHALLENGE */}
      <Section number="02" label="The Challenge" topBorder={false}>
        {cs.challenge.map((para, i) => (
          <p key={i} data-reveal="" style={{ fontSize: 18, lineHeight: 1.85, color: "#c2b7cd", marginTop: i === 0 ? 0 : 22 }}>
            {para}
          </p>
        ))}
      </Section>

      {/* TWO IMAGE PLACEHOLDERS */}
      <div style={{ padding: "72px 40px 0", maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
          {["img / architecture diagram", "img / control surface"].map((label) => (
            <div key={label} data-reveal="" style={{ position: "relative", aspectRatio: "4/3", border: "1px solid rgba(233,226,211,.16)", overflow: "hidden", backgroundImage: "repeating-linear-gradient(135deg,#1d1528 0 9px,#150e1f 9px 18px)" }}>
              <span style={{ position: "absolute", left: 13, bottom: 12, fontFamily: MONO, fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "#82749a" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* APPROACH */}
      <Section number="03" label="Approach">
        <p data-reveal="" style={{ fontSize: 18, lineHeight: 1.85, color: "#c2b7cd" }}>{cs.approachIntro}</p>
        <div style={{ marginTop: 34, display: "flex", flexDirection: "column", gap: 1, borderTop: "1px solid rgba(233,226,211,.14)" }}>
          {cs.approach.map((step) => (
            <div key={step.number} data-reveal="" style={{ display: "grid", gridTemplateColumns: "54px 1fr", gap: 20, padding: "24px 0", borderBottom: "1px solid rgba(233,226,211,.12)" }}>
              <div style={{ fontFamily: MONO, fontSize: 12, color: "#a585cf" }}>{step.number}</div>
              <div>
                <div style={{ fontSize: 22 }}>{step.title}</div>
                <div style={{ fontSize: 16, lineHeight: 1.7, color: "#9a8ea4", marginTop: 6 }}>{step.body}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* OUTCOME */}
      <Section number="04" label="Outcome">
        <p data-reveal="" style={{ fontSize: 18, lineHeight: 1.85, color: "#c2b7cd" }}>{cs.outcomeIntro}</p>
        <div data-reveal="" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 1, marginTop: 44, borderTop: "1px solid rgba(233,226,211,.15)" }}>
          {cs.stats.map((s) => (
            <div key={s.label} style={{ padding: "28px 0", borderBottom: "1px solid rgba(233,226,211,.12)" }}>
              <div style={{ fontSize: "clamp(40px,5vw,68px)", fontWeight: 400, letterSpacing: "-.02em", color: "#c4a9e0" }}>{s.value}</div>
              <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#82749a", marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>
        <p data-reveal="" style={{ fontSize: 18, lineHeight: 1.85, color: "#c2b7cd", marginTop: 40 }}>{cs.outcomeOutro}</p>
      </Section>

      {/* NEXT / FOOTER */}
      <div style={{ position: "relative", padding: "96px 40px 72px", maxWidth: 1320, margin: "96px auto 0", borderTop: "1px solid rgba(233,226,211,.15)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
          <Link href="/portfolio" data-reveal="" className="il-card" style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", textDecoration: "none", color: "inherit", border: "1px solid rgba(233,226,211,.16)", background: "#15101c", overflow: "hidden", padding: "34px 34px 28px", minHeight: 172 }}>
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "#9a8ea4" }}>← Index</div>
            <div>
              <div style={{ fontSize: "clamp(30px,3.4vw,44px)", fontWeight: 400, letterSpacing: "-.015em", lineHeight: 1 }}>All work</div>
              <div style={{ fontFamily: MONO, fontSize: 12, color: "#b3a6bf", marginTop: 12 }}>Back to portfolio</div>
            </div>
          </Link>
          <Link href="/case-study" data-reveal="" className="il-card" style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", textDecoration: "none", color: "inherit", border: "1px solid rgba(233,226,211,.16)", background: "#15101c", overflow: "hidden", padding: "34px 34px 28px", minHeight: 172 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "#9a8ea4" }}>
              <span>Next →</span>
              <span style={{ color: "#a585cf" }}>02</span>
            </div>
            <div>
              <div style={{ fontSize: "clamp(30px,3.4vw,44px)", fontWeight: 400, letterSpacing: "-.015em", lineHeight: 1 }}>Applied ML</div>
              <div style={{ fontFamily: MONO, fontSize: 12, color: "#b3a6bf", marginTop: 12 }}>Research · {cs.year.split("—").pop()?.trim() || cs.year} ↗</div>
            </div>
          </Link>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 64, fontFamily: MONO, fontSize: 11, letterSpacing: ".06em", color: "#9a8ea4" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
            <span><span style={{ color: "#a585cf" }}>[</span>{settings.studioName}<span style={{ color: "#a585cf" }}>]</span></span>
            <span style={{ color: "#82749a" }}>© {settings.copyrightYear}</span>
          </span>
          <span>{settings.footerTagline}</span>
        </div>
      </div>
    </Frame>
  );
}

// Shared two-column section scaffold (mono index label + body column)
function Section({
  number,
  label,
  topBorder = true,
  children,
}: {
  number: string;
  label: string;
  topBorder?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div style={{ padding: topBorder ? "104px 40px 0" : "0 40px", maxWidth: 1320, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 48 }}>
        <div data-reveal="" style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#9a8ea4" }}>
          <span style={{ color: "#a585cf" }}>{number}</span>
          <br />
          {label}
        </div>
        <div style={{ maxWidth: "64ch" }}>{children}</div>
      </div>
    </div>
  );
}
