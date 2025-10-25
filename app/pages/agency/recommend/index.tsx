import { Fragment } from "react";

import { Loader2 } from "lucide-react";
import { useSearchParams } from "react-router";

import ConsultantReviewCard from "~/components/card/consultant-review-card";
import Divider from "~/components/divider";
import { Document } from "~/components/icons";
import { useGetPropertyList } from "~/lib/tanstack/query/property";
import AgencyRecommendItem from "~/routes/agency.recommend._index/agency-recommend-item";
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

  const { data = [], isLoading } = useGetPropertyList();

  if (isLoading) {
    return (
      <div className="flex h-full items-center">
        <Loader2 className="text-primary-normal mx-auto size-10 animate-spin" />
      </div>
    );
  }

  return (
    <div className="h-full">
      <section className="px-4 pt-6 pb-[18px]">
        <ConsultantReviewCard
          counselorName="이정훈"
          experience={10}
          counselorImage="https://i.namu.wiki/i/8mcZn4QTDZNSyG5LCLIltEOwSsrMoAG9TKsurgtD2zMPJWqQCYvZUsL_66BkJy3JmN4lhegQHg_A2iGdD-AWLw.webp"
        />
      </section>
      <StatusNav statusList={STATUS_LIST} status={status} />
      {data.length === 0 ? (
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
      ) : (
        <section className="space-y-6 px-4 py-6">
          {data.map((item) => (
            <Fragment key={item.id}>
              <AgencyRecommendItem {...item} />
              <Divider className="bg-cool-neutral-98" />
            </Fragment>
          ))}
        </section>
      )}
    </div>
  );
};

export default AgencyRecommendPage;
