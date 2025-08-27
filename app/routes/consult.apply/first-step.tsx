import type { UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router";

import FloatingContainer from "~/components/container/floating-container";
import { Button } from "~/components/ui/button";
import { type ApplyConsultForm } from "~/schemas/consult";

interface FirstStepProps {
  form: UseFormReturn<ApplyConsultForm>;
}

const FirstStep = ({ form }: FirstStepProps) => {
  const navigate = useNavigate();

  const purpose = form.watch("purpose");
  const nextDisabled = !purpose;

  const onNext = () => {
    navigate("?step=2");
  };

  return (
    <section>
      FirstStep
      <FloatingContainer className="flex gap-3">
        <Button onClick={onNext} disabled={nextDisabled} className="w-full transition-none">
          다음
        </Button>
      </FloatingContainer>
    </section>
  );
};

export default FirstStep;
