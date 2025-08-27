import type { UseFormReturn } from "react-hook-form";

import { type ApplyConsultForm } from "~/schemas/consult";

interface ThirdStepProps {
  form: UseFormReturn<ApplyConsultForm>;
}

const ThirdStep = ({ form }: ThirdStepProps) => {
  return <section>ThirdStep</section>;
};

export default ThirdStep;
