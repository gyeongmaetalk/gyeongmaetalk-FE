import { Loader2 } from "lucide-react";
import { Navigate, useSearchParams } from "react-router";

import ConsultantReviewCard from "~/components/card/consultant-review-card";
import { WithBackHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import { Review, ReviewHeader, ReviewList } from "~/components/review";
import SentinelSpinner from "~/components/sentinel-spinner";
import { SortType } from "~/constants/api";
import { useGetConsultantReviews } from "~/lib/tanstack/query/review";

const ConsultReviewsConsultantPage = () => {
  const [searchParams] = useSearchParams();
  const consultantId = searchParams.get("consultantId");
  const sort = searchParams.get("sort") || SortType.LATEST;

  if (!consultantId) {
    return <Navigate to="/consult/reviews" />;
  }

  const {
    data = { consultantReviews: [], counselorInfo: null },
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetConsultantReviews({
    consultantId,
    type: sort as SortType,
  });

  return (
    <PageLayout header={<WithBackHeader title="이정훈 상담사 후기" />}>
      <section className="px-4 pt-3 pb-6">
        <ConsultantReviewCard
          counselorName={data.counselorInfo?.name || ""}
          experience={data.counselorInfo?.experience || 0}
          counselorImage="https://i.namu.wiki/i/8mcZn4QTDZNSyG5LCLIltEOwSsrMoAG9TKsurgtD2zMPJWqQCYvZUsL_66BkJy3JmN4lhegQHg_A2iGdD-AWLw.webp"
        />
      </section>
      {isLoading ? (
        <Loader2 className="text-primary-normal mx-auto size-10 animate-spin" />
      ) : (
        <Review className="h-[calc(100%-182px)]">
          <ReviewHeader
            consultantId={consultantId}
            sort={sort}
            totalCount={data.consultantReviews.length}
          />
          <ReviewList reviews={data.consultantReviews} />
        </Review>
      )}
      <SentinelSpinner
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isLoading={isLoading}
        isFetchingNextPage={isFetchingNextPage}
      />
    </PageLayout>
  );
};

export default ConsultReviewsConsultantPage;
