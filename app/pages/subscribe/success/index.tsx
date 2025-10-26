import { useEffect } from "react";

import { Loader2 } from "lucide-react";
import { Navigate, useSearchParams } from "react-router";

import { COUNSEL } from "~/constants";
import { queryClient } from "~/lib/tanstack";
import { useConfirmSubscription } from "~/lib/tanstack/mutation/property";
import { errorToast, successToast } from "~/utils/toast";

export default function SubscribeSuccessPage() {
  const [searchParams] = useSearchParams();

  const subscriptionId = searchParams.get("subscriptionId");
  const paymentType = searchParams.get("paymentType");
  const orderId = searchParams.get("orderId");
  const paymentKey = searchParams.get("paymentKey");
  const amount = searchParams.get("amount");

  const {
    mutate: confirmSubscription,
    isPending,
    isError,
  } = useConfirmSubscription({
    onSuccess: () => {
      successToast("결제가 완료되었어요.");
    },
    onError: (error) => {
      console.error("결제 완료 중 오류 발생", error);
      errorToast("결제에 실패했어요.");
    },
  });

  if (!orderId || !paymentKey || !amount || !paymentType || !subscriptionId) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    confirmSubscription({
      subscriptionId,
      paymentKey,
      orderId,
      amount,
    });
  }, []);

  if (isPending) {
    return (
      <main className="flex h-screen flex-col items-center justify-center">
        <Loader2 className="text-primary-normal size-10 animate-spin" />
      </main>
    );
  }

  if (isError) {
    errorToast("결제 완료 중 오류가 발생했어요.");
    return <Navigate to="/agency" replace />;
  }

  queryClient.invalidateQueries({ queryKey: [COUNSEL.COUNSEL_STATUS] });

  return <Navigate to="/agency" replace />;
}
