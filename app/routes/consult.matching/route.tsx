import ConsultMatchingPage from "~/pages/consult/matching";

import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [{ title: "상담사 매칭" }, { name: "description", content: "상담사 매칭" }];
}

export default function ConsultMatchingLayout() {
  return <ConsultMatchingPage />;
}
