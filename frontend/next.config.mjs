/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['yukiosada.work', '127.0.0.1:8000', 'oaidalleapiprodscus.blob.core.windows.net'], //ここにドメインを指定
    },
};

export default nextConfig;
