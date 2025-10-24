import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import type { HTTPError } from "ky";

import type { BaseResponse } from "~/models";
import type { ReadySubscribeResponse } from "~/models/property";
import { readySubscribe } from "~/services/property";

export const useReadySubscribe = (
  options?: UseMutationOptions<BaseResponse<ReadySubscribeResponse>, HTTPError, number>
) => {
  return useMutation<BaseResponse<ReadySubscribeResponse>, HTTPError, number>({
    mutationFn: readySubscribe,
    ...options,
  });
};
