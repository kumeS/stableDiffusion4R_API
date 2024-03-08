import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'stableDiffusion4R',
    description: `stableDiffusion4R is an R interface to "Stable Diffusion" APIs, and additional APIs, for AI-driven creative image transformations. This page guides you in using the stableDiffusion4R's API."`,
    category: 'technology',
    icons: {
        icon: '/og-image.png',
        shortcut: '/og-image.png',
        apple: '/og-image.png',
        other: {
            rel: 'apple-touch-icon-precomposed',
            url: '/og-image.png',
        },
    },
    openGraph: {
        title: 'stableDiffusion4R',
        description: `stableDiffusion4R is an R interface to "Stable Diffusion" APIs, and additional APIs, for AI-driven creative image transformations. This page guides you in using the stableDiffusion4R's API."`,
        url: 'https://github.com/kumeS/stableDiffusion4R_API',
        siteName: 'stableDiffusion4R',
        type: 'website',

        images: '/og-image.png',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'stableDiffusion4R',
        description: `stableDiffusion4R is an R interface to "Stable Diffusion" APIs, and additional APIs, for AI-driven creative image transformations. This page guides you in using the stableDiffusion4R's API."`,
        site: '1440559012378931205',
        creator: '@yuki_osada0808',
        creatorId: '1440559012378931205',
        images: {
            url: '/og-image.png',
            alt: 'stableDiffusion4R',
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
