/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "anonymous-apis.up.railway.app",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api-production-2e45.up.railway.app",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "api-production-2e45.up.railway.app",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
