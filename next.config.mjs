/** @type {import('next').NextConfig} */
const nextConfig = {
  // just to make sure we get o/p on console one time by turning off restrict mode
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "ap-south-1.graphassets.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      // { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
