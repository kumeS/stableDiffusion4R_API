/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['127.0.0.1', 'yukiosada.work'], //ここにドメインを指定
    },
};

export default nextConfig;
