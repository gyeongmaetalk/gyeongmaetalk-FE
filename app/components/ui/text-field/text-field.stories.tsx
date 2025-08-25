import type { Meta, StoryObj } from "@storybook/react-vite";

import { TextFieldExamples } from "./text-field-examples";

import { TextField } from ".";

const meta = {
  title: "TextField",
  component: TextField,
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <TextFieldExamples />,
};
