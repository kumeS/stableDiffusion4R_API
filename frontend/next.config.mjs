/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['yukiosada.work'], //ここにドメインを指定
    },
};

export default nextConfig;
