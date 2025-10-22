import type { SortType } from "~/constants/api";
import { api } from "~/lib/ky";
import type { BaseResponse, PaginationResponse } from "~/models";
import type {
  ConsultantReviewListResponse,
  ReviewDetailResponse,
  ReviewListResponse,
  ReviewReportRequest,
  ReviewResponse,
} from "~/models/review";

export const getConsultantReviews = async (props: {
  consultantId: string;
  type: SortType;
  page: string;
}): Promise<PaginationResponse<ConsultantReviewListResponse>> => {
  const { consultantId, ...restProps } = props;
  const searchParams = new URLSearchParams({ ...restProps, size: "10" });
  return api.get(`reviews/list/${consultantId}`, { searchParams }).json();
};

export const getReviews = async (props: {
  type: SortType;
  page: string;
}): Promise<PaginationResponse<ReviewListResponse>> => {
  const searchParams = new URLSearchParams({ ...props, size: "10" });
  return api.get(`reviews/list`, { searchParams }).json();
};

export const getReviewById = async (
  reviewId: string
): Promise<BaseResponse<ReviewDetailResponse>> => {
  return api.get(`reviews/${reviewId}`).json();
};

export const createReview = (formData: FormData): Promise<BaseResponse<ReviewResponse>> => {
  return api.post("reviews", { body: formData }).json();
};

export const updateReview = ({
  formData,
  reviewId,
}: {
  formData: FormData;
  reviewId: string;
}): Promise<BaseResponse<ReviewResponse>> => {
  return api.patch(`reviews/${reviewId}`, { body: formData }).json();
};

export const removeReview = (reviewId: number): Promise<BaseResponse<ReviewResponse>> => {
  return api.delete(`reviews/${reviewId}`).json();
};

export const reportReview = ({
  reviewId,
  body,
}: ReviewReportRequest): Promise<BaseResponse<ReviewResponse>> => {
  return api.post(`reviews/${reviewId}/reports`, { searchParams: body }).json();
};

export const getMyReviews = async (
  page: number
): Promise<PaginationResponse<ReviewListResponse>> => {
  console.log("page", page);
  const searchParams = new URLSearchParams({ page: page.toString(), size: "10" });
  return api.get("reviews/my", { searchParams }).json();
};
