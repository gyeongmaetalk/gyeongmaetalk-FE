import { Navigate, useSearchParams } from "react-router";

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
        <div className="bg-cool-neutral-99 space-y-2.5 rounded-lg p-3">
          <div className="flex items-center gap-3">
            <div className="bg-cool-neutral-30 size-10 rounded-full" />
            <div className="space-y-1">
              <div className="flex items-center gap-0.5">
                <p className="font-label2-bold text-label-strong">이정훈 상담사</p>
                <Verified />
              </div>
              <p className="font-label2-regular text-label-neutral">10년차 경매지도사</p>
            </div>
          </div>
          <Divider className="bg-cool-neutral-50/22" />
          <div className="flex items-center gap-1">
            <p className="font-caption1-bold w-12">진행일</p>
            <p className="font-label2-regular text-label-alternative">25.6.23 18:00 상담완료</p>
          </div>
        </div>
      </section>
      <ReviewList consultantId={consultantId} sort={sort} />
    </PageLayout>
  );
};

export default ConsultReviewsConsultantPage;
