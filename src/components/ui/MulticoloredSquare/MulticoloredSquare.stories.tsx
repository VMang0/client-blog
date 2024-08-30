import { Meta, StoryObj } from '@storybook/react';

import { MulticoloredSquare } from '@components/ui/MulticoloredSquare/index';

type Story = StoryObj<typeof MulticoloredSquare>;

const meta: Meta<typeof MulticoloredSquare> = {
  title: 'components/MulticoloredSquare',
  component: MulticoloredSquare,
  parameters: {
    controls: {
      exclude: ['innerControl'],
    },
  },
};

export const ReverseMulticoloredSquare: Story = {
  args: {
    isReverse: true,
    align: 'bottom',
  },
};

export const BottomMulticoloredSquare: Story = {
  args: {
    align: 'bottom',
  },
};

export default meta;
