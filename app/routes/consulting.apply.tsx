import { WithBackHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import ConsultingApplyPage from "~/pages/consulting/apply";

import type { Route } from "./+types/consulting.apply";

export function meta({}: Route.MetaArgs) {
  return [{ title: "상담 신청하기" }, { name: "description", content: "상담 신청하기" }];
}

export default function ConsultingApplyLayout() {
  return (
    <PageLayout header={<WithBackHeader />}>
      <ConsultingApplyPage />
    </PageLayout>
  );
}
