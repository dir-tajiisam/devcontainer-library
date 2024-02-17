import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    colorScheme: { control: 'text' },
    color: { control: 'color' },
    title: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    fontSize: { control: 'text' },
    fontWeight: { control: 'number' },
    isDisabled: { control: 'boolean' },
  },
};

type Story = StoryObj<typeof Button>;
export const PlainButton: Story = {
  args: {
    title: 'BUTTON',
  },
};
export const LoginButton: Story = {
  args: {
    colorScheme: 'teal',
    color: 'white',
    title: 'ログイン',
    width: '399px',
    height: '46px',
    fontSize: '16px',
    fontWeight: 400,
    isDisabled: false,
  },
};

export default meta;
