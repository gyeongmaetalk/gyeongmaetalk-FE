import type { Meta, StoryObj } from "@storybook/react-vite";

import { TextfieldExamples } from "./textfield-examples";

import { Textfield } from ".";

const meta = {
  title: "Textfield",
  component: Textfield,
  tags: ["autodocs"],
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <TextfieldExamples />,
};
