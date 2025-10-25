import { WithLeftTitleHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import MyPagePage from "~/pages/mypage";

export function meta() {
  return [{ title: "마이 페이지" }, { name: "description", content: "마이 페이지" }];
}

export default function MyPageLayout() {
  return (
    <PageLayout header={<WithLeftTitleHeader title="마이 페이지" />} showNav>
      <MyPagePage />
    </PageLayout>
  );
}
