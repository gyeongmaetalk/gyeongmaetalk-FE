import type { UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router";

import FloatingContainer from "~/components/container/floating-container";
import { Button } from "~/components/ui/button";
import { type ApplyConsultForm } from "~/schemas/consult";

interface FourthStepProps {
  form: UseFormReturn<ApplyConsultForm>;
}

const FourthStep = ({ form }: FourthStepProps) => {
  const navigate = useNavigate();

  const category = form.watch("category");
  const nextDisabled = !category;

  const onNext = () => {
    navigate("?step=5");
  };

  const onPrev = () => {
    navigate("?step=3");
  };

  return (
    <section>
      FourthStep
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

export default FourthStep;
