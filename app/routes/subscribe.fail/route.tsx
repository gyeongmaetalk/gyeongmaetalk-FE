import SubscribeFailPage from "~/pages/subscribe/fail";

export function meta() {
  return [{ title: "결제 실패" }, { name: "description", content: "결제 실패" }];
}

export default function SubscribeFailLayout() {
  return <SubscribeFailPage />;
}
