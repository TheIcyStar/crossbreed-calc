/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "http",
                hostname: "placekitten.com",
                pathname: "/**"
            }
        ]
    },

    // Used guide: https://github.com/gregrickaby/nextjs-github-pages
    output: "export",
    basePath: "/gh-pages",

}

module.exports = nextConfig
