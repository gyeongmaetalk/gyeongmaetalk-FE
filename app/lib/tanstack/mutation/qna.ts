import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import type { HTTPError } from "ky";

import type { BaseResponse } from "~/models";
import type { MyQnaRequest, MyQnaResponse } from "~/models/qna";
import { createMyQna } from "~/services/qna";

export const useCreateMyQna = (
  options?: UseMutationOptions<BaseResponse<MyQnaResponse>, HTTPError, MyQnaRequest>
) => {
  return useMutation({
    mutationFn: createMyQna,
    ...options,
  });
};
