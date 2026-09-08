/** @type {import('next').NextConfig} */

const isGitHubPages =
  process.env.GITHUB_ACTIONS === "true";

const basePath = isGitHubPages
  ? "/pangasinan-heritage"
  : "";

const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath,

  assetPrefix: basePath ? `${basePath}/` : "",

  trailingSlash: true,
};

export default nextConfig;