import { useSearchParams } from "react-router";

import ConsultantReviewCard from "~/components/card/consultant-review-card";
import AgencyRecommendItem from "~/routes/agency.recommend/agency-recommend-item";
import StatusNav from "~/routes/agency.recommend/status-nav";

const AgencyRecommendPage = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status") || "";

  return (
    <div>
      <section className="px-4 pt-6 pb-[18px]">
        <ConsultantReviewCard />
      </section>
      <StatusNav status={status} />
      <section className="px-4 py-6">
        <AgencyRecommendItem status="buy" />
        <AgencyRecommendItem status="not-buy" />
      </section>
    </div>
  );
};

export default AgencyRecommendPage;
