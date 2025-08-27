import type { UseFormReturn } from "react-hook-form";

import { type ApplyConsultForm } from "~/schemas/consult";

interface LastStepProps {
  form: UseFormReturn<ApplyConsultForm>;
}

const LastStep = ({ form }: LastStepProps) => {
  return <section>LastStep</section>;
};

export default LastStep;
