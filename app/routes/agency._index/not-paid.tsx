import ConsultantReviewCard from "~/components/card/consultant-review-card";
import { Button } from "~/components/ui/button";

export default function NotPaid() {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <p className="text-label-strong font-headline2-bold">상담은 어떠셨나요?</p>
        <p className="text-label-neutral font-body2-normal-regular">
          경매톡과 함께 경매를 진행해보세요!
        </p>
      </div>
      <ConsultantReviewCard date="25.6.23 18:00" />
      <Button className="w-full">결제 후 대행 시작하기</Button>
    </div>
  );
}
