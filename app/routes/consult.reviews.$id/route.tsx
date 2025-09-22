import { Navigate } from "react-router";

import ConsultReviewsDetailPage from "~/pages/consult/reviews/detail";

import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [{ title: "상담 리뷰 상세" }, { name: "description", content: "상담 리뷰 상세" }];
}

export default function ConsultReviewsDetailLayout({ params }: Route.ComponentProps) {
  const { id } = params;

  if (!id) {
    return <Navigate to="/consult/reviews" />;
  }

  return <ConsultReviewsDetailPage reviewId={id} />;
}
