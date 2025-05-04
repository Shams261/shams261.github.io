import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static HTML export
  images: {
    unoptimized: true, // Required for static export
  },
  basePath:
    process.env.NODE_ENV === "production" ? "/my-portfolio.github.io" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/my-portfolio.github.io/" : "",
};

export default nextConfig;
