import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';
import React from 'react';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'example/Flex',
  component: Flex,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RowSpaceBetween: Story = {
    args: {
        direction: "row",
        justify: 'space-between',
        gap: '20px',
        children: [
            React.createElement('div', {children: 'Hola'}),
            React.createElement('div', {children: 'Mundo'})
        ],
    },
  };
  