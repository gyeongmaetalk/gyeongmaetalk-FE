import { api } from "~/lib/ky";
import type { BaseResponse, PaginationResponse } from "~/models";
import type {
  ConsultantReviewResponse,
  CreateReviewResponse,
  ReviewDetailResponse,
  ReviewResponse,
} from "~/models/review";

export const getConsultantReviews = async (props: {
  consultantId: string;
  type: string;
  page: string;
}): Promise<PaginationResponse<ConsultantReviewResponse>> => {
  const { consultantId, ...restProps } = props;
  const searchParams = new URLSearchParams({ ...restProps, size: "10" });
  return api.get(`reviews/list/${consultantId}`, { searchParams }).json();
};

export const getReviews = async (props: {
  type: string;
  page: string;
}): Promise<PaginationResponse<ReviewResponse>> => {
  const searchParams = new URLSearchParams({ ...props, size: "10" });
  return api.get(`reviews/list`, { searchParams }).json();
};

export const getReviewById = async (
  reviewId: string
): Promise<BaseResponse<ReviewDetailResponse>> => {
  return api.get(`reviews/${reviewId}`).json();
};

export const createReview = (formData: FormData): Promise<BaseResponse<CreateReviewResponse>> => {
  return api.post("reviews", { body: formData }).json();
};
