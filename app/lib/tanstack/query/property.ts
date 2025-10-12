import { useInfiniteQuery } from "@tanstack/react-query";

import { PROPERTY } from "~/constants/property";
import { getPropertyList } from "~/services/property";
import { calculatePaigination } from "~/utils/api";

export const useGetPropertyList = () => {
  return useInfiniteQuery({
    queryKey: [PROPERTY.PROPERTY_LIST],
    queryFn: ({ pageParam = 0 }) => getPropertyList(pageParam),
    getNextPageParam: calculatePaigination,
    initialPageParam: 0,
    select: (data) => data.pages.flatMap((page) => page.result.properties),
  });
};
