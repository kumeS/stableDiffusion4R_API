import type { Meta, StoryObj } from '@storybook/react';
import { Container, About, GenerateImg } from '@/app/index';

const meta = {
    title: 'COMPONENTS/Container',
    component: Container,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: (
            <>
                <About />
                <GenerateImg />
            </>
        ),
    },
};
