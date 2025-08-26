import { DefaultHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import ConsultPage from "~/pages/consult";

import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function ConsultLayout() {
  return (
    <PageLayout header={<DefaultHeader />} showNav>
      <ConsultPage />
    </PageLayout>
  );
}
