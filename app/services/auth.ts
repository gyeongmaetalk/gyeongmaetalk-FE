import { api } from "~/lib/ky";
import type { BaseResponse } from "~/models";
import type { MyInfoResponse } from "~/models/auth";

export const getMyInfo = async (): Promise<BaseResponse<MyInfoResponse>> => {
  return api.get("auth/info").json();
};
