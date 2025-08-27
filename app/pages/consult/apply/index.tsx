import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";

import { WithCloseHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import ApplyConsultError from "~/routes/consult.apply/error";
import FirstStep from "~/routes/consult.apply/first-step";
import FourthStep from "~/routes/consult.apply/fourth-step";
import LastStep from "~/routes/consult.apply/last-step";
import SecondStep from "~/routes/consult.apply/second-step";
import ThirdStep from "~/routes/consult.apply/third-step";
import { type ApplyConsultForm, applyConsultFormSchema } from "~/schemas/consult";

const DEFAULT_VALUES: ApplyConsultForm = {
  purpose: null,
  region: null,
  service: null,
  category: null,
  name: null,
};

const ConsultApplyPage = () => {
  const [isError, setIsError] = useState(false);
  const [searchParams] = useSearchParams();

  const currentStep = Number(searchParams.get("step") || "1");

  const form = useForm<ApplyConsultForm>({
    resolver: zodResolver(applyConsultFormSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const navigate = useNavigate();

  const onResetError = () => {
    form.reset();
    setIsError(false);
    navigate("?", { replace: true });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <FirstStep form={form} />;
      case 2:
        return <SecondStep form={form} />;
      case 3:
        return <ThirdStep form={form} />;
      case 4:
        return <FourthStep form={form} />;
      case 5:
        return <LastStep form={form} />;
    }
  };

  useEffect(() => {
    // 스텝의 범위를 벗어났는지 확인
    const isOutOfRange = currentStep > 5 || currentStep < 1;

    // 이전 스텝의 값이 null이라면 잘못된 접근
    const isSecondStepValid = currentStep === 2 && form.getValues("purpose") !== null;
    const isThirdStepValid = currentStep === 3 && form.getValues("region") !== null;
    const isFourthStepValid = currentStep === 4 && form.getValues("service") !== null;
    const isFifthStepValid = currentStep === 5 && form.getValues("category") !== null;

    if (
      isOutOfRange ||
      isSecondStepValid ||
      isThirdStepValid ||
      isFourthStepValid ||
      isFifthStepValid
    ) {
      setIsError(true);
    }
  }, [currentStep]);

  return isError ? (
    <ApplyConsultError onResetError={onResetError} />
  ) : (
    <PageLayout header={<WithCloseHeader title="상담 신청" onClose={() => {}} />}>
      {renderStep()}
    </PageLayout>
  );
};

export default ConsultApplyPage;
