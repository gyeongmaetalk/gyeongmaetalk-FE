import { Navigate, useSearchParams } from "react-router";

import ConsultantReviewCard from "~/components/card/consultant-review-card";
import Divider from "~/components/divider";
import { Verified } from "~/components/icons";
import { WithBackHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import ReviewList from "~/components/review/review-list";

const ConsultReviewsConsultantPage = () => {
  const [searchParams] = useSearchParams();
  const consultantId = searchParams.get("consultantId");
  const sort = searchParams.get("sort") || "";

  if (!consultantId) {
    return <Navigate to="/consult/reviews" />;
  }

  return (
    <PageLayout header={<WithBackHeader title="이정훈 상담사 후기" />}>
      <section className="px-4 pt-3 pb-6">
        <ConsultantReviewCard date="25.6.23 18:00" />
      </section>
      <ReviewList consultantId={consultantId} sort={sort} />
    </PageLayout>
  );
};

export default ConsultReviewsConsultantPage;
