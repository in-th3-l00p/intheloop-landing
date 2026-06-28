import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "✧ intheloop ✧",
    short_name: "intheloop",
    description:
      "intheloop is an independent studio for software development, research, consulting, and creative work, sitting between what is known and what comes next.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0e10",
    theme_color: "#0c0e10",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
