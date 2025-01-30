let userConfig = undefined;
try {
    userConfig = await import("./v0-user-next.config");
} catch (e) {
    // Ignore error if the user config file doesn't exist
    console.warn("User config not found, using default settings.");
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // Ensures static export for GitHub Pages
    basePath: "/VictorChenCA.github.io",  // Correct base path
    assetPrefix: "/VictorChenCA.github.io/",  // Ensure trailing slash
    images: {
        unoptimized: true,  // Required for static exports
    },
    eslint: {
        ignoreDuringBuilds: true,  // Prevents ESLint from failing builds
    },
    typescript: {
        ignoreBuildErrors: true,  // Prevents TypeScript from failing builds
    },
    experimental: {
        webpackBuildWorker: true,
        parallelServerBuildTraces: true,
        parallelServerCompiles: true,
    },
};

// Merge user-defined configuration without overriding required settings
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
