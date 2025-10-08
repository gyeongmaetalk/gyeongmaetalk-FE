import { useQuery } from "@tanstack/react-query";

import type { HTTPError } from "ky";

import { COUNSEL } from "~/constants/counsel";
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

export const useGetReservedCounselData = (props: { userId: string }) => {
  return useQuery<
    BaseResponse<ReservedCounselDataResponse>,
    HTTPError,
    ReservedCounselDataResponse
  >({
    queryKey: [COUNSEL.RESERVED_COUNSEL_DATA, props.userId],
    queryFn: () => getReservedCounselData({ userId: props.userId }),
    select: (data) => data.result,
  });
};
