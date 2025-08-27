import { useEffect, useState } from "react";

import { useNavigate, useSearchParams } from "react-router";

import { Header } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import { Button } from "~/components/ui/button/index";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import { ONBOARDING_STEPS } from "~/constants/onboarding";
import { cn } from "~/lib/utils";

const OnboardingPage = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const isApplyMode = searchParams.get("mode") === "apply";
  const isLastStep = currentStep === ONBOARDING_STEPS.length - 1;
  const buttonText = isLastStep ? (isApplyMode ? "무료 상담 신청하기" : "경매톡 시작하기") : "다음";

  const onNext = () => {
    if (api?.canScrollNext() && !isLastStep) {
      api?.scrollNext();
    }
    if (isLastStep) {
      // mode가 apply인 경우 상담 신청 페이지로 이동
      const location = isApplyMode ? "/consulting/apply" : "/";
      navigate(location);
    }
  };

  const onPrev = () => {
    if (api?.canScrollPrev()) {
      api?.scrollPrev();
    }
  };

  const onSkip = () => {
    setCurrentStep(ONBOARDING_STEPS.length - 1);
    api?.scrollTo(ONBOARDING_STEPS.length - 1);
  };

  useEffect(() => {
    if (api) {
      api.on("select", () => {
        setCurrentStep(api.selectedScrollSnap());
      });
    }
  }, [api]);

  return (
    <PageLayout
      header={
        <Header.Container>
          <Header.Left>
            <Header.Back onClick={onPrev} />
          </Header.Left>
          {!isLastStep && (
            <Header.Right>
              <Button variant="text" theme="assistive" onClick={onSkip}>
                건너뛰기
              </Button>
            </Header.Right>
          )}
        </Header.Container>
      }
    >
      <div className="flex h-full flex-col bg-white">
        <Carousel className="h-full" setApi={setApi}>
          <CarouselContent containerClassName="h-full" className="h-full">
            {ONBOARDING_STEPS.map((step) => (
              <CarouselItem key={`${step.id}-${step.title}`}>
                <div className="flex h-full flex-col px-4 py-5">
                  <div>
                    <h3 className="font-body1-normal-bold text-primary-normal">{step.title}</h3>
                    <p className="font-heading1-bold text-label-strong whitespace-pre-line">
                      {step.description}
                    </p>
                  </div>
                  <img src={step.image} alt={step.title} className="aspect-square" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-center gap-1 py-10">
          {Array.from({ length: ONBOARDING_STEPS.length }).map((_, index) => (
            <div
              key={index}
              className={cn(
                "bg-label-assistive size-2 rounded-full transition-all",
                currentStep === index && "bg-label-neutral w-5"
              )}
            />
          ))}
        </div>
        <Button onClick={onNext}>{buttonText}</Button>
      </div>
    </PageLayout>
  );
};

export default OnboardingPage;
