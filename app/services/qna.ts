import { api } from "~/lib/ky";
import type { BaseResponse } from "~/models";
import type { QnaResponse, RequestQnaRequest } from "~/models/qna";

export const getMyQna = async (): Promise<BaseResponse<QnaResponse>> => {
  return api.get("qna/my").json();
};

export const requestQna = async (props: RequestQnaRequest): Promise<BaseResponse<unknown>> => {
  return api.post("qna", { json: props }).json();
};
