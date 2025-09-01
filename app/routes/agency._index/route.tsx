import { WithLeftTitleHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import AgencyPage from "~/pages/agency";

import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function AgencyLayout() {
  return (
    <PageLayout header={<WithLeftTitleHeader title="경매대행" onAlarm={() => {}} />} showNav>
      <AgencyPage />
    </PageLayout>
  );
}
