import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import type { HTTPError } from "ky";

import type { BaseResponse } from "~/models";
import type { RequestQnaRequest } from "~/models/qna";
import { requestQna } from "~/services/qna";

export const useRequestQna = (
  options?: UseMutationOptions<BaseResponse<unknown>, HTTPError, RequestQnaRequest>
) => {
  return useMutation({
    mutationFn: requestQna,
    ...options,
  });
};
