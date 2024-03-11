import type { Meta, StoryObj } from '@storybook/react';
import { Top } from '@/app/index';

const meta = {
    title: 'COMPONENTS/Top',
    component: Top,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
} satisfies Meta<typeof Top>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
