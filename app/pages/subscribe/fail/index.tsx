import { X } from "lucide-react";
import { Navigate, useNavigate, useSearchParams } from "react-router";

import { Button } from "~/components/ui/button";
import { PAYMENT_FAIL_CODES } from "~/constants";

const getErrorCode = (code: string) => {
  switch (code) {
    case PAYMENT_FAIL_CODES.PAY_PROCESS_CANCELED.code:
      return PAYMENT_FAIL_CODES.PAY_PROCESS_CANCELED;
    case PAYMENT_FAIL_CODES.PAY_PROCESS_ABORTED.code:
      return PAYMENT_FAIL_CODES.PAY_PROCESS_ABORTED;
    case PAYMENT_FAIL_CODES.REJECT_CARD_COMPANY.code:
      return PAYMENT_FAIL_CODES.REJECT_CARD_COMPANY;
    default:
      return {
        code: "UNKNOWN_ERROR",
        message: "알 수 없는 오류가 발생했습니다.",
      };
  }
};

export default function SubscribeFailPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const failData = {
    code: searchParams.get("code"),
    message: searchParams.get("message"),
  };

  if (!failData.code || !failData.message) {
    return <Navigate to="/" />;
  }

  const onRetryPayment = () => {
    navigate("/agency", { replace: true });
  };

  const onNavToHome = () => {
    navigate("/", { replace: true });
  };

  const errorCode = getErrorCode(failData.code);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg border bg-white p-6 shadow-lg">
        <div className="text-center">
          <X className="text-status-negative mx-auto size-8" />
          <h1 className="font-heading1-bold text-label-neutral">{errorCode.message}</h1>
        </div>

        <h3 className="text-label-neutral font-heading2-regular text-center">{failData.message}</h3>

        <div className="mt-6 space-y-4">
          <div className="space-y-3">
            <Button onClick={onRetryPayment} className="w-full" aria-label="결제 다시 시도하기">
              {failData.code === "PAY_PROCESS_CANCELED" ? "결제 다시 시도하기" : "다시 시도하기"}
            </Button>

            <Button
              onClick={onNavToHome}
              variant="outlined"
              className="w-full"
              aria-label="홈으로 돌아가기"
            >
              홈으로 돌아가기
            </Button>
          </div>

          <p className="text-label-neutral font-body2-normal-regular text-center">
            {errorCode.code === PAYMENT_FAIL_CODES.PAY_PROCESS_CANCELED.code
              ? "결제를 취소하셨습니다. 언제든지 다시 결제하실 수 있습니다."
              : "문제가 지속되면 고객센터로 문의해주세요."}
          </p>
        </div>
      </div>
    </div>
  );
}
