import Link from "next/link";

const SERIF = "var(--font-cormorant), serif";
const MONO = "var(--font-jetbrains), monospace";

export const metadata = {
  title: "intheloop — Portfolio",
};

export default function PortfolioPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#0e0a14", color: "#e9e2d3", fontFamily: SERIF, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28, padding: "40px", textAlign: "center" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "radial-gradient(rgba(180,164,200,.08) 1px,transparent 1px)", backgroundSize: "30px 30px" }} />
      <div style={{ position: "relative", fontFamily: MONO, fontSize: 11, letterSpacing: ".24em", textTransform: "uppercase", color: "#b3a6bf" }}>Portfolio · Index</div>
      <h1 style={{ position: "relative", fontWeight: 400, fontSize: "clamp(40px,7vw,84px)", lineHeight: ".98", letterSpacing: "-.02em", maxWidth: "16ch" }}>
        The full index is <em style={{ fontStyle: "italic", color: "#c4a9e0" }}>in progress.</em>
      </h1>
      <Link href="/" style={{ position: "relative", fontFamily: MONO, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "#9a8ea4", textDecoration: "none", borderBottom: "1px solid rgba(196,169,224,.5)", paddingBottom: 4 }}>
        ← Read case study № 001
      </Link>
    </div>
  );
}
