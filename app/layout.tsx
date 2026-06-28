import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, JetBrains_Mono, UnifrakturCook } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://intheloop.space";
const SITE_NAME = "intheloop";
const WORDMARK = "✧ intheloop ✧";
const DESCRIPTION =
  "intheloop is an independent studio for software development, research, consulting, and creative work, sitting between what is known and what comes next.";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: WORDMARK,
    template: `%s · ${WORDMARK}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "intheloop",
    "software studio",
    "research and development",
    "distributed systems",
    "applied machine learning",
    "consulting",
    "interface design",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: WORDMARK,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: WORDMARK,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0e10",
  colorScheme: "dark",
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
