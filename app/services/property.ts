import { api } from "~/lib/ky";
import type { BaseResponse, PaginationResponse } from "~/models";
import type { 
  PropertyDetailResponse, 
  PropertyListResponse,
  ConfirmSubscriptionRequest,
  ConfirmSubscriptionResponse,
  ReadySubscribeResponse,
} from "~/models/property";

export const getPropertyList = async (
  page: number
): Promise<PaginationResponse<PropertyListResponse>> => {
  const searchParams = new URLSearchParams({ page: page.toString(), size: "10" });
  return api.get("properties/list", { searchParams }).json();
};

export const getPropertyDetail = async (
  id: string
): Promise<BaseResponse<PropertyDetailResponse>> => {
  return api.get(`properties/${id}`).json();
import type {
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
