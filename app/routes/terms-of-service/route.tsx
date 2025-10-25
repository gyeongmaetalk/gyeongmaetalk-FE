import { WithBackHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import TermsOfServicePage from "~/pages/terms-of-service";

const TermsOfServiceLayout = () => {
  return (
    <PageLayout header={<WithBackHeader title="이용약관" />}>
      <TermsOfServicePage />
    </PageLayout>
  );
};

export default TermsOfServiceLayout;
