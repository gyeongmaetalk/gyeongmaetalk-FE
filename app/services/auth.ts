import { api } from "~/lib/ky";
import type { BaseResponse } from "~/models";
import type { MyInfoResponse, SignupResponse } from "~/models/auth";
import type { UpdateUserInfoForm } from "~/routes/mypage.userinfo/schema";

export const getMyInfo = async (): Promise<BaseResponse<MyInfoResponse>> => {
  return api.get("auth/info").json();
};

export const updateUserInfo = async (
  data: UpdateUserInfoForm
): Promise<BaseResponse<SignupResponse>> => {
  return api.post("auth/signup", { json: data }).json();
};
