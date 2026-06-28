import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Frame from "@/components/Frame";
import TopBar from "@/components/TopBar";
import { MONO, BLACKLETTER } from "@/components/tokens";
import { reader } from "@/lib/reader";
import { accent } from "@/lib/accent";

type Params = { slug: string };

export async function generateStaticParams() {
  const entries = await reader.collections.caseStudies.list();
  return entries.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = await reader.collections.caseStudies.read(slug);
  if (!cs) return {};
  return {
    title: cs.title,
    alternates: { canonical: `/case-study/${slug}` },
    description: (cs.subtitle || "").replace(/\s+/g, " ").trim() || undefined,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const [cs, all, settings] = await Promise.all([
    reader.collections.caseStudies.read(slug),
    reader.collections.caseStudies.all(),
    reader.singletons.settings.readOrThrow(),
  ]);
  if (!cs) notFound();

  const ordered = all
    .map((c) => ({ slug: c.slug, ...c.entry }))
    .sort((a, b) => a.number.localeCompare(b.number));
  const idx = ordered.findIndex((c) => c.slug === slug);
  const next = ordered.length > 1 ? ordered[(idx + 1) % ordered.length] : null;

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
          { label: "Publishings", href: "/publishings" },
          { label: "Case Studies", href: "/publishings#case-studies" },
          { label: cs.kind },
        ]}
      />

      {/* project header */}
      <div className="il-px il-secpad" style={{ position: "relative", padding: "110px 40px 64px", maxWidth: 1320, margin: "0 auto", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-6%", right: 24, pointerEvents: "none", userSelect: "none" }}>
          <span style={{ display: "inline-block", fontFamily: BLACKLETTER, fontSize: "clamp(140px,18vw,280px)", lineHeight: 1, color: "rgba(96,110,120,.09)", animation: "floaty 11s ease-in-out infinite" }}>i</span>
        </div>
        <div data-reveal="" style={{ position: "relative", fontFamily: MONO, fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: "#b4b9bf", display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ width: 46, height: 1, background: "#9a78cf", display: "inline-block" }} />
          {cs.eyebrow}
        </div>
        <h1 data-reveal="" style={{ position: "relative", fontWeight: 400, fontSize: "clamp(48px,8vw,116px)", lineHeight: ".96", letterSpacing: "-.02em", marginTop: 26, maxWidth: "16ch" }}>
          {accent(cs.heading)}
        </h1>
        <p data-reveal="" style={{ position: "relative", fontSize: "clamp(20px,2.2vw,28px)", lineHeight: 1.5, color: "#d2d6da", maxWidth: "40ch", marginTop: 30, fontStyle: "italic" }}>
          {cs.subtitle}
        </p>

        {/* meta grid */}
        <div data-reveal="" className="il-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, marginTop: 64, borderTop: "1px solid rgba(230,230,226,.15)", fontFamily: MONO }}>
          {meta.map(([label, value]) => (
            <div key={label} style={{ padding: "22px 0", borderBottom: "1px solid rgba(230,230,226,.12)" }}>
              <div style={{ fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "#79838b", marginBottom: 9 }}>{label}</div>
              <div style={{ fontSize: 14, color: "#e6e6e2" }}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* VIDEO PLACEHOLDER */}
      <div className="il-px" style={{ padding: "24px 40px 0", maxWidth: 1320, margin: "0 auto" }}>
        <div data-reveal="" style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", border: "1px solid rgba(230,230,226,.18)", background: "#15181b", backgroundImage: "repeating-linear-gradient(135deg,#1e2329 0 11px,#14181c 11px 22px)" }}>
          <span style={{ position: "absolute", top: 14, left: 15, width: 13, height: 13, borderLeft: "1px solid rgba(230,230,226,.42)", borderTop: "1px solid rgba(230,230,226,.42)" }} />
          <span style={{ position: "absolute", top: 14, right: 15, width: 13, height: 13, borderRight: "1px solid rgba(230,230,226,.42)", borderTop: "1px solid rgba(230,230,226,.42)" }} />
          <span style={{ position: "absolute", bottom: 14, left: 15, width: 13, height: 13, borderLeft: "1px solid rgba(230,230,226,.42)", borderBottom: "1px solid rgba(230,230,226,.42)" }} />
          <span style={{ position: "absolute", bottom: 14, right: 15, width: 13, height: 13, borderRight: "1px solid rgba(230,230,226,.42)", borderBottom: "1px solid rgba(230,230,226,.42)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 22 }}>
            <div className="il-play" style={{ width: 92, height: 92, borderRadius: "50%", border: "1px solid rgba(230,230,226,.4)", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(12,14,16,.35)" }}>
              <span style={{ width: 0, height: 0, borderLeft: "20px solid #b79ae6", borderTop: "12px solid transparent", borderBottom: "12px solid transparent", marginLeft: 6 }} />
            </div>
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#97a0a7" }}>video / case film · 03:42</div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14, fontFamily: MONO, fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "#79838b" }}>
          <span>Fig. 01 · System walkthrough</span>
          <span>16 : 9 · drop film here</span>
        </div>
      </div>

      {/* OVERVIEW */}
      <Section number="01" label="Overview">
        {cs.overview.map((para, i) => (
          <p key={i} data-reveal="" style={i === 0
            ? { fontSize: "clamp(20px,2vw,26px)", lineHeight: 1.6, color: "#e6e6e2" }
            : { fontSize: 18, lineHeight: 1.85, color: "#c2c6cb", marginTop: i === 1 ? 26 : 22 }}>
            {para}
          </p>
        ))}
      </Section>

      {/* PULL QUOTE */}
      <div className="il-px" style={{ padding: "96px 40px", maxWidth: 1320, margin: "0 auto" }}>
        <blockquote data-reveal="" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "24px 40px", borderTop: "1px solid rgba(230,230,226,.15)", borderBottom: "1px solid rgba(230,230,226,.15)", padding: "72px 0" }}>
          <span style={{ fontFamily: BLACKLETTER, fontSize: 88, color: "#b79ae6", lineHeight: ".7" }}>&ldquo;</span>
          <div style={{ fontSize: "clamp(26px,3.2vw,46px)", fontStyle: "italic", fontWeight: 400, lineHeight: 1.32, letterSpacing: "-.005em", maxWidth: "24ch", color: "#e6e6e2" }}>{cs.quote}</div>
        </blockquote>
      </div>

      {/* CHALLENGE */}
      <Section number="02" label="The Challenge" topBorder={false}>
        {cs.challenge.map((para, i) => (
          <p key={i} data-reveal="" style={{ fontSize: 18, lineHeight: 1.85, color: "#c2c6cb", marginTop: i === 0 ? 0 : 22 }}>
            {para}
          </p>
        ))}
      </Section>

      {/* TWO IMAGE PLACEHOLDERS */}
      <div className="il-px" style={{ padding: "72px 40px 0", maxWidth: 1320, margin: "0 auto" }}>
        <div className="il-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
          {["img / architecture diagram", "img / control surface"].map((label) => (
            <div key={label} data-reveal="" style={{ position: "relative", aspectRatio: "4/3", border: "1px solid rgba(230,230,226,.16)", overflow: "hidden", backgroundImage: "repeating-linear-gradient(135deg,#1e2329 0 9px,#14181c 9px 18px)" }}>
              <span style={{ position: "absolute", left: 13, bottom: 12, fontFamily: MONO, fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "#79838b" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* APPROACH */}
      <Section number="03" label="Approach">
        <p data-reveal="" style={{ fontSize: 18, lineHeight: 1.85, color: "#c2c6cb" }}>{cs.approachIntro}</p>
        <div style={{ marginTop: 34, display: "flex", flexDirection: "column", gap: 1, borderTop: "1px solid rgba(230,230,226,.14)" }}>
          {cs.approach.map((step) => (
            <div key={step.number} data-reveal="" style={{ display: "grid", gridTemplateColumns: "54px 1fr", gap: 20, padding: "24px 0", borderBottom: "1px solid rgba(230,230,226,.12)" }}>
              <div style={{ fontFamily: MONO, fontSize: 12, color: "#9a78cf" }}>{step.number}</div>
              <div>
                <div style={{ fontSize: 22 }}>{step.title}</div>
                <div style={{ fontSize: 16, lineHeight: 1.7, color: "#97a0a7", marginTop: 6 }}>{step.body}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* OUTCOME */}
      <Section number="04" label="Outcome">
        <p data-reveal="" style={{ fontSize: 18, lineHeight: 1.85, color: "#c2c6cb" }}>{cs.outcomeIntro}</p>
        <div data-reveal="" className="il-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 1, marginTop: 44, borderTop: "1px solid rgba(230,230,226,.15)" }}>
          {cs.stats.map((s) => (
            <div key={s.label} style={{ padding: "28px 0", borderBottom: "1px solid rgba(230,230,226,.12)" }}>
              <div style={{ fontSize: "clamp(40px,5vw,68px)", fontWeight: 400, letterSpacing: "-.02em", color: "#b79ae6" }}>{s.value}</div>
              <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#79838b", marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>
        <p data-reveal="" style={{ fontSize: 18, lineHeight: 1.85, color: "#c2c6cb", marginTop: 40 }}>{cs.outcomeOutro}</p>
      </Section>

      {/* NEXT / FOOTER */}
      <div className="il-px" style={{ position: "relative", padding: "96px 40px 72px", maxWidth: 1320, margin: "96px auto 0", borderTop: "1px solid rgba(230,230,226,.15)" }}>
        <div className="il-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
          <Link href="/publishings#case-studies" data-reveal="" className="il-card" style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", textDecoration: "none", color: "inherit", border: "1px solid rgba(230,230,226,.16)", background: "#15181b", overflow: "hidden", padding: "34px 34px 28px", minHeight: 172 }}>
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "#97a0a7" }}>← Index</div>
            <div>
              <div style={{ fontSize: "clamp(30px,3.4vw,44px)", fontWeight: 400, letterSpacing: "-.015em", lineHeight: 1 }}>All work</div>
              <div style={{ fontFamily: MONO, fontSize: 12, color: "#b4b9bf", marginTop: 12 }}>Back to publishings</div>
            </div>
          </Link>
          <Link href={next ? `/case-study/${next.slug}` : "/publishings#articles"} data-reveal="" className="il-card" style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", textDecoration: "none", color: "inherit", border: "1px solid rgba(230,230,226,.16)", background: "#15181b", overflow: "hidden", padding: "34px 34px 28px", minHeight: 172 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "#97a0a7" }}>
              <span>Next →</span>
              <span style={{ color: "#9a78cf" }}>{next ? `№ ${next.number}` : "Writing"}</span>
            </div>
            <div>
              <div style={{ fontSize: "clamp(30px,3.4vw,44px)", fontWeight: 400, letterSpacing: "-.015em", lineHeight: 1 }}>{next ? next.title : "Articles"}</div>
              <div style={{ fontFamily: MONO, fontSize: 12, color: "#b4b9bf", marginTop: 12 }}>{next ? `${next.kind} ↗` : "Read the writing ↗"}</div>
            </div>
          </Link>
        </div>
        <div className="il-footrow" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 64, fontFamily: MONO, fontSize: 11, letterSpacing: ".06em", color: "#97a0a7" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
            <span><span style={{ color: "#9a78cf" }}>[</span>{settings.studioName}<span style={{ color: "#9a78cf" }}>]</span></span>
            <span style={{ color: "#79838b" }}>© {settings.copyrightYear}</span>
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
    <div className="il-px" style={{ padding: topBorder ? "104px 40px 0" : "0 40px", maxWidth: 1320, margin: "0 auto" }}>
      <div className="il-stack-side" style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 48 }}>
        <div data-reveal="" style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#97a0a7" }}>
          <span style={{ color: "#9a78cf" }}>{number}</span>
          <br />
          {label}
        </div>
        <div style={{ maxWidth: "64ch" }}>{children}</div>
      </div>
    </div>
  );
}
