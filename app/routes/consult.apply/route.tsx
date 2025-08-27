import ConsultApplyPage from "~/pages/consult/apply";

import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [{ title: "상담 신청하기" }, { name: "description", content: "상담 신청하기" }];
}

export default function ConsultApplyLayout() {
  return <ConsultApplyPage />;
}
