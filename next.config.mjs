/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // Required for GitHub Pages
    basePath: "/VictorChenCA.github.io",  // Ensure correct subdirectory
    assetPrefix: "/VictorChenCA.github.io/",  // Fix asset paths
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