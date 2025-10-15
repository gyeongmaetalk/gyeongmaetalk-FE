import { useQuery } from "@tanstack/react-query";

import QNA from "~/constants/qna";
import { useRefreshTokenStore } from "~/lib/zustand/user";
import { getFAQ,getMyQna } from "~/services/qna";

export const useGetMyQna = () => {
  const refreshToken = useRefreshTokenStore((state) => state.refreshToken);
  return useQuery({
    queryKey: [QNA.MY_QNA],
    queryFn: () => getMyQna(),
    select: (data) => data.result,
    enabled: !!refreshToken,
  });
};

export const useGetFAQ = () => {
  return useQuery({
    queryKey: [QNA.FAQ],
    queryFn: () => getFAQ(),
    select: (data) => data.result,
  });
};
