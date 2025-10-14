import { api } from "~/lib/ky";
import type { BaseResponse } from "~/models";
import type { QnaResponse } from "~/models/qna";

export const getMyQna = async (): Promise<BaseResponse<QnaResponse>> => {
  return api.get("qna/my").json();
};
