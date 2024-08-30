import { Meta, StoryObj } from '@storybook/react';

import { Select } from '@components/ui/Select';
import { queryOptions } from '@constants/queryOptions';

type Story = StoryObj<typeof Select>;

const meta: Meta<typeof Select> = {
  title: 'components/Select',
  component: Select,
  parameters: {
    controls: {
      exclude: ['innerControl'],
    },
  },
};

export const Default: Story = {
  args: {
    placeholder: 'Select',
    options: queryOptions,
  },
};

export const ErrorSelect: Story = {
  args: {
    placeholder: 'Select',
    options: queryOptions,
    isError: true,
  },
};

export default meta;
