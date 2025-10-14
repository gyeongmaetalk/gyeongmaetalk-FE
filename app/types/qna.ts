export type QnaStatus = "PENDING" | "ANSWERED";

export interface QnaListItem {
  qnaTitle: string;
  qnaContent: string;
  qnaStatus: QnaStatus;
  answerContent: string;
  answerTime: string;
}

export interface FaqListItem {
  question: string;
  answer: string;
}
