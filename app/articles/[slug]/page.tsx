import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Frame from "@/components/Frame";
import TopBar from "@/components/TopBar";
import { MONO, BLACKLETTER } from "@/components/tokens";
import { reader } from "@/lib/reader";
import { accent } from "@/lib/accent";

type Params = { slug: string };

function formatDate(value: string | null): string {
  if (!value) return "";
  const [y, m, d] = value.split("-");
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const mi = Number(m) - 1;
  if (!y || mi < 0 || mi > 11) return value;
  return `${Number(d)} ${months[mi]} ${y}`;
}

export async function generateStaticParams() {
  const slugs = await reader.collections.articles.list();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const a = await reader.collections.articles.read(slug);
  if (!a) return {};
  return {
    title: a.title,
    alternates: { canonical: `/articles/${slug}` },
    description: (a.summary || "").replace(/\s+/g, " ").trim() || undefined,
  };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const [article, all, settings] = await Promise.all([
    reader.collections.articles.read(slug),
    reader.collections.articles.all(),
    reader.singletons.settings.readOrThrow(),
  ]);
  if (!article) notFound();

  const ordered = all
    .map((a) => ({ slug: a.slug, ...a.entry }))
    .sort((a, b) => (b.date || "").localeCompare(a.date || "") || a.number.localeCompare(b.number));
  const idx = ordered.findIndex((a) => a.slug === slug);
  const next = ordered.length > 1 ? ordered[(idx + 1) % ordered.length] : null;

  return (
    <Frame>
      <TopBar
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Publishings", href: "/publishings" },
          { label: "Articles", href: "/publishings#articles" },
          { label: article.kind },
        ]}
      />

      {/* header */}
      <div className="il-px il-secpad" style={{ position: "relative", padding: "110px 40px 56px", maxWidth: 1320, margin: "0 auto", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-8%", right: -10, pointerEvents: "none", userSelect: "none" }}>
          <span style={{ display: "inline-block", fontFamily: BLACKLETTER, fontSize: "clamp(130px,16vw,240px)", lineHeight: 1, color: "rgba(124,95,166,.08)", animation: "floaty 11s ease-in-out infinite" }}>¶</span>
        </div>
        <div data-reveal="" style={{ position: "relative", fontFamily: MONO, fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: "#b3a6bf", display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ width: 46, height: 1, background: "#a585cf", display: "inline-block" }} />
          {article.kind} &nbsp;/&nbsp; № {article.number}
        </div>
        <h1 data-reveal="" style={{ position: "relative", fontWeight: 400, fontSize: "clamp(40px,6.4vw,86px)", lineHeight: "1.02", letterSpacing: "-.02em", marginTop: 24, maxWidth: "18ch" }}>
          {accent(article.title)}
        </h1>
        {article.summary ? (
          <p data-reveal="" style={{ position: "relative", fontSize: "clamp(19px,2vw,25px)", lineHeight: 1.55, color: "#d7cee0", maxWidth: "44ch", marginTop: 26, fontStyle: "italic" }}>
            {article.summary}
          </p>
        ) : null}
        <div data-reveal="" style={{ display: "flex", flexWrap: "wrap", gap: 28, marginTop: 36, fontFamily: MONO, fontSize: 11, letterSpacing: ".06em", color: "#82749a" }}>
          {article.date ? <span>{formatDate(article.date)}</span> : null}
          {article.readingTime ? <span>{article.readingTime}</span> : null}
        </div>
      </div>

      {/* body */}
      <div className="il-px" style={{ maxWidth: 1320, margin: "0 auto", padding: "0 40px 40px" }}>
        <article style={{ maxWidth: "64ch" }}>
          {article.body.map((block, i) => (
            <Block key={i} type={block.type} text={block.text} />
          ))}
        </article>
      </div>

      {/* footer */}
      <div className="il-px" style={{ position: "relative", maxWidth: 1320, margin: "72px auto 0", padding: "56px 40px 72px", borderTop: "1px solid rgba(233,226,211,.15)" }}>
        <div className="il-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
          <Link href="/publishings#articles" data-reveal="" className="il-card" style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", textDecoration: "none", color: "inherit", border: "1px solid rgba(233,226,211,.16)", background: "#15101c", overflow: "hidden", padding: "30px 30px 24px", minHeight: 156 }}>
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "#9a8ea4" }}>← Index</div>
            <div>
              <div style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 400, letterSpacing: "-.015em", lineHeight: 1 }}>All articles</div>
              <div style={{ fontFamily: MONO, fontSize: 12, color: "#b3a6bf", marginTop: 10 }}>Back to the index</div>
            </div>
          </Link>
          {next ? (
            <Link href={`/articles/${next.slug}`} data-reveal="" className="il-card" style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", textDecoration: "none", color: "inherit", border: "1px solid rgba(233,226,211,.16)", background: "#15101c", overflow: "hidden", padding: "30px 30px 24px", minHeight: 156 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "#9a8ea4" }}>
                <span>Next →</span>
                <span style={{ color: "#a585cf" }}>№ {next.number}</span>
              </div>
              <div>
                <div style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 400, letterSpacing: "-.015em", lineHeight: 1.04 }}>{next.title}</div>
                <div style={{ fontFamily: MONO, fontSize: 12, color: "#b3a6bf", marginTop: 10 }}>{next.kind} ↗</div>
              </div>
            </Link>
          ) : (
            <Link href="/#contact" data-reveal="" className="il-card" style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", textDecoration: "none", color: "inherit", border: "1px solid rgba(233,226,211,.16)", background: "#15101c", overflow: "hidden", padding: "30px 30px 24px", minHeight: 156 }}>
              <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "#9a8ea4" }}>Inquiries →</div>
              <div>
                <div style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 400, letterSpacing: "-.015em", lineHeight: 1 }}>Get in touch</div>
                <div style={{ fontFamily: MONO, fontSize: 12, color: "#b3a6bf", marginTop: 10 }}>The studio ↗</div>
              </div>
            </Link>
          )}
        </div>
        <div className="il-footrow" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 56, fontFamily: MONO, fontSize: 11, letterSpacing: ".06em", color: "#9a8ea4" }}>
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

// Renders one body block. Paragraphs and quotes honour the *asterisk* lilac accent.
function Block({ type, text }: { type: string; text: string }) {
  if (type === "heading") {
    return (
      <h2 data-reveal="" style={{ fontSize: "clamp(26px,3.2vw,38px)", fontWeight: 400, letterSpacing: "-.01em", lineHeight: 1.2, color: "#e9e2d3", margin: "52px 0 4px" }}>
        {text}
      </h2>
    );
  }
  if (type === "quote") {
    return (
      <blockquote data-reveal="" style={{ borderLeft: "2px solid #6c4f93", padding: "6px 0 6px 26px", margin: "40px 0" }}>
        <div style={{ fontSize: "clamp(22px,2.6vw,30px)", fontStyle: "italic", fontWeight: 400, lineHeight: 1.4, color: "#e9e2d3" }}>{accent(text)}</div>
      </blockquote>
    );
  }
  if (type === "code") {
    return (
      <pre data-reveal="" style={{ fontFamily: MONO, fontSize: 13, lineHeight: 1.8, color: "#cdbfe0", background: "#15101c", border: "1px solid rgba(233,226,211,.14)", borderRadius: 0, padding: "20px 22px", margin: "32px 0", overflowX: "auto" }}>
        <code>{text}</code>
      </pre>
    );
  }
  return (
    <p data-reveal="" style={{ fontSize: 18, lineHeight: 1.9, color: "#c8bdd4", margin: "24px 0" }}>
      {accent(text)}
    </p>
  );
}
