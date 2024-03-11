import React from 'react';
import type { Preview } from '@storybook/react';
import { Inter } from 'next/font/google';

//フォントを使用するための設定
const inter = Inter({ subsets: ['latin'] });

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        //背景色の変更
        backgrounds: {
            default: 'default',
            values: [
                {
                    name: 'default',
                    value: '#272727',
                },
                {
                    name: 'white',
                    value: '#fff',
                },
            ],
        },
    },
    //フォントを使用するための設定
    decorators: [
        (Story) => (
            <>
                <main className={inter.className}>
                    <Story />
                </main>
            </>
        ),
    ],
};

export default preview;
