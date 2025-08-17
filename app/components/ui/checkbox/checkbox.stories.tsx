import type { Meta, StoryObj } from "@storybook/react-vite";

import { CheckboxExamples } from "./check-examples";

import { Checkbox } from ".";

const meta = {
  title: "Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ size }) => <CheckboxExamples size={size || "default"} />,
};
