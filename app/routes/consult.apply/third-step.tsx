import type { UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router";

import FloatingContainer from "~/components/container/floating-container";
import { Button } from "~/components/ui/button";
import { type ApplyConsultForm } from "~/schemas/consult";

interface ThirdStepProps {
  form: UseFormReturn<ApplyConsultForm>;
}

const ThirdStep = ({ form }: ThirdStepProps) => {
  const navigate = useNavigate();

  const service = form.watch("service");
  const nextDisabled = !service;

  const onNext = () => {
    navigate("?step=4");
  };

  const onPrev = () => {
    navigate("?step=2");
  };

  return (
    <section>
      ThirdStep
      <FloatingContainer className="flex gap-3">
        <Button onClick={onPrev} theme="assistive" className="flex-1 transition-none">
          이전
        </Button>
        <Button onClick={onNext} disabled={nextDisabled} className="flex-1 transition-none">
          다음
        </Button>
      </FloatingContainer>
    </section>
  );
};

export default ThirdStep;
