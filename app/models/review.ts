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
