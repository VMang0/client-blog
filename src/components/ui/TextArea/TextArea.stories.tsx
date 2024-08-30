import { Meta, StoryObj } from '@storybook/react';

import { TextArea } from '@components/ui/TextArea';

type Story = StoryObj<typeof TextArea>;

const meta: Meta<typeof TextArea> = {
  title: 'components/TextArea',
  component: TextArea,
  parameters: {
    controls: {
      exclude: ['innerControl'],
    },
  },
};

export const Default: Story = {
  args: {
    placeholder: 'TextArea',
  },
};

export const ErrorTextArea: Story = {
  args: {
    placeholder: 'TextArea',
    isError: true,
  },
};

export default meta;
