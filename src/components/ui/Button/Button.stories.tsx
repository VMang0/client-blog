import { Meta, StoryObj } from '@storybook/react';

import { Button } from '@components/ui/Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  parameters: {
    controls: {
      exclude: ['innerControl'],
    },
  },
};

export const PrimaryButton: Story = {
  args: {
    title: 'Button',
    onClick: () => {},
    styleType: 'primary',
  },
};

export const SecondaryButton: Story = {
  args: {
    title: 'Button',
    onClick: () => {},
    styleType: 'secondary',
  },
};

export const SmallButton: Story = {
  args: {
    title: 'Button',
    onClick: () => {},
    styleType: 'primary',
    size: 'small',
  },
};

export const MediumButton: Story = {
  args: {
    title: 'Button',
    onClick: () => {},
    styleType: 'primary',
  },
};

export const DisabledButton: Story = {
  args: {
    title: 'Button',
    onClick: () => {},
    styleType: 'primary',
    disabled: true,
  },
};

export const SubmitButton: Story = {
  args: {
    title: 'Button',
    type: 'submit',
    onClick: () => {},
    styleType: 'primary',
  },
};

export default meta;
