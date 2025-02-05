/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // Required for GitHub Pages
    basePath: "",  // Ensure correct subdirectory
    assetPrefix: "/",  // Fix asset paths
    trailingSlash: true,  // Ensures proper routing
    images: {
        unoptimized: true,  // Required for static export
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    experimental: {
        webpackBuildWorker: true,
        parallelServerBuildTraces: true,
        parallelServerCompiles: true,
    },
};

export default nextConfig;