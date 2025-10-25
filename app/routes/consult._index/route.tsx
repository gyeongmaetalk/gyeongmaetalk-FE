import ConsultPage from "~/pages/consult";

export function meta() {
  return [{ title: "무료 상담" }, { name: "description", content: "무료 상담" }];
}

export default function ConsultLayout() {
  return <ConsultPage />;
}
