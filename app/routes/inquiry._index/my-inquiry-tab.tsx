import Accordion from "~/components/ui/accordion";
import { QNA_STATUS } from "~/constants/qna";
import { useGetMyQna } from "~/lib/tanstack/query/qna";
import { cn } from "~/lib/utils";

export default function MyInquiryTab() {
  const { data: myQna } = useGetMyQna();

  const getAnswerDate = (date: string) => {
    return new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      weekday: "short",
    }).format(new Date(date));
  };

  return (
    <div className="space-y-2 px-5">
      {myQna?.map((item) => (
        <Accordion key={item.qnaTitle}>
          <Accordion.Header>
            <div className="flex w-full items-center justify-between gap-2">
              <p className="font-body2-normal-bold">{item.qnaTitle}</p>
              <p
                className={cn(
                  "font-label1-normal-bold mr-2",
                  item.qnaStatus === QNA_STATUS.PENDING
                    ? "text-label-alternative"
                    : "text-status-positive"
                )}
              >
                {item.qnaStatus === QNA_STATUS.PENDING
                  ? QNA_STATUS.PENDING_TEXT
                  : QNA_STATUS.ANSWERED_TEXT}
              </p>
            </div>
          </Accordion.Header>
          <Accordion.Content>
            <div className="flex flex-col gap-2">
              <p className="font-label1-normal-regular text-label-neutral">{item.qnaContent}</p>
            </div>
            {item.qnaStatus === "ANSWERED" && item.answerContent && (
              <div className="bg-cool-neutral-99 mt-2 flex flex-col gap-2 px-2 py-3">
                <p className="font-label1-normal-regular text-label-neutral">
                  {item.answerContent}
                </p>
                <p className="font-label1-normal-regular text-cool-neutral-70">
                  {getAnswerDate(item.answerTime)}
                </p>
              </div>
            )}
          </Accordion.Content>
        </Accordion>
      ))}
    </div>
  );
}
