/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The portfolio index was renamed to /publishings; 308 to preserve old inbound links + SEO.
      { source: "/portfolio", destination: "/publishings", permanent: true },
      { source: "/portfolio/:path*", destination: "/publishings/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
