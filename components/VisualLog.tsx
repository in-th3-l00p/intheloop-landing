"use client";

import { useEffect, useRef } from "react";
import { MONO } from "./tokens";

const SRC = "/assets/visual-log.png";

// 8 plates: a 2×2 hero plate (top-left) followed by single cells, matching the
// design's poly-grid. One image is sliced across all cells so they read as a
// single field seen through a grid of windows.
const CELLS = Array.from({ length: 8 });

/**
 * Visual-log gallery — slices a single image across an 8-cell grid by computing
 * each cell's background offset (cover-fit, no stretch). Ported from the design's
 * _applyBg routine; re-lays out on resize and after the image loads.
 */
export default function VisualLog() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cells = [...grid.querySelectorAll<HTMLElement>("[data-pcell]")];
    const img = new Image();
    img.src = SRC;

    const layout = () => {
      const gw = grid.clientWidth;
      const gh = grid.clientHeight;
      const iw = img.naturalWidth || 1774;
      const ih = img.naturalHeight || 887;
      const scale = Math.max(gw / iw, gh / ih); // cover
      const bw = iw * scale;
      const bh = ih * scale;
      const ox = (gw - bw) / 2;
      const oy = (gh - bh) / 2;
      cells.forEach((c) => {
        c.style.backgroundImage = `url('${SRC}')`;
        c.style.backgroundRepeat = "no-repeat";
        c.style.backgroundSize = `${bw}px ${bh}px`;
        c.style.backgroundPosition = `${ox - c.offsetLeft}px ${oy - c.offsetTop}px`;
      });
    };

    if (img.complete && img.naturalWidth) layout();
    else img.onload = layout;
    window.addEventListener("resize", layout);
    return () => window.removeEventListener("resize", layout);
  }, []);

  return (
    <div style={{ padding: "84px 40px 40px", maxWidth: 1320, margin: "0 auto", paddingTop: 40 }}>
      <div
        data-reveal=""
        style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontFamily: MONO, fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#9a8ea4", borderBottom: "1px solid rgba(233,226,211,.15)", paddingBottom: 14, marginBottom: 34 }}
      >
        <span><span style={{ color: "#a585cf" }}>✠</span>&nbsp; Visual Log</span>
      </div>
      <div
        ref={gridRef}
        style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gridTemplateRows: "repeat(2,210px)", gap: 16 }}
      >
        {CELLS.map((_, i) => (
          <div
            key={i}
            data-pcell=""
            data-reveal=""
            className="il-plate"
            style={{ position: "relative", overflow: "hidden", border: "1px solid rgba(233,226,211,.16)", backgroundColor: "#15101c", transition: "filter .8s ease" }}
          >
            <span style={{ position: "absolute", top: 10, left: 11, width: 9, height: 9, borderLeft: "1px solid rgba(233,226,211,.3)", borderTop: "1px solid rgba(233,226,211,.3)", pointerEvents: "none", zIndex: 2 }} />
            <span style={{ position: "absolute", bottom: 10, right: 11, width: 9, height: 9, borderRight: "1px solid rgba(233,226,211,.3)", borderBottom: "1px solid rgba(233,226,211,.3)", pointerEvents: "none", zIndex: 2 }} />
          </div>
        ))}
      </div>
    </div>
  );
}
