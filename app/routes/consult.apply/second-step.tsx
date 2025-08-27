import type { UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router";

import FloatingContainer from "~/components/container/floating-container";
import { Button } from "~/components/ui/button";
import { type ApplyConsultForm } from "~/schemas/consult";

interface SecondStepProps {
  form: UseFormReturn<ApplyConsultForm>;
}

const SecondStep = ({ form }: SecondStepProps) => {
  const navigate = useNavigate();

  const region = form.watch("region");
  const nextDisabled = !region;

  const onNext = () => {
    navigate("?step=3");
  };

  const onPrev = () => {
    navigate("?step=1");
  };

  return (
    <section>
      SecondStep
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

export default SecondStep;
