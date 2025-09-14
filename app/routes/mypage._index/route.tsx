import { WithLeftTitleHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import MyPagePage from "~/pages/mypage";

import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function MyPageLayout() {
  return (
    <PageLayout header={<WithLeftTitleHeader title="마이 페이지" />} showNav>
      <MyPagePage />
    </PageLayout>
  );
}
