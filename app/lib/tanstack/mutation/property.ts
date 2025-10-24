import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import type { HTTPError } from "ky";

import type { BaseResponse } from "~/models";
import type {
  ConfirmSubscriptionRequest,
  ConfirmSubscriptionResponse,
  ReadySubscribeResponse,
} from "~/models/property";
import { confirmSubscription, readySubscribe } from "~/services/property";

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
    BaseResponse<ConfirmSubscriptionResponse>,
    HTTPError,
    ConfirmSubscriptionRequest
  >
) => {
  return useMutation<
    BaseResponse<ConfirmSubscriptionResponse>,
    HTTPError,
    ConfirmSubscriptionRequest
  >({
    mutationFn: confirmSubscription,
    ...options,
  });
};
