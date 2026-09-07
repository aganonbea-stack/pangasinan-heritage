/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath: "/pangasinan-heritage",

  trailingSlash: true,
};

export default nextConfig;