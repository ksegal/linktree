/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ugc.production.linktr.ee',
            },
        ],
    },
};

export default nextConfig;
