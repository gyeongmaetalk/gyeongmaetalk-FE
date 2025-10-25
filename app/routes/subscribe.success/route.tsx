import SubscribeSuccessPage from "~/pages/subscribe/success";

export function meta() {
  return [{ title: "결제 성공" }, { name: "description", content: "결제 성공" }];
}

export default function SubscribeSuccessLayout() {
  return <SubscribeSuccessPage />;
}
