import { api } from "~/lib/ky";
import type { BaseResponse } from "~/models";
import type { FaqResponse, MyQnaDetailResponse, MyQnaRequest, MyQnaResponse } from "~/models/qna";

export const getMyQna = async (): Promise<BaseResponse<MyQnaDetailResponse[]>> => {
  return api.get("qna/my").json();
};

export const getFAQ = async (): Promise<BaseResponse<FaqResponse[]>> => {
  return api.get("qna/faq").json();
};

export const createMyQna = async (request: MyQnaRequest): Promise<BaseResponse<MyQnaResponse>> => {
  return api.post("qna", { json: request }).json();
};
