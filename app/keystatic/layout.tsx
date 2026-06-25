// Keystatic renders its own full-page admin UI; this layout simply passes through
// so the site's dark page chrome doesn't wrap the editor.
export default function KeystaticLayout({ children }: { children: React.ReactNode }) {
  return children;
}
