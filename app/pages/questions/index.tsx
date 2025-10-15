import Accordion from "~/components/ui/accordion";
import { useGetFAQ } from "~/lib/tanstack/query/qna";

export default function QuestionsPage() {
  const { data: faq } = useGetFAQ();

  if (faq?.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="font-label1-normal-regular text-label-neutral">자주 묻는 질문이 없습니다</p>
      </div>
    );
  }

  return (
    <div className="space-y-2 px-5">
      {faq?.map((item) => (
        <Accordion key={item.question}>
          <Accordion.Header>
            <p className="font-body2-normal-bold">{item.question}</p>
          </Accordion.Header>
          <Accordion.Content>
            <p className="font-label1-normal-regular text-label-neutral">{item.answer}</p>
          </Accordion.Content>
        </Accordion>
      ))}
    </div>
  );
}
