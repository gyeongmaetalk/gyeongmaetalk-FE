import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import type { HTTPError } from "ky";

import type { BaseResponse } from "~/models";
import type { CreateReviewResponse } from "~/models/review";
import { createReview, updateReview } from "~/services/review";

export const useCreateReview = (
  options?: UseMutationOptions<BaseResponse<CreateReviewResponse>, HTTPError, FormData>
) => {
  return useMutation({
    mutationFn: createReview,
    ...options,
  });
};

export const useUpdateReview = (
  options?: UseMutationOptions<BaseResponse<CreateReviewResponse>, HTTPError, FormData>
) => {
  return useMutation({
    mutationFn: updateReview,
    ...options,
  });
};
