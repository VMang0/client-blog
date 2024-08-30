import { Meta, StoryObj } from '@storybook/react';

import { Tag } from '@components/ui/Tag/index';

type Story = StoryObj<typeof Tag>;

const meta: Meta<typeof Tag> = {
  title: 'components/Tag',
  component: Tag,
  parameters: {
    controls: {
      exclude: ['innerControl'],
    },
  },
};

export const Default: Story = {
  args: {
    tagName: 'Business',
  },
};

export const ActiveTag: Story = {
  args: {
    tagName: 'Business',
    isActive: true,
  },
};

export default meta;
