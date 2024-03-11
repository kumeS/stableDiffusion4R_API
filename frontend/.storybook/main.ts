import type { StorybookConfig } from '@storybook/nextjs';
//import aliasを有効化
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-actions',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    //静的ファイルの読み込み
    staticDirs: ['../public'],
    docs: {
        autodocs: 'tag',
    },
    //import aliasを有効化
    webpackFinal: async (config) => {
        if (config.resolve) {
            config.resolve.plugins = [
                ...(config.resolve.plugins || []),
                new TsconfigPathsPlugin({
                    extensions: config.resolve.extensions,
                }),
            ];
        }
        return config;
    },
};

export default config;
