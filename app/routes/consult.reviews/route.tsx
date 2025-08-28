import ConsultReviewsPage from "~/pages/consult/reviews";

import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [{ title: "상담 리뷰" }, { name: "description", content: "상담 리뷰" }];
}

export default function ConsultReviewsLayout() {
  return <ConsultReviewsPage />;
}
