/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: { appDir: true },
    images: {
        domains: [
            "moviesapi.ir","icon-icons.com"
        ]
    }
}

module.exports = nextConfig
