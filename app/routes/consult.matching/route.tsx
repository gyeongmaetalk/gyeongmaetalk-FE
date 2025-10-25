import ConsultMatchingPage from "~/pages/consult/matching";

export function meta() {
  return [{ title: "상담사 매칭" }, { name: "description", content: "상담사 매칭" }];
}

export default function ConsultMatchingLayout() {
  return <ConsultMatchingPage />;
}
