/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    "192.168.29.194",
    "192.168.29.194:3000",
    "localhost:3000",
    "localhost",
    "127.0.0.1:3000",
    "127.0.0.1",
    "0.0.0.0",
    "0.0.0.0:3000",
  ],
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
