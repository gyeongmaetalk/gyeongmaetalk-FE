import { useSearchParams } from "react-router";

import ConsultantReviewCard from "~/components/card/consultant-review-card";
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
    </div>
  );
};

export default AgencyRecommendPage;
