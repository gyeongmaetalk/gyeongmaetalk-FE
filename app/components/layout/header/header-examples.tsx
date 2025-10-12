import { DefaultHeader, WithBackHeader, WithCloseHeader, WithLeftTitleHeader } from "./header";

// 기본 헤더
export function DefaultHeaderExample() {
  return <DefaultHeader />;
}

// 뒤로가기 + 공유 헤더
export function BackWithShareHeaderExample() {
  return (
    <WithBackHeader
      title="타이틀"
      onBack={() => console.log("뒤로가기 클릭")}
      onShare={() => console.log("공유 클릭")}
    />
  );
}

// 뒤로가기 헤더
export function BackHeaderExample() {
  return <WithBackHeader title="타이틀" onBack={() => console.log("뒤로가기 클릭")} />;
}

// 타이틀 + 닫기 헤더
export function CloseHeaderExample() {
  return <WithCloseHeader title="타이틀" onClose={() => console.log("닫기 클릭")} />;
}

// 닫기 헤더
export function CloseHeaderWithoutTitleExample() {
  return <WithCloseHeader onClose={() => console.log("닫기 클릭")} />;
}

// 중앙 타이틀 헤더
export function LeftTitleHeaderExample() {
  return <WithLeftTitleHeader title="타이틀" />;
}

// 중앙 타이틀 + 알림 헤더
export function LeftTitleAlarmHeaderExample() {
  return <WithLeftTitleHeader title="타이틀" />;
}
