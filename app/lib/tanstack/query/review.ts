import { useInfiniteQuery } from "@tanstack/react-query";

import { REVIEW } from "~/constants/review";
import { getConsultantReviews, getReviews } from "~/services/review";

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
    getNextPageParam: (lastPage) => {
      if (lastPage.isLast) return undefined;
      return lastPage.page + 1;
    },
    initialPageParam: 0,
    select: (data) => data.pages.flatMap((page) => page.results.reviews),
  });
};

export const useGetReviews = (type: string) => {
  return useInfiniteQuery({
    queryKey: [REVIEW.REVIEWS, type],
    queryFn: ({ pageParam = 0 }) => getReviews({ type, page: pageParam.toString() }),
    getNextPageParam: (lastPage) => {
      if (lastPage.isLast) return undefined;
      return lastPage.page + 1;
    },
    initialPageParam: 0,
    select: (data) => data.pages.flatMap((page) => page.results.reviews),
  });
};
