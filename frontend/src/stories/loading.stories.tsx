import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from '@/app/index';

const meta = {
    title: 'GENERATEIMAGE/Loading',
    component: Loading,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'ローディングアニメーションに関するカタログです。',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {
            control: { type: 'color' },
            defaultValue: 'rgb(1, 69, 255)',
        },
    },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    parameters: {
        docs: {
            description: {
                story: '現在使用されているローディングアニメーションのカタログです。',
            },
        },
    },
    args: {
        backgroundColor: 'rgb(1, 69, 255)',
    },
};

export const Green: Story = {
    parameters: {
        docs: {
            description: {
                story: '使用されていないローディングアニメーションのサンプルです。',
            },
        },
    },
    args: {
        backgroundColor: 'rgb(1, 255, 149)',
    },
};

export const Orange: Story = {
    parameters: {
        docs: {
            description: {
                story: '使用されていないローディングアニメーションのサンプルです。',
            },
        },
    },
    args: {
        backgroundColor: 'rgb(255, 98, 1)',
    },
};

export const Pink: Story = {
    parameters: {
        docs: {
            description: {
                story: '使用されていないローディングアニメーションのサンプルです。',
            },
        },
    },
    args: {
        backgroundColor: 'rgb(255, 1, 255)',
    },
};

export const Yellow: Story = {
    parameters: {
        docs: {
            description: {
                story: '使用されていないローディングアニメーションのサンプルです。',
            },
        },
    },
    args: {
        backgroundColor: 'rgb(255, 230, 1)',
    },
};
