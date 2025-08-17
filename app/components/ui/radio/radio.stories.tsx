import type { Meta, StoryObj } from "@storybook/react-vite";

import { RadioExamples } from "./radio-examples";

import { Radio } from ".";

const meta = {
  title: "Radio",
  component: Radio,
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ size }) => <RadioExamples size={size || "default"} />,
};
