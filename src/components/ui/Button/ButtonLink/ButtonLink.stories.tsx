import { Meta, StoryObj } from '@storybook/react';

import { ButtonLink } from '@components/ui/Button/ButtonLink/index';

type Story = StoryObj<typeof ButtonLink>;

const meta: Meta<typeof ButtonLink> = {
  title: 'components/ButtonLink',
  component: ButtonLink,
  parameters: {
    controls: {
      exclude: ['innerControl'],
    },
  },
};

export const PrimaryButtonLink: Story = {
  args: {
    title: 'Button',
    href: '/',
    styleType: 'primary',
  },
};

export const SecondaryButtonLink: Story = {
  args: {
    title: 'Button',
    href: '/',
    styleType: 'secondary',
  },
};

export default meta;
