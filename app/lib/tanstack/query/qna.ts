import { useQuery } from "@tanstack/react-query";

import type { HTTPError } from "ky";

import { QNA } from "~/constants/qna";
import type { BaseResponse } from "~/models";
import type { FaqResponse, QnaResponse } from "~/models/qna";
import { getFaq, getMyQna } from "~/services/qna";

export const useGetMyQna = () => {
  return useQuery<BaseResponse<QnaResponse>, HTTPError, QnaResponse>({
    queryKey: [QNA.MY_QNA],
    queryFn: getMyQna,
    select: (data) => data.result,
    staleTime: 1000 * 60 * 5,
  });
};

export const useGetFaq = () => {
  return useQuery<BaseResponse<FaqResponse>, HTTPError, FaqResponse>({
    queryKey: [QNA.FAQ],
    queryFn: getFaq,
    select: (data) => data.result,
    staleTime: 1000 * 60 * 5,
  });
};
