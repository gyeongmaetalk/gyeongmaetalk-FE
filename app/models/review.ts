export interface ConsultantReviewListItemDTO {
  reviewId: number;
  name: string;
  createAt: string;
  isMine: boolean;
  score: number;
  content: string;
  imageCount: number;
  thumbnail: string;
}

export interface ConsultantReviewResponse {
  reviews: ConsultantReviewListItemDTO[];
}

export interface ReviewListItemDTO extends ConsultantReviewListItemDTO {
  counselorName: string;
  counselDateTime: string;
}

export interface ReviewResponse {
  reviews: ReviewListItemDTO[];
}

export interface ReviewDetailResponse {
  reviewId: number;
  name: string;
  createAt: string;
  counselDateTime: string;
  isMine: boolean;
  score: number;
  content: string;
  images: string[];
  counselorName: string;
  experience: number;
  counselorImage: string;
}

export interface CreateReviewResponse {
  reviewId: number;
}
