import type { Meta, StoryObj } from "@storybook/react-vite";

import { OutlinedBadge, SolidBadge } from "./badge-examples";

import { Badge } from ".";

const meta = {
  title: "Badge",
  component: Badge,
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ size }) => <SolidBadge size={size} />,
};

export const Outlined: Story = {
  render: ({ size }) => <OutlinedBadge size={size} />,
};
