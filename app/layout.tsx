import type { Metadata } from "next";
import { Cormorant_Garamond, JetBrains_Mono, UnifrakturCook } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

const unifraktur = UnifrakturCook({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-unifraktur",
  display: "swap",
});

export const metadata: Metadata = {
  title: "intheloop — Case Study № 001 · A coordination layer at planet scale",
  description:
    "Rebuilding the consensus and scheduling core beneath a globally distributed product — without a moment of downtime.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${jetbrains.variable} ${unifraktur.variable}`}>
        {children}
      </body>
    </html>
  );
}
