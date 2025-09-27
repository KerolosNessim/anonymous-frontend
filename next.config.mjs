/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "anonymous-apis.up.railway.app",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
