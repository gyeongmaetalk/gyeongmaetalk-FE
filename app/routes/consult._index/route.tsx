import ConsultPage from "~/pages/consult";

import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [{ title: "무료 상담" }, { name: "description", content: "무료 상담" }];
}

export default function ConsultLayout() {
  return <ConsultPage />;
}
