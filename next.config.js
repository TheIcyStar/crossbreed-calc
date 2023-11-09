/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "placekitten.com",
                pathname: "/**"
            }
        ]
    }
}

module.exports = nextConfig
