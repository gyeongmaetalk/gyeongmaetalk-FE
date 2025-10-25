import { WithBackHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import MyPageUserInfoPage from "~/pages/mypage/user-info";

export function meta() {
  return [{ title: "개인 정보 상세" }, { name: "description", content: "개인 정보 상세" }];
}

const MyPageUserInfoLayout = () => {
  return (
    <PageLayout header={<WithBackHeader title="개인 정보 상세" />}>
      <MyPageUserInfoPage />
    </PageLayout>
  );
};

export default MyPageUserInfoLayout;
