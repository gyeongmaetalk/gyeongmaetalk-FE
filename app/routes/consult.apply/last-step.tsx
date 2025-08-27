import type { UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router";

import FloatingContainer from "~/components/container/floating-container";
import { Button } from "~/components/ui/button";
import { type ApplyConsultForm } from "~/schemas/consult";

interface LastStepProps {
  form: UseFormReturn<ApplyConsultForm>;
}

const LastStep = ({ form }: LastStepProps) => {
  const navigate = useNavigate();

  const name = form.watch("name");
  const submitDisabled = !name;

  const onPrev = () => {
    navigate("?step=4");
  };

  const onComplete = () => {
    // TODO: 상담 신청 API 호출
  };

  return (
    <section>
      LastStep
      <FloatingContainer className="flex gap-3">
        <Button onClick={onPrev} theme="assistive" className="flex-1 transition-none">
          이전
        </Button>
        <Button onClick={onComplete} disabled={submitDisabled} className="flex-1 transition-none">
          완료
        </Button>
      </FloatingContainer>
    </section>
  );
};

export default LastStep;
