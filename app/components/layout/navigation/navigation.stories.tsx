import type { Meta, StoryObj } from "@storybook/react-vite";

import { DefaultNavigationExample } from "./navigation-examples";

const MockNavigation = () => <DefaultNavigationExample />;

const meta = {
  title: "Navigation",
  component: MockNavigation,
  tags: ["autodocs"],
} satisfies Meta<typeof MockNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <DefaultNavigationExample />,
};
