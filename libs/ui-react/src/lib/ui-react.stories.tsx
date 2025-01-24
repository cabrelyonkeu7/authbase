import type { Meta, StoryObj } from '@storybook/react';
import { UiReact } from './ui-react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof UiReact> = {
  component: UiReact,
  title: 'UiReact',
};
export default meta;
type Story = StoryObj<typeof UiReact>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to UiReact!/gi)).toBeTruthy();
  },
};
