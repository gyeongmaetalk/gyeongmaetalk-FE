import HomePage from "~/pages/home";

import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [{ title: "경매톡 메인페이지" }, { name: "description", content: "경매톡 메인페이지" }];
}

export default function HomeLayout() {
  return <HomePage />;
}
