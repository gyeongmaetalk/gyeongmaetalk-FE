import { useQuery } from "@tanstack/react-query";

import type { HTTPError } from "ky";

import { COUNSEL } from "~/constants/counsel";
import type { BaseResponse } from "~/models";
import type { AvailableTimesRequest } from "~/models/counsel";
import { getAvailableTimes } from "~/services/counsel";

export const useGetAvailableTimes = (props: AvailableTimesRequest) => {
  return useQuery<BaseResponse<string[]>, HTTPError, string[]>({
    queryKey: [COUNSEL.AVAILABLE_TIMES, props.counseldorId, props.date],
    queryFn: () => getAvailableTimes(props),
    select: (data) => data.result,
    enabled: !!props.date,
  });
};
