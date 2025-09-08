import Accordion from "~/components/ui/accordion";

export default function QuestionsPage() {
  return (
    <div className="space-y-2 px-5">
      <Accordion>
        <Accordion.Header>
          <p className="font-body2-normal-bold">상담은 얼마나 진행하나요?</p>
        </Accordion.Header>
        <Accordion.Content>
          <p className="font-label1-normal-regular text-label-neutral">
            제목에 대한 상세 내용을 입력해주세요. 긴 컨텐츠라면 접은 상태를 기본값으로 사용하세요.
          </p>
        </Accordion.Content>
      </Accordion>
      <Accordion>
        <Accordion.Header>
          <p className="font-body2-normal-bold">상담은 얼마나 진행하나요?</p>
        </Accordion.Header>
        <Accordion.Content>
          <p className="font-label1-normal-regular text-label-neutral">
            제목에 대한 상세 내용을 입력해주세요. 긴 컨텐츠라면 접은 상태를 기본값으로 사용하세요.
          </p>
        </Accordion.Content>
      </Accordion>
    </div>
  );
}
