import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import type { HTTPError } from "ky";

import type { SortType } from "~/constants/api";
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
  type: SortType;
}) => {
  return useInfiniteQuery({
    queryKey: [REVIEW.CONSULTANT_REVIEWS, type, consultantId],
    queryFn: ({ pageParam = 0 }) =>
      getConsultantReviews({ consultantId, type, page: pageParam.toString() }),
    getNextPageParam: calculatePaigination,
    initialPageParam: 0,
    select: (data) => {
      return {
        consultantReviews: data.pages.flatMap((page) => page.result.reviews),
        counselorInfo: data.pages[0].result.counselorInfo,
      };
    },
  });
};

export const useGetReviews = (type: SortType) => {
  return useInfiniteQuery({
    queryKey: [REVIEW.REVIEWS, type],
    queryFn: ({ pageParam = 0 }) => getReviews({ type, page: pageParam.toString() }),
    getNextPageParam: calculatePaigination,
    initialPageParam: 0,
    select: (data) => data.pages.flatMap((page) => page.result.reviews),
  });
};

export const useGetReviewById = (reviewId: string | null) => {
  return useQuery<BaseResponse<ReviewDetailResponse>, HTTPError, ReviewDetailResponse>({
    queryKey: [REVIEW.REVIEW_DETAIL, reviewId],
    queryFn: () => getReviewById(reviewId as string),
    select: (data) => data.result,
    enabled: !!reviewId,
    staleTime: 1000 * 60,
  });
};
