let userConfig = undefined;
try {
    userConfig = await import("./v0-user-next.config");
} catch (e) {
    console.warn("User config not found, using default settings.");
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // Required for GitHub Pages
    basePath: "",
    assetPrefix: "/",  // Ensure trailing slash
    images: {
        unoptimized: true,  // Should be at the root level, not under experimental
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

function mergeConfig(nextConfig, userConfig) {
    if (!userConfig) {
        return nextConfig;
    }

    for (const key in userConfig) {
        if (key === "output") {
            console.warn(`Ignoring userConfig['output']: Next.js must use "export" for GitHub Pages.`);
            continue;
        }
        if (typeof nextConfig[key] === "object" && !Array.isArray(nextConfig[key])) {
            nextConfig[key] = {
                ...nextConfig[key],
                ...userConfig[key],
            };
        } else {
            nextConfig[key] = userConfig[key];
        }
    }
    return nextConfig;
}

export default mergeConfig(nextConfig, userConfig);
