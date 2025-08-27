import type { UseFormReturn } from "react-hook-form";

import { type ApplyConsultForm } from "~/schemas/consult";

interface SecondStepProps {
  form: UseFormReturn<ApplyConsultForm>;
}

const SecondStep = ({ form }: SecondStepProps) => {
  return <section>SecondStep</section>;
};

export default SecondStep;
