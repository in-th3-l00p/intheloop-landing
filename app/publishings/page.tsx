import type { Metadata } from "next";
import Link from "next/link";
import Frame from "@/components/Frame";
import TopBar from "@/components/TopBar";
import PortfolioTabs, { type PortfolioTab } from "@/components/PortfolioTabs";
import { MONO, BLACKLETTER } from "@/components/tokens";
import { reader } from "@/lib/reader";

export const metadata: Metadata = {
  title: "Publishings",
  alternates: { canonical: "/publishings" },
  description:
    "A working index of the studio's practice: projects, case studies and writing on distributed systems, applied research, interface craft and the quiet tooling in between.",
};

const pad2 = (n: number) => String(n).padStart(2, "0");

function formatDate(value: string | null): string {
  if (!value) return "";
  const [y, m, d] = value.split("-");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const mi = Number(m) - 1;
  if (!y || mi < 0 || mi > 11) return value;
  return `${Number(d)} ${months[mi]} ${y}`;
}

export default async function PortfolioPage() {
  const [projectEntries, caseStudyEntries, articleEntries, settings] = await Promise.all([
    reader.collections.projects.all(),
    reader.collections.caseStudies.all(),
    reader.collections.articles.all(),
    reader.singletons.settings.readOrThrow(),
  ]);

  const projects = projectEntries
    .map((p) => p.entry)
    .sort((a, b) => a.number.localeCompare(b.number));

  const caseStudies = caseStudyEntries
    .map((c) => ({ slug: c.slug, ...c.entry }))
    .sort((a, b) => a.number.localeCompare(b.number));

  const articles = articleEntries
    .map((a) => ({ slug: a.slug, ...a.entry }))
    .sort((a, b) => (b.date || "").localeCompare(a.date || "") || a.number.localeCompare(b.number));

  const tabs: PortfolioTab[] = [
    {
      id: "projects",
      label: "Projects",
      count: pad2(projects.length),
      content: (
        <Section icon="❦" label="Projects" meta={`${pad2(projects.length)} works · ${settings.copyrightYear}`}>
          {projects.length === 0 ? (
            <EmptyState label="No projects yet" message="Selected project work will be catalogued here as it ships." />
          ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "38px 28px", marginTop: 42 }}>
            {projects.map((p) => {
              const tile = (
                <>
                  <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden", border: "1px solid rgba(233,226,211,.16)", background: "#15101c" }}>
                    <div className="il-projimg" style={{ width: "100%", height: "100%", backgroundImage: "repeating-linear-gradient(135deg,#1d1528 0 9px,#150e1f 9px 18px)", position: "relative" }}>
                      <span style={{ position: "absolute", top: 12, left: 12, width: 11, height: 11, borderLeft: "1px solid rgba(233,226,211,.42)", borderTop: "1px solid rgba(233,226,211,.42)" }} />
                      <span style={{ position: "absolute", bottom: 12, right: 12, width: 11, height: 11, borderRight: "1px solid rgba(233,226,211,.42)", borderBottom: "1px solid rgba(233,226,211,.42)" }} />
                      <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: "#6a5b7d" }}>＋</span>
                      <span style={{ position: "absolute", left: 13, bottom: 12, fontFamily: MONO, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "#82749a" }}>img / {p.kind}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 15 }}>
                    <div style={{ fontSize: 27, fontWeight: 500, letterSpacing: "-.005em" }}>{p.title}</div>
                    <div style={{ fontFamily: MONO, fontSize: 11, color: "#a585cf" }}>{p.number}</div>
                  </div>
                  <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "#9a8ea4", marginTop: 4 }}>{p.kind}</div>
                  {p.summary ? (
                    <div style={{ fontFamily: MONO, fontSize: 12, lineHeight: 1.7, color: "#b3a6bf", marginTop: 8 }}>{p.summary}</div>
                  ) : null}
                </>
              );
              return p.href ? (
                <Link key={p.number} href={p.href} data-reveal="" className="il-project" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                  {tile}
                </Link>
              ) : (
                <div key={p.number} data-reveal="" className="il-project" style={{ display: "block" }}>
                  {tile}
                </div>
              );
            })}
          </div>
          )}
        </Section>
      ),
    },
    {
      id: "case-studies",
      label: "Case Studies",
      count: pad2(caseStudies.length),
      content: (
        <Section icon="✠" label="Case studies" meta={`${pad2(caseStudies.length)} deep dives`}>
          {caseStudies.length === 0 ? (
            <EmptyState label="No case studies yet" message="In-depth write-ups of the studio's work are in progress and will land here." />
          ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "32px 28px", marginTop: 42 }}>
            {caseStudies.map((c) => (
              <Link key={c.slug} href={`/case-study/${c.slug}`} data-reveal="" className="il-project" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", border: "1px solid rgba(233,226,211,.16)", background: "#15101c" }}>
                  <div className="il-projimg" style={{ width: "100%", height: "100%", backgroundImage: "repeating-linear-gradient(135deg,#1d1528 0 11px,#150e1f 11px 22px)", position: "relative" }}>
                    <span style={{ position: "absolute", top: 12, left: 12, width: 11, height: 11, borderLeft: "1px solid rgba(233,226,211,.42)", borderTop: "1px solid rgba(233,226,211,.42)" }} />
                    <span style={{ position: "absolute", bottom: 12, right: 12, width: 11, height: 11, borderRight: "1px solid rgba(233,226,211,.42)", borderBottom: "1px solid rgba(233,226,211,.42)" }} />
                    <span style={{ position: "absolute", left: 13, bottom: 12, fontFamily: MONO, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "#82749a" }}>case film / {c.kind}</span>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontFamily: MONO, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#9a8ea4", marginTop: 16 }}>
                  <span>{c.kind}</span>
                  <span style={{ color: "#a585cf" }}>№ {c.number}</span>
                </div>
                <div style={{ fontSize: 30, fontWeight: 400, letterSpacing: "-.01em", lineHeight: 1.12, marginTop: 10, maxWidth: "20ch" }}>{c.title}</div>
                <div style={{ fontFamily: MONO, fontSize: 12, lineHeight: 1.7, color: "#b3a6bf", marginTop: 10, maxWidth: "46ch" }}>{c.subtitle}</div>
                <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".06em", color: "#82749a", marginTop: 12, display: "flex", alignItems: "center", gap: 10 }}>
                  {c.year} <span style={{ color: "#c4a9e0", fontSize: 14 }}>↗</span>
                </div>
              </Link>
            ))}
          </div>
          )}
        </Section>
      ),
    },
    {
      id: "articles",
      label: "Articles",
      count: pad2(articles.length),
      content: (
        <Section icon="❧" label="Articles" meta={`${pad2(articles.length)} pieces`}>
          {articles.length === 0 ? (
            <EmptyState label="No articles yet" message="Notes and essays from the studio will be published here soon." />
          ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 1, marginTop: 42, borderTop: "1px solid rgba(233,226,211,.14)" }}>
            {articles.map((a) => (
              <Link key={a.slug} href={`/articles/${a.slug}`} data-reveal="" className="il-row" style={{ display: "grid", gridTemplateColumns: "160px 1fr auto", gap: 28, alignItems: "baseline", padding: "30px 8px", textDecoration: "none", color: "inherit", borderBottom: "1px solid rgba(233,226,211,.12)" }}>
                <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#9a8ea4" }}>
                  <span style={{ color: "#a585cf" }}>№ {a.number}</span>
                  <br />
                  {a.kind}
                </div>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 400, letterSpacing: "-.01em", lineHeight: 1.15 }}>{a.title}</div>
                  <div style={{ fontFamily: MONO, fontSize: 12, lineHeight: 1.8, color: "#b3a6bf", marginTop: 10, maxWidth: "60ch" }}>{a.summary}</div>
                </div>
                <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".06em", color: "#82749a", textAlign: "right", whiteSpace: "nowrap" }}>
                  {formatDate(a.date)}
                  {a.readingTime ? <><br />{a.readingTime}</> : null}
                  <div style={{ color: "#c4a9e0", fontSize: 15, marginTop: 8 }}>↗</div>
                </div>
              </Link>
            ))}
          </div>
          )}
        </Section>
      ),
    },
  ];

  return (
    <Frame>
      <TopBar crumbs={[{ label: "Home", href: "/" }, { label: "Publishings" }]} />

      {/* header */}
      <div style={{ position: "relative", padding: "118px 40px 56px", maxWidth: 1320, margin: "0 auto", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-4%", right: 24, pointerEvents: "none", userSelect: "none" }}>
          <span style={{ display: "inline-block", fontFamily: BLACKLETTER, fontSize: "clamp(150px,20vw,300px)", lineHeight: 1, color: "rgba(124,95,166,.10)", animation: "floaty 11s ease-in-out infinite" }}>il</span>
        </div>
        <div data-reveal="" style={{ position: "relative", fontFamily: MONO, fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: "#b3a6bf", display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ width: 46, height: 1, background: "#a585cf", display: "inline-block" }} />
          Selected Work &nbsp;/&nbsp; № 001 · Index
        </div>
        <h1 data-reveal="" style={{ position: "relative", fontWeight: 400, fontSize: "clamp(52px,9vw,128px)", lineHeight: ".95", letterSpacing: "-.02em", marginTop: 26 }}>
          Selected <em style={{ fontStyle: "italic", fontWeight: 400, color: "#c4a9e0" }}>work</em>.
        </h1>
        <p data-reveal="" style={{ position: "relative", fontFamily: MONO, fontSize: 13, lineHeight: 1.9, color: "#c2b7cd", maxWidth: "56ch", marginTop: 28 }}>
          A working index of the studio&apos;s practice: projects, case studies and writing on distributed systems, applied research, interface craft and the quiet tooling in between.
        </p>
      </div>

      {/* tabbed lists */}
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <PortfolioTabs tabs={tabs} />
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
            <span><span style={{ color: "#a585cf" }}>[</span>{settings.studioName}<span style={{ color: "#a585cf" }}>]</span></span>
            <span style={{ color: "#82749a" }}>© {settings.copyrightYear}</span>
          </span>
          <span>{settings.footerTagline}</span>
        </div>
      </div>
    </Frame>
  );
}

// Section header (mono index label + count) shared by all three tab panels.
function Section({ icon, label, meta, children }: { icon: string; label: string; meta: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: "32px 40px 40px", maxWidth: 1320, margin: "0 auto" }}>
      <div data-reveal="" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#9a8ea4", borderBottom: "1px solid rgba(233,226,211,.15)", paddingBottom: 14 }}>
        <span><span style={{ color: "#a585cf" }}>{icon}</span> {label}</span>
        <span>{meta}</span>
      </div>
      {children}
    </div>
  );
}

// Quiet empty state shown in a tab whose collection has no entries yet.
function EmptyState({ label, message }: { label: string; message: string }) {
  return (
    <div
      data-reveal=""
      style={{
        position: "relative",
        marginTop: 42,
        border: "1px solid rgba(233,226,211,.16)",
        background: "#15101c",
        overflow: "hidden",
        padding: "92px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg,#1d1528 0 9px,#150e1f 9px 18px)", opacity: 0.4 }} />
      <span style={{ position: "absolute", top: 14, left: 15, width: 12, height: 12, borderLeft: "1px solid rgba(233,226,211,.34)", borderTop: "1px solid rgba(233,226,211,.34)" }} />
      <span style={{ position: "absolute", top: 14, right: 15, width: 12, height: 12, borderRight: "1px solid rgba(233,226,211,.34)", borderTop: "1px solid rgba(233,226,211,.34)" }} />
      <span style={{ position: "absolute", bottom: 14, left: 15, width: 12, height: 12, borderLeft: "1px solid rgba(233,226,211,.34)", borderBottom: "1px solid rgba(233,226,211,.34)" }} />
      <span style={{ position: "absolute", bottom: 14, right: 15, width: 12, height: 12, borderRight: "1px solid rgba(233,226,211,.34)", borderBottom: "1px solid rgba(233,226,211,.34)" }} />
      <span style={{ position: "relative", fontFamily: BLACKLETTER, fontSize: 72, lineHeight: 0.8, color: "#c4a9e0" }}>il</span>
      <div style={{ position: "relative", fontFamily: MONO, fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "#9a8ea4", marginTop: 26 }}>{label}</div>
      <p style={{ position: "relative", fontSize: 21, lineHeight: 1.5, fontStyle: "italic", color: "#c2b7cd", maxWidth: "38ch", marginTop: 12 }}>{message}</p>
    </div>
  );
}
