/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ibb.co",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co", // ← also add this, ibb.co serves images from this subdomain
      },
    ],
  },
};

export default nextConfig;