import { WithBackHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import MyPageReviewsPage from "~/pages/mypage/reviews";

const MyPageUserInfoLayout = () => {
  return (
    <PageLayout header={<WithBackHeader title="내가 작성한 후기" />}>
      <MyPageReviewsPage />
    </PageLayout>
  );
};

export default MyPageUserInfoLayout;
