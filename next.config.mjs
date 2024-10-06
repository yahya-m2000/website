/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "via.placeholder.com",
      "images.ctfassets.net",
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;
