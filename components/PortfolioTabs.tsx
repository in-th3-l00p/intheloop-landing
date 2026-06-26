"use client";

import { useEffect, useState, type ReactNode } from "react";
import { MONO } from "./tokens";

export type PortfolioTab = {
  id: string;
  label: string;
  count: string;
  content: ReactNode;
};

/**
 * Sticky tab navigation for the portfolio index. All three panels are rendered
 * server-side and live in the DOM (so the content is crawlable); this island only
 * toggles which one is visible. The active tab is mirrored to the URL hash so a
 * link like /portfolio#articles deep-links straight to that list.
 */
export default function PortfolioTabs({ tabs }: { tabs: PortfolioTab[] }) {
  const [active, setActive] = useState(tabs[0]?.id);

  useEffect(() => {
    const fromHash = window.location.hash.replace("#", "");
    if (fromHash && tabs.some((t) => t.id === fromHash)) setActive(fromHash);
    const onHash = () => {
      const id = window.location.hash.replace("#", "");
      if (id && tabs.some((t) => t.id === id)) setActive(id);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [tabs]);

  const select = (id: string) => {
    setActive(id);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 30,
          background: "rgba(14,10,20,.82)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(233,226,211,.15)",
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "0 40px",
            display: "flex",
            alignItems: "stretch",
            gap: 6,
            fontFamily: MONO,
            overflowX: "auto",
          }}
        >
          {tabs.map((t) => {
            const on = t.id === active;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => select(t.id)}
                aria-pressed={on}
                style={{
                  appearance: "none",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "20px 4px 18px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  whiteSpace: "nowrap",
                  fontFamily: MONO,
                  fontSize: 11,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: on ? "#e9e2d3" : "#82749a",
                  borderBottom: `2px solid ${on ? "#c4a9e0" : "transparent"}`,
                  marginRight: 22,
                  transition: "color .4s ease, border-color .4s ease",
                }}
                className="il-tab"
              >
                {t.label}
                <span style={{ fontSize: 10, color: on ? "#a585cf" : "#6a5b7d" }}>{t.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {tabs.map((t) => (
        <div key={t.id} id={t.id} hidden={t.id !== active} style={{ scrollMarginTop: 80 }}>
          {t.content}
        </div>
      ))}
    </>
  );
}
