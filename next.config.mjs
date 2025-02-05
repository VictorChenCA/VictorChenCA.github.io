const nextConfig = {
    output: "export",  // Required for GitHub Pages
    basePath: "my-site",  // Set to an empty string to avoid incorrect subdirectory issues
    assetPrefix: "/my-site/",  // Ensures relative asset paths
    trailingSlash: true,  // Helps with proper routing
    images: {
        unoptimized: true,  // Required for static export
    },
};

export default nextConfig;