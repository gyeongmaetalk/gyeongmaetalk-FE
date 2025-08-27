import type { UseFormReturn } from "react-hook-form";

import { type ApplyConsultForm } from "~/schemas/consult";

interface FirstStepProps {
  form: UseFormReturn<ApplyConsultForm>;
}

const FirstStep = ({ form }: FirstStepProps) => {
  return <section>FirstStep</section>;
};

export default FirstStep;
