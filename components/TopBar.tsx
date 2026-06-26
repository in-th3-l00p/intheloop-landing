import { Fragment } from "react";
import Link from "next/link";
import { MONO } from "./tokens";

export type Crumb = { label: string; href?: string };

/**
 * Top navigation bar: the seal wordmark plus an optional breadcrumb trail.
 * The final crumb (no href) renders as the active lilac segment.
 */
export default function TopBar({ crumbs }: { crumbs?: Crumb[] }) {
  return (
    <div style={{ borderBottom: "1px solid rgba(233,226,211,.15)", fontFamily: MONO }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "22px 40px", display: "flex", alignItems: "center", gap: 22, flexWrap: "wrap" }}>
        <Link href="/" style={{ fontSize: 13, letterSpacing: ".04em", fontWeight: 500, display: "flex", alignItems: "center", gap: 11, textDecoration: "none", color: "inherit" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/il-seal.svg" alt="intheloop seal" style={{ width: 30, height: 30, display: "block" }} />
          ✧ intheloop ✧
        </Link>
        {crumbs && crumbs.length > 0 && (
          <>
            <span style={{ width: 1, height: 16, background: "rgba(233,226,211,.2)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", flexWrap: "wrap" }}>
              {crumbs.map((c, i) => (
                <Fragment key={c.label}>
                  {i > 0 && <span style={{ color: "#7c5fa6" }}>/</span>}
                  {c.href ? (
                    <Link href={c.href} className="il-navlink">{c.label}</Link>
                  ) : (
                    <span style={{ color: "#c4a9e0" }}>{c.label}</span>
                  )}
                </Fragment>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
