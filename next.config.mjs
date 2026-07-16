/** @type {import('next').NextConfig} */
// Static export (GitHub Pages) only when building with STATIC_EXPORT=true.
// Default is server mode so the contact API + /admin dashboard work.
const isStatic = process.env.STATIC_EXPORT === "true";
const repo = "vaibhaw";
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath = configuredBasePath === "/" ? "" : configuredBasePath ?? `/${repo}`;

const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  ...(isStatic
    ? {
        output: "export",
        ...(basePath
          ? {
              basePath,
              assetPrefix: `${basePath}/`,
            }
          : {}),
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
