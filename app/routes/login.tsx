import { WithBackHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import LoginPage from "~/pages/login";

import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function AgencyLayout() {
  return (
    <PageLayout header={<WithBackHeader />}>
      <LoginPage />
    </PageLayout>
  );
}
