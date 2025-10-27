import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import type { HTTPError } from "ky";

import type { BaseResponse } from "~/models";
import { readNotification } from "~/services/fcm";

export const useReadNotification = (
  options?: UseMutationOptions<BaseResponse<void>, HTTPError, number>
) => {
  return useMutation<BaseResponse<void>, HTTPError, number>({
    mutationFn: readNotification,
    ...options,
  });
};
