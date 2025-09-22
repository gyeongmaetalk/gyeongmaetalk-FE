import { http, HttpResponse } from "msw";

import { allReviews, consultantReviews, reviewDetails } from "./data";
import { baseReponse, errorResponse, paginationResponse } from "../../response";

export const reviewHandlers = [
  // 상담사 별 리뷰 목록 조회
  http.get("/reviews/list/:consultantId", () => {
    return HttpResponse.json(
      paginationResponse({
        reviews: consultantReviews,
      })
    );
  }),
  // 전체 리뷰 목록 조회
  http.get("/reviews/list", () => {
    return HttpResponse.json(
      paginationResponse({
        reviews: allReviews,
      })
    );
  }),
  // 리뷰 상세 조회
  http.get("/reviews/:reviewId", ({ params }) => {
    const { reviewId } = params;

    if (!reviewId) {
      return HttpResponse.json(
        errorResponse({
          code: 400,
          message: "Bad Request",
          error: "리뷰 ID는 필수입니다.",
        }),
        {
          status: 400,
        }
      );
    }

    const review = reviewDetails.find((review) => review.reviewId === +reviewId);

    if (!review) {
      return HttpResponse.json(
        errorResponse({
          code: 404,
          message: "Not Found",
          error: "리뷰를 찾을 수 없습니다.",
        }),
        {
          status: 404,
        }
      );
    }

    return HttpResponse.json(baseReponse(review));
  }),
];
