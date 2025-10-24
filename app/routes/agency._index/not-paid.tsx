import { useState } from "react";

import ConsultantReviewCard from "~/components/card/consultant-review-card";
import PaymentModal from "~/components/modal/payment-modal";
import { Button } from "~/components/ui/button";
import type { ReservedCounselDataResponse } from "~/models/counsel";
import { formatDate } from "~/utils/format";

interface NotPaidProps {
  info: ReservedCounselDataResponse["info"];
}

export default function NotPaid({ info }: NotPaidProps) {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);

  const onStartAuction = () => {
    setIsPaymentModalOpen(true);
  };

  const onPaymentModalClose = () => {
    setIsPaymentModalOpen(false);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <p className="text-label-strong font-headline2-bold">상담은 어떠셨나요?</p>
        <p className="text-label-neutral font-body2-normal-regular">
          경매톡과 함께 경매를 진행해보세요!
        </p>
      </div>
      <ConsultantReviewCard
        date={formatDate({ date: info.counselDate, withTime: true, shortYear: true })}
        counselorName={info.counselorName}
        experience={info.experience}
        counselorImage="https://i.namu.wiki/i/8mcZn4QTDZNSyG5LCLIltEOwSsrMoAG9TKsurgtD2zMPJWqQCYvZUsL_66BkJy3JmN4lhegQHg_A2iGdD-AWLw.webp"
      />
      <Button className="w-full" onClick={onStartAuction} aria-label="경매 대행 서비스 결제하기">
        결제 후 대행 시작하기
      </Button>

      <PaymentModal
        id={info.counselorId}
        isOpen={isPaymentModalOpen}
        onClose={onPaymentModalClose}
      />
    </div>
  );
}
