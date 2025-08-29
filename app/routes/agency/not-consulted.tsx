import { Button } from "~/components/ui/button";

export default function NotConsulted() {
  return (
    <div className="font-heading2-bold text-label-strong border-blue-95 bg-blue-99 space-y-4 rounded-[12px] border p-3">
      <p className="text-label-strong font-headline2-bold text-center">
        전문가와 상담하고,
        <br />
        경매를 진행해보세요.
      </p>
      <Button className="w-full">무료 상담 신청하기</Button>
    </div>
  );
}
