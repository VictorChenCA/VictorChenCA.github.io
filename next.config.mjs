const nextConfig = {
    output: "export",  // Required for GitHub Pages
    basePath: "out",  // Set to an empty string to avoid incorrect subdirectory issues
    assetPrefix: "/out/",  // Ensures relative asset paths
    trailingSlash: true,  // Helps with proper routing
    images: {
        unoptimized: true,  // Required for static export
    },
};

export default nextConfig;