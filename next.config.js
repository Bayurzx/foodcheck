/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'example.com',
                port: '',
                pathname: '/account123/**',
            },
            {
                protocol: 'https',
                hostname: 'www.clker.com',
                port: '',
                pathname: '/cliparts/h/z/Z/5/f/x/**',
            },
        ],
    },

}

module.exports = nextConfig
