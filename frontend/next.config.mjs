/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['yukiosada.work', 'localhost:8000'], //ここにドメインを指定
    },
};

export default nextConfig;
