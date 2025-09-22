import ConsultReviewsPage from "~/pages/consult/reviews";

import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [{ title: "상담후기" }, { name: "description", content: "상담후기" }];
}

export default function ConsultReviewsLayout() {
  return <ConsultReviewsPage />;
}
