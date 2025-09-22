import { Loader2 } from "lucide-react";
import { Navigate, useSearchParams } from "react-router";

import ConsultantReviewCard from "~/components/card/consultant-review-card";
import { WithBackHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import { Review, ReviewHeader, ReviewList } from "~/components/review";
import { useGetConsultantReviews } from "~/lib/tanstack/query/review";

const ConsultReviewsConsultantPage = () => {
  const [searchParams] = useSearchParams();
  const consultantId = searchParams.get("consultantId");
  const sort = searchParams.get("sort") || "";

  if (!consultantId) {
    return <Navigate to="/consult/reviews" />;
  }

  const { data: consultantReviews, isLoading } = useGetConsultantReviews({
    consultantId,
    type: sort,
  });

  return (
    <PageLayout header={<WithBackHeader title="이정훈 상담사 후기" />}>
      <section className="px-4 pt-3 pb-6">
        <ConsultantReviewCard
          date="25.6.23 18:00"
          counselorName="이정훈"
          experience={10}
          counselorImage="https://i.namu.wiki/i/8mcZn4QTDZNSyG5LCLIltEOwSsrMoAG9TKsurgtD2zMPJWqQCYvZUsL_66BkJy3JmN4lhegQHg_A2iGdD-AWLw.webp"
        />
      </section>
      {isLoading ? (
        <Loader2 className="text-primary-normal mx-auto size-10 animate-spin" />
      ) : (
        <Review>
          <ReviewHeader
            consultantId={consultantId}
            sort={sort}
            totalCount={consultantReviews?.length || 0}
          />
          <ReviewList reviews={consultantReviews || []} />
        </Review>
      )}
    </PageLayout>
  );
};

export default ConsultReviewsConsultantPage;
