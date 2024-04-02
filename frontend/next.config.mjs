const API_URL = 'http://0.0.0.0:8787';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `${API_URL}/:path*`,
                basePath: false,
            },
        ];
    },
    images: {
        domains: ['127.0.0.1', 'localhost', '0.0.0.0', 'yukiosada.work'], //ここにドメインを指定
    },
};

export default nextConfig;
