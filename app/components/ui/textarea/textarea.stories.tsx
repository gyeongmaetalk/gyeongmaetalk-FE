import type { Meta, StoryObj } from "@storybook/react-vite";

import { TextareaExamples } from "./textarea-examples";

import { Textarea } from ".";

const meta = {
  title: "Textarea",
  component: Textarea,
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <TextareaExamples />,
};
