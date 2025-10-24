import { api } from "~/lib/ky";
import type { BaseResponse } from "~/models";
import type {
  ConfirmSubscriptionRequest,
  ConfirmSubscriptionResponse,
  ReadySubscribeResponse,
} from "~/models/property";

export const readySubscribe = async (
  counselorId: number
): Promise<BaseResponse<ReadySubscribeResponse>> => {
  return api.post(`properties/subscribe/${counselorId}`).json();
};

export const confirmSubscription = async (
  props: ConfirmSubscriptionRequest
): Promise<BaseResponse<ConfirmSubscriptionResponse>> => {
  const { subscriptionId, ...restProps } = props;
  return api.post(`properties/subscribe/${subscriptionId}/confirm`, { json: restProps }).json();
};
