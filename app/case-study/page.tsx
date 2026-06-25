import type { Metadata } from "next";
import Link from "next/link";
import Frame from "@/components/Frame";
import TopBar from "@/components/TopBar";
import { MONO, BLACKLETTER } from "@/components/tokens";

export const metadata: Metadata = {
  title: "intheloop — Case Study № 001 · A coordination layer at planet scale",
  description:
    "Rebuilding the consensus and scheduling core beneath a globally distributed product — without a moment of downtime.",
};

export default function CaseStudyPage() {
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
          Case Study &nbsp;/&nbsp; № 001 — Infrastructure
        </div>
        <h1 data-reveal="" style={{ position: "relative", fontWeight: 400, fontSize: "clamp(48px,8vw,116px)", lineHeight: ".96", letterSpacing: "-.02em", marginTop: 26, maxWidth: "16ch" }}>
          A coordination layer at{" "}
          <em style={{ fontStyle: "italic", fontWeight: 400, color: "#c4a9e0" }}>planet</em> scale.
        </h1>
        <p data-reveal="" style={{ position: "relative", fontSize: "clamp(20px,2.2vw,28px)", lineHeight: 1.5, color: "#d7cee0", maxWidth: "40ch", marginTop: 30, fontStyle: "italic" }}>
          Rebuilding the consensus and scheduling core beneath a globally distributed product — without a moment of downtime.
        </p>

        {/* meta grid */}
        <div data-reveal="" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, marginTop: 64, borderTop: "1px solid rgba(233,226,211,.15)", fontFamily: MONO }}>
          {[
            ["Client", "Confidential · Infrastructure"],
            ["Year", "2025 — 2026"],
            ["Role", "Research · Engineering"],
            ["Duration", "18 months"],
          ].map(([label, value]) => (
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
      <div style={{ padding: "104px 40px 0", maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 48 }}>
          <div data-reveal="" style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#9a8ea4" }}>
            <span style={{ color: "#a585cf" }}>01</span>
            <br />Overview
          </div>
          <div style={{ maxWidth: "64ch" }}>
            <p data-reveal="" style={{ fontSize: "clamp(20px,2vw,26px)", lineHeight: 1.6, color: "#e9e2d3" }}>The client operated a product depended on across eleven regions, coordinated by a scheduling core that had grown faster than anyone had intended. It worked — until the day it almost didn&apos;t.</p>
            <p data-reveal="" style={{ fontSize: 18, lineHeight: 1.85, color: "#c2b7cd", marginTop: 26 }}>Over eighteen months we worked alongside their infrastructure team to rebuild that core from first principles: a consensus and scheduling layer that could be reasoned about precisely, tested deterministically, and operated by a small on-call rotation rather than a war room. The work touched everything from the replication protocol to the dashboards engineers stared at in the dark.</p>
            <p data-reveal="" style={{ fontSize: 18, lineHeight: 1.85, color: "#c2b7cd", marginTop: 22 }}>We did not set out to build the largest system — only the one that could be understood end to end by the people responsible for it. Every decision was weighed against a single question: when this fails at three in the morning, will the answer be obvious?</p>
          </div>
        </div>
      </div>

      {/* PULL QUOTE */}
      <div style={{ padding: "96px 40px", maxWidth: 1320, margin: "0 auto" }}>
        <blockquote data-reveal="" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "24px 40px", borderTop: "1px solid rgba(233,226,211,.15)", borderBottom: "1px solid rgba(233,226,211,.15)", padding: "72px 0" }}>
          <span style={{ fontFamily: BLACKLETTER, fontSize: 88, color: "#c4a9e0", lineHeight: ".7" }}>&ldquo;</span>
          <div style={{ fontSize: "clamp(26px,3.2vw,46px)", fontStyle: "italic", fontWeight: 400, lineHeight: 1.32, letterSpacing: "-.005em", maxWidth: "24ch", color: "#e9e2d3" }}>The hardest systems are not the fast ones. They are the ones a tired human can still trust.</div>
        </blockquote>
      </div>

      {/* CHALLENGE */}
      <div style={{ padding: "0 40px", maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 48 }}>
          <div data-reveal="" style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#9a8ea4" }}>
            <span style={{ color: "#a585cf" }}>02</span>
            <br />The Challenge
          </div>
          <div style={{ maxWidth: "64ch" }}>
            <p data-reveal="" style={{ fontSize: 18, lineHeight: 1.85, color: "#c2b7cd" }}>The original scheduler had been correct for the load it was born into. Five years of growth later, its failure modes had become folklore — known by a handful of engineers, undocumented, and triggered by combinations no one could fully enumerate.</p>
            <p data-reveal="" style={{ fontSize: 18, lineHeight: 1.85, color: "#c2b7cd", marginTop: 22 }}>Three constraints shaped the work. The system could never go fully offline. The migration had to be reversible at every step. And the result had to be teachable to an engineer in their first week, not their fifth year.</p>
          </div>
        </div>
      </div>

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
      <div style={{ padding: "104px 40px 0", maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 48 }}>
          <div data-reveal="" style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#9a8ea4" }}>
            <span style={{ color: "#a585cf" }}>03</span>
            <br />Approach
          </div>
          <div style={{ maxWidth: "64ch" }}>
            <p data-reveal="" style={{ fontSize: 18, lineHeight: 1.85, color: "#c2b7cd" }}>We moved in four phases, each one shippable on its own and each one reversible. Nothing was a leap; everything was a step that could be walked back before dawn.</p>
            <div style={{ marginTop: 34, display: "flex", flexDirection: "column", gap: 1, borderTop: "1px solid rgba(233,226,211,.14)" }}>
              {[
                ["01", "Model the system formally", "A specification first, so the failure modes were finite and named before any code changed."],
                ["02", "Shadow the live path", "The new core ran in parallel, deciding nothing, only proving it agreed with production."],
                ["03", "Cut over, region by region", "Traffic shifted in slices small enough that a rollback was a footnote, not an incident."],
                ["04", "Hand it back, legibly", "Runbooks, dashboards and a model the on-call team could hold in their heads."],
              ].map(([num, title, body]) => (
                <div key={num} data-reveal="" style={{ display: "grid", gridTemplateColumns: "54px 1fr", gap: 20, padding: "24px 0", borderBottom: "1px solid rgba(233,226,211,.12)" }}>
                  <div style={{ fontFamily: MONO, fontSize: 12, color: "#a585cf" }}>{num}</div>
                  <div>
                    <div style={{ fontSize: 22 }}>{title}</div>
                    <div style={{ fontSize: 16, lineHeight: 1.7, color: "#9a8ea4", marginTop: 6 }}>{body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* OUTCOME */}
      <div style={{ padding: "104px 40px 0", maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 48 }}>
          <div data-reveal="" style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#9a8ea4" }}>
            <span style={{ color: "#a585cf" }}>04</span>
            <br />Outcome
          </div>
          <div style={{ maxWidth: "64ch" }}>
            <p data-reveal="" style={{ fontSize: 18, lineHeight: 1.85, color: "#c2b7cd" }}>The cutover completed without a single second of planned downtime. More tellingly, the war room never reconvened — incidents that once took a room now take one engineer and a runbook.</p>
            <div data-reveal="" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 1, marginTop: 44, borderTop: "1px solid rgba(233,226,211,.15)" }}>
              {[
                ["99.99%", "Sustained availability"],
                ["4.2×", "Scheduling throughput"],
                ["−63%", "Tail latency, p99"],
                ["11", "Regions, zero rollbacks"],
              ].map(([stat, label]) => (
                <div key={label} style={{ padding: "28px 0", borderBottom: "1px solid rgba(233,226,211,.12)" }}>
                  <div style={{ fontSize: "clamp(40px,5vw,68px)", fontWeight: 400, letterSpacing: "-.02em", color: "#c4a9e0" }}>{stat}</div>
                  <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#82749a", marginTop: 8 }}>{label}</div>
                </div>
              ))}
            </div>
            <p data-reveal="" style={{ fontSize: 18, lineHeight: 1.85, color: "#c2b7cd", marginTop: 40 }}>A year on, the system is still operated by the team that inherited it — which, for infrastructure that quietly holds up a product, is the only metric that ever truly mattered.</p>
          </div>
        </div>
      </div>

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
              <div style={{ fontFamily: MONO, fontSize: 12, color: "#b3a6bf", marginTop: 12 }}>Research · 2026 ↗</div>
            </div>
          </Link>
        </div>
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
