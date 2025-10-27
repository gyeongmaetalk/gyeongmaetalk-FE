import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import type { HTTPError } from "ky";

import type { BaseResponse } from "~/models";
import type {
  ConfirmPaymentResponse,
  ConfirmPurchaseRequest,
  ConfirmSubscriptionRequest,
  ReadyPurchaseResponse,
  ReadySubscribeResponse,
} from "~/models/property";
import {
  confirmPurchase,
  confirmSubscription,
  readyPurchase,
  readySubscribe,
} from "~/services/property";

export const useReadySubscribe = (
  options?: UseMutationOptions<BaseResponse<ReadySubscribeResponse>, HTTPError, number>
) => {
  return useMutation<BaseResponse<ReadySubscribeResponse>, HTTPError, number>({
    mutationFn: readySubscribe,
    ...options,
  });
};

export const useConfirmSubscription = (
  options?: UseMutationOptions<
    BaseResponse<ConfirmPaymentResponse>,
    HTTPError,
    ConfirmSubscriptionRequest
  >
) => {
  return useMutation<BaseResponse<ConfirmPaymentResponse>, HTTPError, ConfirmSubscriptionRequest>({
    mutationFn: confirmSubscription,
    ...options,
  });
};

export const useReadyPurchase = (
  options?: UseMutationOptions<BaseResponse<ReadyPurchaseResponse>, HTTPError, number>
) => {
  return useMutation<BaseResponse<ReadyPurchaseResponse>, HTTPError, number>({
    mutationFn: readyPurchase,
    ...options,
  });
};

export const useConfirmPurchase = (
  options?: UseMutationOptions<
    BaseResponse<ConfirmPaymentResponse>,
    HTTPError,
    ConfirmPurchaseRequest
  >
) => {
  return useMutation<BaseResponse<ConfirmPaymentResponse>, HTTPError, ConfirmPurchaseRequest>({
    mutationFn: confirmPurchase,
    ...options,
  });
};
