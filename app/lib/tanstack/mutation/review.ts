import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

import type { HTTPError } from "ky";

import type { BaseResponse } from "~/models";
import type { ReviewResponse } from "~/models/review";
import { createReview, removeReview, reportReview, updateReview } from "~/services/review";

export const useCreateReview = (
  options?: UseMutationOptions<BaseResponse<ReviewResponse>, HTTPError, FormData>
) => {
  return useMutation({
    mutationFn: createReview,
    ...options,
  });
};

export const useUpdateReview = (
  options?: UseMutationOptions<BaseResponse<ReviewResponse>, HTTPError, FormData>
) => {
  return useMutation({
    mutationFn: updateReview,
    ...options,
  });
};

export const useRemoveReview = (
  options?: UseMutationOptions<BaseResponse<ReviewResponse>, HTTPError, number>
) => {
  return useMutation<BaseResponse<ReviewResponse>, HTTPError, number>({
    mutationFn: removeReview,
    ...options,
  });
};

export const useReportReview = (
  options?: UseMutationOptions<BaseResponse<ReviewResponse>, HTTPError, number>
) => {
  return useMutation<BaseResponse<ReviewResponse>, HTTPError, number>({
    mutationFn: reportReview,
    ...options,
  });
};
