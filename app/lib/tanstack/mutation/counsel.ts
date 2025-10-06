import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import type { HTTPError } from "ky";

import type { BaseResponse } from "~/models";
import type { MatchCounselRequest, MatchCounselResponse } from "~/models/counsel";
import { matchCounsel } from "~/services/counsel";

export const useMatchCounsel = (
  options?: UseMutationOptions<BaseResponse<MatchCounselResponse>, HTTPError, MatchCounselRequest>
) => {
  return useMutation<BaseResponse<MatchCounselResponse>, HTTPError, MatchCounselRequest>({
    mutationFn: matchCounsel,
    ...options,
  });
};
