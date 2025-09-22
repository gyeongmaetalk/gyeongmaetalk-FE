import type { PaginationResponse } from "~/models";

export const calculatePaigination = (lastPage: PaginationResponse<unknown>) => {
  if (lastPage.isLast) return undefined;
  return lastPage.page + 1;
};
