import type { ReactNode } from "react";
import ScrollEffects from "./ScrollEffects";
import { SERIF } from "./tokens";

/**
 * Shared page chrome: aubergine ground, ambient dot-grid, fixed corner
 * crosshairs, the scroll-progress bar, and the scroll-effects runtime.
 * Page content renders in the z-indexed inner layer.
 */
export default function Frame({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        background: "#0e0a14",
        color: "#e9e2d3",
        fontFamily: SERIF,
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      <ScrollEffects />

      {/* ambient dot-grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: "radial-gradient(rgba(180,164,200,.08) 1px,transparent 1px)",
          backgroundSize: "30px 30px",
          zIndex: 0,
        }}
      />

      {/* corner crosshairs */}
      <div style={{ position: "fixed", top: 14, left: 14, width: 14, height: 14, borderLeft: "1px solid rgba(233,226,211,.38)", borderTop: "1px solid rgba(233,226,211,.38)", zIndex: 40, pointerEvents: "none" }} />
      <div style={{ position: "fixed", top: 14, right: 14, width: 14, height: 14, borderRight: "1px solid rgba(233,226,211,.38)", borderTop: "1px solid rgba(233,226,211,.38)", zIndex: 40, pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: 14, left: 14, width: 14, height: 14, borderLeft: "1px solid rgba(233,226,211,.38)", borderBottom: "1px solid rgba(233,226,211,.38)", zIndex: 40, pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: 14, right: 14, width: 14, height: 14, borderRight: "1px solid rgba(233,226,211,.38)", borderBottom: "1px solid rgba(233,226,211,.38)", zIndex: 40, pointerEvents: "none" }} />

      {/* scroll progress */}
      <div
        data-progress=""
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 2,
          width: "0%",
          background: "linear-gradient(90deg,#7c5fa6,#c4a9e0)",
          zIndex: 50,
          pointerEvents: "none",
          boxShadow: "0 0 12px rgba(196,169,224,.6)",
          transition: "width .12s linear",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}
