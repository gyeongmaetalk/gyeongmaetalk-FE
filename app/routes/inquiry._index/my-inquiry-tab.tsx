import Accordion from "~/components/ui/accordion";

export default function MyInquiryTab() {
  return (
    <div className="space-y-2 px-5">
      <Accordion>
        <Accordion.Header>
          <div className="flex w-full items-center justify-between gap-2">
            <p className="font-body2-normal-bold">상담은 얼마나 진행하나요?</p>
            <p className="text-label-alternative font-label1-normal-bold mr-2">답변 대기</p>
          </div>
        </Accordion.Header>
        <Accordion.Content>
          <p className="font-label1-normal-regular text-label-neutral">답변 대기</p>
        </Accordion.Content>
      </Accordion>
      <Accordion>
        <Accordion.Header>
          <div className="flex w-full items-center justify-between gap-2">
            <p className="font-body2-normal-bold">상담은 얼마나 진행하나요?</p>
            <p className="text-status-positive font-label1-normal-bold mr-2">답변 완료</p>
          </div>
        </Accordion.Header>
        <Accordion.Content>
          <p className="font-label1-normal-regular text-label-neutral">
            제목에 대한 상세 내용을 입력해주세요. 긴 컨텐츠라면 접은 상태를 기본값으로 사용하세요.
          </p>
          <p className="font-label1-normal-regular text-cool-neutral-70 mt-2">2025.07.07(월)</p>
        </Accordion.Content>
      </Accordion>
    </div>
  );
}
