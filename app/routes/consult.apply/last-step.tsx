import { useState } from "react";

import type { UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router";

import FloatingContainer from "~/components/container/floating-container";
import { Button } from "~/components/ui/button";
import { type ApplyConsultForm } from "~/routes/consult.apply/schema";

import { LAST_STEP_OPTIONS } from "./constant";
import Select from "./select";

interface LastStepProps {
  form: UseFormReturn<ApplyConsultForm>;
}

const LastStep = ({ form }: LastStepProps) => {
  const [name, setName] = useState<string | null>(form.getValues("name"));
  const [innerOption, setInnerOption] = useState("");

  const navigate = useNavigate();

  const submitDisabled = name === "personal" ? !innerOption : !name;
  const isInnerOpen = name === "personal";

  const onSelect = (value: string) => {
    if (name === value) {
      setName(null);
    } else {
      setName(value);
    }
  };

  const onInnerSelect = (value: string) => {
    if (innerOption === value) {
      setInnerOption("");
    } else {
      setInnerOption(value);
    }
  };

  const onPrev = () => {
    navigate("?step=4");
  };

  const onComplete = form.handleSubmit(
    (data) => {
      // TODO: 상담 신청 API 호출
      // data에 있는 name 말고 selectedValue 사용하기
      const selectedValue = name === "personal" ? innerOption : name;
      console.log(data);
    },
    (errors) => {
      console.error(errors);
    }
  );

  return (
    <>
      <section className="space-y-9 px-4">
        <div className="space-y-2">
          <p className="font-label2-bold text-primary-normal">5. 명의</p>
          <p className="font-heading1-bold text-label-strong">
            경매 참여는 어떤 명의로
            <br />
            하실 계획이신가요?
          </p>
          <p className="text-cool-neutral-50 font-body1-normal-regular">
            절세 전략과 대출 조건 상담에 활용돼요.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {LAST_STEP_OPTIONS.map((option) => (
            <div key={option.value} className="space-y-2">
              <Select
                label={option.label}
                isSelected={name === option.value}
                onChange={() => onSelect(option.value)}
              />
              <div className="space-y-1.5">
                {option.options &&
                  isInnerOpen &&
                  option.options.map((inner) => (
                    <Select
                      key={inner.value}
                      variant="inner"
                      label={inner.label}
                      isSelected={innerOption === inner.value}
                      onChange={() => onInnerSelect(inner.value)}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <FloatingContainer className="flex gap-3">
        <Button onClick={onPrev} theme="assistive" className="flex-1 transition-none">
          이전
        </Button>
        <Button onClick={onComplete} disabled={submitDisabled} className="flex-1 transition-none">
          완료
        </Button>
      </FloatingContainer>
    </>
  );
};

export default LastStep;
