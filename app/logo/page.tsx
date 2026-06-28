import type { Metadata } from "next";
import Frame from "@/components/Frame";
import TopBar from "@/components/TopBar";
import { MONO, BLACKLETTER } from "@/components/tokens";

export const metadata: Metadata = {
  title: "Logo studies · MMXXVI",
  alternates: { canonical: "/logo" },
  description: "Six marks for intheloop. The name is the idea: a closed loop.",
};

export default function LogoPage() {
  return (
    <Frame>
      {/* top radial glow */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(120% 70% at 50% -10%,rgba(84,98,108,.16),transparent 60%)", zIndex: 0 }} />

      <TopBar crumbs={[{ label: "Home", href: "/" }, { label: "Logo" }]} />

      <div className="il-px" style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "56px 48px 80px" }}>
        {/* header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "6px 18px", borderBottom: "1px solid rgba(230,230,226,.15)", paddingBottom: 16, fontFamily: MONO }}>
          <div style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "#97a0a7" }}><span style={{ color: "#7d8a92" }}>❧</span> intheloop · Identity</div>
          <div style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "#97a0a7" }}>Logo studies / MMXXVI</div>
        </div>
        <h1 data-reveal="" style={{ fontWeight: 400, fontSize: "clamp(34px,5vw,64px)", letterSpacing: "-.01em", marginTop: 40, maxWidth: "20ch" }}>
          Six marks for <em style={{ fontStyle: "italic", color: "#aeb9bf" }}>intheloop</em>.
        </h1>
        <p data-reveal="" style={{ fontFamily: MONO, fontSize: 12, lineHeight: 1.8, color: "#97a0a7", maxWidth: "60ch", marginTop: 18 }}>
          The name is the idea: a closed loop. Each study reads the loop differently: as orbit, as monogram, as seal, as signal. Pick a direction and I&apos;ll refine it into a full lockup system.
        </p>

        {/* grid of marks */}
        <div className="il-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22, marginTop: 48 }}>
          {/* 01 · orbit */}
          <div data-reveal="" style={{ position: "relative", aspectRatio: "1/1", border: "1px solid rgba(230,230,226,.16)", background: "#13171a", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            <span style={cap}>01 · Orbit</span>
            <div style={{ position: "relative", width: 128, height: 128 }}>
              <div style={{ position: "absolute", inset: 0, border: "1.5px solid #aeb9bf", borderRadius: "50%" }} />
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", animation: "rot 14s linear infinite" }}>
                <div style={{ position: "absolute", top: -5, left: "50%", width: 10, height: 10, marginLeft: -5, borderRadius: "50%", background: "#7d8a92" }} />
              </div>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: MONO, fontWeight: 700, fontSize: 30, letterSpacing: "-.02em", color: "#e6e6e2" }}>il</div>
            </div>
          </div>

          {/* 02 · ligature */}
          <div data-reveal="" style={{ position: "relative", aspectRatio: "1/1", border: "1px solid rgba(230,230,226,.16)", background: "#13171a", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, overflow: "hidden" }}>
            <span style={cap}>02 · Ligature</span>
            <div style={{ fontSize: 46, letterSpacing: "-.02em", color: "#e6e6e2", lineHeight: 1 }}>
              in the l
              <span style={{ display: "inline-block", border: "2.5px solid #aeb9bf", borderRadius: "50%", width: 30, height: 30, verticalAlign: -4, margin: "0 -2px" }} />
              <span style={{ display: "inline-block", border: "2.5px solid #7d8a92", borderRadius: "50%", width: 30, height: 30, verticalAlign: -4, margin: "0 -2px" }} />
              p
            </div>
            <div style={{ fontFamily: MONO, fontSize: 9, letterSpacing: ".26em", textTransform: "uppercase", color: "#79838b" }}>the loop, drawn</div>
          </div>

          {/* 03 · seal */}
          <div data-reveal="" style={{ position: "relative", aspectRatio: "1/1", border: "1px solid rgba(230,230,226,.16)", background: "#13171a", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            <span style={cap}>03 · Seal</span>
            <div style={{ position: "relative", width: 150, height: 150, borderRadius: "50%", border: "1px solid rgba(174,185,191,.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "absolute", inset: 9, borderRadius: "50%", border: "1px solid rgba(174,185,191,.25)" }} />
              <div style={{ position: "absolute", inset: 0, animation: "rot 40s linear infinite", fontFamily: MONO, fontSize: 9, letterSpacing: ".34em", textTransform: "uppercase", color: "#97a0a7" }}>
                <div style={{ position: "absolute", top: 14, left: "50%", transform: "translateX(-50%)" }}>· software · research · development ·</div>
              </div>
              <div style={{ fontFamily: BLACKLETTER, fontSize: 60, color: "#e6e6e2", lineHeight: ".8" }}>il</div>
            </div>
          </div>

          {/* 04 · signal */}
          <div data-reveal="" style={{ position: "relative", aspectRatio: "1/1", border: "1px solid rgba(230,230,226,.16)", background: "#13171a", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            <span style={cap}>04 · Signal</span>
            <div style={{ fontFamily: MONO, fontWeight: 500, fontSize: 22, letterSpacing: "-.01em", color: "#e6e6e2", display: "flex", alignItems: "center", gap: 2 }}>
              <span style={{ color: "#7d8a92" }}>[</span>intheloop<span style={{ color: "#7d8a92" }}>]</span>
            </div>
          </div>

          {/* 05 · plate */}
          <div data-reveal="" style={{ position: "relative", aspectRatio: "1/1", border: "1px solid rgba(230,230,226,.16)", background: "#13171a", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            <span style={cap}>05 · Plate</span>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: MONO, fontSize: 9, letterSpacing: ".3em", textTransform: "uppercase", color: "#79838b" }}>est. mmxxvi</div>
              <div style={{ fontSize: 40, letterSpacing: "-.01em", color: "#e6e6e2", lineHeight: 1.05, margin: "6px 0" }}>intheloop</div>
              <div style={{ width: 54, height: 1, background: "#54636d", margin: "0 auto 6px" }} />
              <div style={{ fontFamily: MONO, fontSize: 9, letterSpacing: ".3em", textTransform: "uppercase", color: "#79838b" }}>software studio</div>
            </div>
          </div>

          {/* 06 · loop */}
          <div data-reveal="" style={{ position: "relative", aspectRatio: "1/1", border: "1px solid rgba(230,230,226,.16)", background: "#13171a", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 18, overflow: "hidden" }}>
            <span style={cap}>06 · Loop</span>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ width: 46, height: 46, border: "2.5px solid #aeb9bf", borderRadius: "50%" }} />
              <div style={{ width: 46, height: 46, border: "2.5px solid #7d8a92", borderRadius: "50%", marginLeft: -16 }} />
            </div>
            <div style={{ fontFamily: MONO, fontSize: 13, letterSpacing: ".04em", color: "#e6e6e2" }}>intheloop</div>
          </div>
        </div>

        {/* primary lockup feature */}
        <div data-reveal="" className="il-px" style={{ marginTop: 48, border: "1px solid rgba(230,230,226,.15)", background: "linear-gradient(180deg,#15191d,#0e1216)", padding: "72px 48px", display: "flex", alignItems: "center", justifyContent: "center", gap: 30, flexWrap: "wrap" }}>
          <div style={{ position: "relative", width: 64, height: 64, flex: "none" }}>
            <div style={{ position: "absolute", inset: 0, border: "2px solid #aeb9bf", borderRadius: "50%" }} />
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", animation: "rot 16s linear infinite" }}>
              <div style={{ position: "absolute", top: -4, left: "50%", width: 8, height: 8, marginLeft: -4, borderRadius: "50%", background: "#7d8a92" }} />
            </div>
          </div>
          <div style={{ fontSize: "clamp(40px,7vw,86px)", letterSpacing: "-.02em", color: "#e6e6e2", lineHeight: 1 }}>intheloop</div>
        </div>
        <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "#79838b", marginTop: 16, textAlign: "center" }}>Working primary lockup · orbit mark + wordmark</div>
      </div>
    </Frame>
  );
}

const cap: React.CSSProperties = {
  position: "absolute",
  top: 12,
  left: 13,
  fontFamily: MONO,
  fontSize: 10,
  letterSpacing: ".14em",
  textTransform: "uppercase",
  color: "#79838b",
};
