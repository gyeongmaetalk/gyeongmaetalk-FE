import AgencyRecommendDetailPage from "~/pages/agency/recommend/detail";

import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function AgencyRecommendDetailLayout() {
  return <AgencyRecommendDetailPage />;
}
