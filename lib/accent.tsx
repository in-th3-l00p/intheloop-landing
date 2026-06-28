import { Fragment, type CSSProperties, type ReactNode } from "react";

const ACCENT: CSSProperties = { fontStyle: "italic", fontWeight: 400, color: "#b79ae6" };

/**
 * Renders editor copy with *asterisk-wrapped* words shown in the amethyst italic
 * accent used throughout the site. Everything else is rendered as plain text.
 */
export function accent(text: string, style: CSSProperties = ACCENT): ReactNode {
  return text.split(/(\*[^*]+\*)/g).map((part, i) =>
    part.length > 2 && part.startsWith("*") && part.endsWith("*") ? (
      <em key={i} style={style}>
        {part.slice(1, -1)}
      </em>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

/** Renders multi-line copy, turning newlines into <br/>. */
export function lines(text: string): ReactNode {
  return text.split("\n").map((line, i, arr) => (
    <Fragment key={i}>
      {line}
      {i < arr.length - 1 ? <br /> : null}
    </Fragment>
  ));
}
