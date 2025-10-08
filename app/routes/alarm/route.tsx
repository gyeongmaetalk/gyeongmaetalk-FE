import AlarmPage from "~/pages/alarm";

import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [{ title: "경매톡 알림페이지" }, { name: "description", content: "경매톡 알림페이지" }];
}

export default function AlarmLayout() {
  return <AlarmPage />;
}
