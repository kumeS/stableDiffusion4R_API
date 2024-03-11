import type { Meta, StoryObj } from '@storybook/react';
import { GenerateImg } from '@/app/index';

const meta = {
    title: 'COMPONENTS/GenerateImage',
    component: GenerateImg,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
} satisfies Meta<typeof GenerateImg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
