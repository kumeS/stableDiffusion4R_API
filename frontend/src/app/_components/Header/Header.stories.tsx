import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '@/app/index';

const meta = {
    title: 'COMPONENTS/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
