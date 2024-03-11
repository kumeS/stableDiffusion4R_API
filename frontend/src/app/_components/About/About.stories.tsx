import type { Meta, StoryObj } from '@storybook/react';
import { About } from '@/app/index';

const meta = {
    title: 'COMPONENTS/About',
    component: About,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
