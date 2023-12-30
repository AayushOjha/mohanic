/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    path: "https://res.cloudinary.com/",
  },
};

module.exports = nextConfig;
