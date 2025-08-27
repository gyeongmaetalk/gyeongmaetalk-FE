import type { UseFormReturn } from "react-hook-form";

import { type ApplyConsultForm } from "~/schemas/consult";

interface FourthStepProps {
  form: UseFormReturn<ApplyConsultForm>;
}

const FourthStep = ({ form }: FourthStepProps) => {
  return <section>FourthStep</section>;
};

export default FourthStep;
