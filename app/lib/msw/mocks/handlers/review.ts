import { http, HttpResponse } from "msw";

import { paginationResponse } from "../response";

export const consultantReviewHandlers = [
  http.get("/reviews/list/:consultantId", () => {
    return HttpResponse.json(
      paginationResponse({
        reviews: [
          {
            reviewId: 1,
            name: "dkd1234",
            createAt: "2025-01-20T15:30:00",
            isMine: true,
            score: 5,
            content: "상담이 정말 유익했습니다.",
            imageCount: 2,
            thumbnail:
              "https://i.namu.wiki/i/8mcZn4QTDZNSyG5LCLIltEOwSsrMoAG9TKsurgtD2zMPJWqQCYvZUsL_66BkJy3JmN4lhegQHg_A2iGdD-AWLw.webp",
          },
          {
            reviewId: 2,
            name: "user5678",
            createAt: "2025-01-19T14:20:00",
            isMine: false,
            score: 4,
            content: "친절했지만 대기 시간이 좀 길었어요.",
            imageCount: 0,
            thumbnail: null,
          },
        ],
      })
    );
  }),
];

export const reviewHandlers = [
  http.get("/reviews/list", () => {
    return HttpResponse.json(
      paginationResponse({
        reviews: [
          {
            reviewId: 1,
            name: "dkd1234",
            createAt: "2025-01-20T15:30:00",
            counselorName: "이정훈",
            counselDateTime: "2025-01-18T10:00:00",
            isMine: true,
            score: 5,
            content: "상담이 정말 유익했습니다.",
            imageCount: 2,
            thumbnail:
              "https://i.namu.wiki/i/8mcZn4QTDZNSyG5LCLIltEOwSsrMoAG9TKsurgtD2zMPJWqQCYvZUsL_66BkJy3JmN4lhegQHg_A2iGdD-AWLw.webp",
          },
          {
            reviewId: 2,
            name: "user5678",
            createAt: "2025-01-19T14:20:00",
            counselorName: "이정훈",
            counselDateTime: "2025-01-15T16:00:00",
            isMine: false,
            score: 4,
            content: "친절했지만 대기 시간이 좀 길었어요.",
            imageCount: 0,
            thumbnail: null,
          },
        ],
      })
    );
  }),
];
