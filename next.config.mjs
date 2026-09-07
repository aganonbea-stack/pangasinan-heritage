/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath: isGithubActions ? "/pangasinan-heritage" : "",

  assetPrefix: isGithubActions ? "/pangasinan-heritage/" : "",

  trailingSlash: true,
};

export default nextConfig;