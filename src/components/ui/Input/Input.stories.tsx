import { Meta, StoryObj } from '@storybook/react';

import { Input } from '@components/ui/Input/index';

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  title: 'components/Input',
  component: Input,
  parameters: {
    controls: {
      exclude: ['innerControl'],
    },
  },
};

export const Default: Story = {
  args: {
    placeholder: 'Input',
  },
};

export const SmallInput: Story = {
  args: {
    placeholder: 'Input',
    size: 'small',
  },
};

export const MediumInput: Story = {
  args: {
    placeholder: 'Input',
    size: 'medium',
  },
};

export const LargeInput: Story = {
  args: {
    placeholder: 'Input',
    size: 'large',
  },
};

export const ErrorInput: Story = {
  args: {
    placeholder: 'Input',
    isError: true,
  },
};

export default meta;
