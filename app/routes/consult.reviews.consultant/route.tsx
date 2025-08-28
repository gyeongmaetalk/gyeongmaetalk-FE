import ConsultReviewsConsultantPage from "~/pages/consult/reviews/consultant";

import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [{ title: "상담가 리뷰" }, { name: "description", content: "상담가 리뷰" }];
}

export default function ConsultReviewsConsultantLayout() {
  return <ConsultReviewsConsultantPage />;
}
