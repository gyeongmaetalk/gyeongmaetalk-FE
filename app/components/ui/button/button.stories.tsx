import type { Meta, StoryObj } from "@storybook/react-vite";

import { OutlinedButton, SolidButton, TextButton } from "./button-examples";

import { Button } from ".";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  render: ({ size }) => <SolidButton size={size} />,
};

export const Outlined: Story = {
  render: ({ size }) => <OutlinedButton size={size} />,
};

export const Text: Story = {
  render: ({ size }) => <TextButton size={size} />,
};
