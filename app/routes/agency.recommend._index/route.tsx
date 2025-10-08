import { WithLeftTitleHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import AgencyRecommendPage from "~/pages/agency/recommend";

import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function AgencyRecommendLayout() {
  return (
    <PageLayout header={<WithLeftTitleHeader title="추천 매물" />} showNav>
      <AgencyRecommendPage />
    </PageLayout>
  );
}
