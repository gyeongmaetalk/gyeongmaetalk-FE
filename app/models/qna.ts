export interface MyQnaDetailResponse {
  qnaTitle: string;
  qnaContent: string;
  qnaStatus: "PENDING" | "ANSWERED";
  answerContent: string;
  answerTime: string;
}

export interface FaqResponse {
  question: string;
  answer: string;
}

export interface MyQnaRequest {
  title: string;
  content: string;
  isAgree: boolean;
}

export interface MyQnaResponse {
  id: number;
}
