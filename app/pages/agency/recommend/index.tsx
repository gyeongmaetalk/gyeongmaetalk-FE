import { useSearchParams } from "react-router";

import ConsultantReviewCard from "~/components/card/consultant-review-card";
import Divider from "~/components/divider";
import AgencyRecommendItem from "~/routes/agency.recommend._index/agency-recommend-item";
import StatusNav from "~/routes/agency.recommend._index/status-nav";

const AgencyRecommendPage = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status") || "";

  return (
    <div>
      <section className="px-4 pt-6 pb-[18px]">
        <ConsultantReviewCard />
      </section>
      <StatusNav status={status} />
      <section className="space-y-6 px-4 py-6">
        <AgencyRecommendItem status="buy" />
        <Divider className="bg-cool-neutral-98" />
        <AgencyRecommendItem status="not-buy" />
      </section>
    </div>
  );
};

export default AgencyRecommendPage;
