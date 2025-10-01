import { AuthProvider } from "~/constants/auth";
import { api } from "~/lib/ky";
import type { BaseResponse } from "~/models";
import type { UserResponse } from "~/models/auth";

export const login = async (props: {
  accessToken: string;
  provider: AuthProvider;
}): Promise<BaseResponse<UserResponse>> => {
  const searchParams = new URLSearchParams(props);
  return api.get("auth/login", { searchParams }).json();
};
