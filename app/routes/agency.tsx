import { DefaultHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import AgencyPage from "~/pages/agency/agencyPage";

import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function AgencyLayout() {
  return (
    <PageLayout header={<DefaultHeader />} showNav>
      <AgencyPage />
    </PageLayout>
  );
}
