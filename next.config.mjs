/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    legacyBrowsers: false, 
    optimizeCss: true, 
  },
  browserslist: [
    "last 2 Chrome versions",
    "last 2 Firefox versions",
    "last 2 Edge versions",
    "last 2 Safari versions"
  ],
  transpilePackages: [],
};

export default nextConfig;
