import type { Meta, StoryObj } from "@storybook/react-vite";

import { DefaultHeader } from "./header";
import {
  BackHeaderExample,
  BackWithShareHeaderExample,
  CloseHeaderExample,
  CloseHeaderWithoutTitleExample,
  DefaultHeaderExample,
  LeftTitleAlarmHeaderExample,
  LeftTitleHeaderExample,
} from "./header-examples";

const meta = {
  title: "Header",
  component: DefaultHeader,
  tags: ["autodocs"],
} satisfies Meta<typeof DefaultHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 헤더
export const Default: Story = {
  render: () => <DefaultHeaderExample />,
};

// 뒤로가기 헤더
export const WithBack: Story = {
  render: () => <BackHeaderExample />,
};

// 뒤로가기 + 공유 헤더
export const WithBackAndShare: Story = {
  render: () => <BackWithShareHeaderExample />,
};

// 닫기 헤더
export const WithClose: Story = {
  render: () => <CloseHeaderExample />,
};

// 타이틀 없는 닫기 헤더
export const WithCloseOnly: Story = {
  render: () => <CloseHeaderWithoutTitleExample />,
};

// 중앙 타이틀 헤더
export const WithCenterTitle: Story = {
  render: () => <LeftTitleHeaderExample />,
};

// 중앙 타이틀 + 알림 헤더
export const WithCenterTitleAndAlarm: Story = {
  render: () => <LeftTitleAlarmHeaderExample />,
};
