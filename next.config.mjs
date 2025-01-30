let userConfig = undefined;
try {
    userConfig = await import("./v0-user-next.config");
} catch (e) {
    // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/VictorChenCA.github.io",
    assetPrefix: "/VictorChenCA.github.io",
    images: {
        unoptimized: true,
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
        if (
            typeof nextConfig[key] === "object" &&
            !Array.isArray(nextConfig[key])
        ) {
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
