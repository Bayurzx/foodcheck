/** @type {import('next').NextConfig} */

const webpack = require('webpack');

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

    reactStrictMode: true,

    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                stream: require.resolve('stream-browserify'),
                crypto: require.resolve('crypto-browserify'),
            };

            config.plugins.push(
                new webpack.ProvidePlugin({
                    process: 'process/browser',
                }),
                new webpack.NormalModuleReplacementPlugin(
                    /node:crypto/,
                    (resource) => {
                        resource.request = resource.request.replace(/^node:/, '');
                    }
                )
            );
        }
        return config;
    },
};

module.exports = nextConfig;

