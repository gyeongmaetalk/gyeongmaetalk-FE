import { useSearchParams } from "react-router";

import ConsultantReviewCard from "~/components/card/consultant-review-card";
import { Document } from "~/components/icons";
import StatusNav from "~/routes/agency.recommend._index/status-nav";

const STATUS_LIST = [
  {
    label: "전체",
    value: "",
  },
  {
    label: "구매",
    value: "buy",
  },
  {
    label: "미구매",
    value: "not-buy",
  },
];

const AgencyRecommendPage = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status") || "";

  return (
    <div className="h-full">
      <section className="px-4 pt-6 pb-[18px]">
        <ConsultantReviewCard />
      </section>
      <StatusNav statusList={STATUS_LIST} status={status} />
      {/* 추천 매물이 없는 경우 */}
      <section className="mt-44 flex flex-col justify-center space-y-3">
        <Document />
        <div className="space-y-1 text-center">
          <p className="font-headline2-bold text-label-strong">아직 추천매물이 없어요.</p>
          <p className="font-body1-normal-regular text-label-neutral">
            잠시만 기다려주세요.
            <br />곧 맞춤 매물을 추천해드릴게요.
          </p>
        </div>
      </section>
      {/* 추천 매물이 있는 경우 */}
      {/* <section className="space-y-6 px-4 py-6">
        <AgencyRecommendItem status="buy" />
        <Divider className="bg-cool-neutral-98" />
        <AgencyRecommendItem status="not-buy" />
      </section> */}
    </div>
  );
};

export default AgencyRecommendPage;
