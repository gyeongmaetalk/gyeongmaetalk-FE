import { api } from "~/lib/ky";
import type { BaseResponse } from "~/models";
import type { ReadySubscribeResponse } from "~/models/property";

export const readySubscribe = async (
  counselorId: number
): Promise<BaseResponse<ReadySubscribeResponse>> => {
  return api.post(`properties/subscribe/${counselorId}`).json();
};
