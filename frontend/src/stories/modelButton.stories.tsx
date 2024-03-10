import type { Meta, StoryObj } from '@storybook/react';
import { ModelButton } from '@/app/index';
import { storyBoxColor } from '@/types';
import { action } from '@storybook/addon-actions';

const meta = {
    title: 'GENERATEIMAGE/ModelButton',
    component: ModelButton,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'モデルを選択するボタンのカタログです。',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        handleModel: { action: 'clicked' },
    },
} satisfies Meta<typeof ModelButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pattern1: Story = {
    parameters: {
        docs: {
            description: {
                story: 'モデルの順番が4で割って0余るときのカタログです。',
            },
        },
    },
    args: {
        modelName: 'ModelName',
        index: 0,
        handleModel: action('clicked'),
        storyBoxColor: storyBoxColor,
    },
};

export const Pattern2: Story = {
    parameters: {
        docs: {
            description: {
                story: 'モデルの順番が4で割って1余るときのカタログです。',
            },
        },
    },
    args: {
        modelName: 'ModelName',
        index: 1,
        handleModel: action('clicked'),
        storyBoxColor: storyBoxColor,
    },
};

export const Pattern3: Story = {
    parameters: {
        docs: {
            description: {
                story: 'モデルの順番が4で割って2余るときのカタログです。',
            },
        },
    },
    args: {
        modelName: 'ModelName',
        index: 2,
        handleModel: action('clicked'),
        storyBoxColor: storyBoxColor,
    },
};

export const Pattern4: Story = {
    parameters: {
        docs: {
            description: {
                story: 'モデルの順番が4で割って3余るときのカタログです。',
            },
        },
    },
    args: {
        modelName: 'ModelName',
        index: 3,
        handleModel: action('clicked'),
        storyBoxColor: storyBoxColor,
    },
};
