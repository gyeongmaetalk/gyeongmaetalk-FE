import OnboardingPage from "~/pages/onboarding";

import type { Route } from "./+types/onboarding";

export function meta({}: Route.MetaArgs) {
  return [{ title: "경매톡 시작하기" }, { name: "description", content: "경매톡 시작하기" }];
}

export default function OnboardingLayout() {
  return <OnboardingPage />;
}
