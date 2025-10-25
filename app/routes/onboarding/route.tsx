import OnboardingPage from "~/pages/onboarding";

export function meta() {
  return [{ title: "경매톡 시작하기" }, { name: "description", content: "경매톡 시작하기" }];
}

export default function OnboardingLayout() {
  return <OnboardingPage />;
}
