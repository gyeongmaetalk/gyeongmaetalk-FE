import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import type { HTTPError } from "ky";

import { REVIEW } from "~/constants/review";
import type { BaseResponse } from "~/models";
import type { ReviewDetailResponse } from "~/models/review";
import { getConsultantReviews, getReviewById, getReviews } from "~/services/review";
import { calculatePaigination } from "~/utils/api";

export const useGetConsultantReviews = ({
  consultantId,
  type,
}: {
  consultantId: string;
  type: string;
}) => {
  return useInfiniteQuery({
    queryKey: [REVIEW.CONSULTANT_REVIEWS, type, consultantId],
    queryFn: ({ pageParam = 0 }) =>
      getConsultantReviews({ consultantId, type, page: pageParam.toString() }),
    getNextPageParam: calculatePaigination,
    initialPageParam: 0,
    select: (data) => data.pages.flatMap((page) => page.results.reviews),
  });
};

export const useGetReviews = (type: string) => {
  return useInfiniteQuery({
    queryKey: [REVIEW.REVIEWS, type],
    queryFn: ({ pageParam = 0 }) => getReviews({ type, page: pageParam.toString() }),
    getNextPageParam: calculatePaigination,
    initialPageParam: 0,
    select: (data) => data.pages.flatMap((page) => page.results.reviews),
  });
};

export const useGetReviewById = (reviewId: string) => {
  return useQuery<BaseResponse<ReviewDetailResponse>, HTTPError, ReviewDetailResponse>({
    queryKey: [REVIEW.REVIEW_DETAIL, reviewId],
    queryFn: () => getReviewById(reviewId),
    select: (data) => data.results,
  });
};
