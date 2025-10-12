import { useQuery } from "@tanstack/react-query";

import type { HTTPError } from "ky";

import { COUNSEL } from "~/constants/counsel";
import { useRefreshTokenStore } from "~/lib/zustand/user";
import type { BaseResponse } from "~/models";
import type { AvailableTimesRequest } from "~/models/counsel";
import type { ReservedCounselDataResponse } from "~/models/counsel";
import { getAvailableTimes, getReservedCounselData } from "~/services/counsel";

export const useGetAvailableTimes = (props: AvailableTimesRequest) => {
  return useQuery<BaseResponse<string[]>, HTTPError, string[]>({
    queryKey: [COUNSEL.AVAILABLE_TIMES, props.counseldorId, props.date],
    queryFn: () => getAvailableTimes(props),
    select: (data) => data.result,
    enabled: !!props.date,
  });
};

export const useCheckCounselStatus = () => {
  const refreshToken = useRefreshTokenStore((state) => state.refreshToken);

  return useQuery<
    BaseResponse<ReservedCounselDataResponse>,
    HTTPError,
    ReservedCounselDataResponse
  >({
    queryKey: [COUNSEL.COUNSEL_STATUS],
    queryFn: getReservedCounselData,
    select: (data) => data.result,
    enabled: !!refreshToken,
  });
};
