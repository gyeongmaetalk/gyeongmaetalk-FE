import { useState } from "react";

import type { UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router";

import FloatingContainer from "~/components/container/floating-container";
import { Button } from "~/components/ui/button";
import { Textfield } from "~/components/ui/textfield";
import { type ApplyConsultForm } from "~/routes/consult.apply/schema";

import { REGION_OPTIONS } from "./constant";
import Select from "./select";

interface SecondStepProps {
  form: UseFormReturn<ApplyConsultForm>;
}

const SecondStep = ({ form }: SecondStepProps) => {
  const [region, setRegion] = useState<string | null>(form.getValues("region"));
  const [customRegion, setCustomRegion] = useState("");

  const navigate = useNavigate();

  const nextDisabled = region === "custom" ? !customRegion : !region;

  const onSelect = (value: string) => {
    if (region === value) {
      setRegion(null);
    } else {
      setRegion(value);
    }
  };

  const onNext = () => {
    const value = region === "custom" ? customRegion : region;
    form.setValue("region", value);
    navigate("?step=3");
  };

  const onPrev = () => {
    navigate("?step=1");
  };

  return (
    <>
      <section className="space-y-9 px-4">
        <div className="space-y-2">
          <p className="font-label2-bold text-primary-normal">2. 지역</p>
          <p className="font-heading1-bold text-label-strong">관심 지역이 있으신가요?</p>
          <p className="text-cool-neutral-50 font-body1-normal-regular">
            관심 지역의 전문가를 연결해드려요.
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex flex-col gap-3">
            {REGION_OPTIONS.map((option) => (
              <Select
                key={option.value}
                label={option.label}
                isSelected={region === option.value}
                onChange={() => onSelect(option.value)}
              />
            ))}
          </div>
          {region === "custom" && (
            <Textfield
              value={customRegion}
              onChange={(e) => setCustomRegion(e.target.value)}
              placeholder="관심 있는 지역을 입력해 주세요."
            />
          )}
        </div>
      </section>
      <FloatingContainer className="flex gap-3">
        <Button onClick={onPrev} theme="assistive" className="flex-1 transition-none">
          이전
        </Button>
        <Button onClick={onNext} disabled={nextDisabled} className="flex-1 transition-none">
          다음
        </Button>
      </FloatingContainer>
    </>
  );
};

export default SecondStep;
