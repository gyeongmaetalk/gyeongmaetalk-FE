import { WithCloseHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import SignupPage from "~/pages/signup";

export default function SignupLayout() {
  return (
    <PageLayout
      header={<WithCloseHeader title="회원가입" onClose={() => console.log("닫기 클릭")} />}
      withFloating
    >
      <SignupPage />
    </PageLayout>
  );
}
