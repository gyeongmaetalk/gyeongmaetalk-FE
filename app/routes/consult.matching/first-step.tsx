import { useNavigate } from "react-router";

import complete from "~/assets/complete.png";
import ConsultantCard from "~/components/card/consultant-card";
import FloatingContainer from "~/components/container/floating-container";
import { WithCloseHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import { Button } from "~/components/ui/button";

const FirstStep = () => {
  const navigate = useNavigate();

  const onMakeReservation = () => {
    navigate("?mode=reservation");
  };

  return (
    <>
      <PageLayout
        header={<WithCloseHeader className="bg-transparent" onClose={() => {}} />}
        bgGradient
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <img src={complete} alt="complete" className="size-[52px]" />
          <p className="text-cool-neutral-10 font-heading2-bold">
            OO님께 딱 맞는
            <br />
            <span className="text-primary-normal">경매 전문 상담사</span>를 찾아드렸어요.
          </p>
        </div>
        <div className="mt-8 px-4">
          <ConsultantCard />
        </div>
      </PageLayout>
      <FloatingContainer className="flex gap-3">
        <Button theme="assistive" className="flex-1 transition-none">
          다시 매칭 (0/1)
        </Button>
        <Button onClick={onMakeReservation} className="flex-1 transition-none">
          상담일정 선택
        </Button>
      </FloatingContainer>
    </>
  );
};

export default FirstStep;
