/** @type {import('next').NextConfig} */
// Static export (GitHub Pages) only when building with STATIC_EXPORT=true.
// Default is server mode so the contact API + /admin dashboard work.
const isStatic = process.env.STATIC_EXPORT === "true";
const repo = "vaibhaw";

const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  ...(isStatic
    ? {
        output: "export",
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
