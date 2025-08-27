import { WithBackHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import ConsultApplyPage from "~/pages/consult/apply";

import type { Route } from "./+types/consult.apply";

export function meta({}: Route.MetaArgs) {
  return [{ title: "상담 신청하기" }, { name: "description", content: "상담 신청하기" }];
}

export default function ConsultApplyLayout() {
  return (
    <PageLayout header={<WithBackHeader />}>
      <ConsultApplyPage />
    </PageLayout>
  );
}
