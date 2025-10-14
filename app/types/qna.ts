export type QnaStatus = "PENDING" | "ANSWERED";

export interface QnaListItem {
  qnaTitle: string;
  qnaContent: string;
  qnaStatus: QnaStatus;
  answerContent: string;
  answerTime: string;
}
