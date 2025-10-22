import { useQuery } from "@tanstack/react-query";

import type { HTTPError } from "ky";

import { AUTH } from "~/constants/auth";
import { useRefreshTokenStore } from "~/lib/zustand/user";
import type { BaseResponse } from "~/models";
import type { MyInfoResponse } from "~/models/auth";
import { getMyInfo } from "~/services/auth";

export const useGetMyInfo = () => {
  const refreshToken = useRefreshTokenStore((state) => state.refreshToken);

  return useQuery<BaseResponse<MyInfoResponse>, HTTPError, MyInfoResponse>({
    queryKey: [AUTH.MY_INFO],
    queryFn: getMyInfo,
    select: (data) => data.result,
    enabled: !!refreshToken,
  });
};
