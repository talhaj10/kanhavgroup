/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/our-story",
        destination: "/about-us/our-story",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
