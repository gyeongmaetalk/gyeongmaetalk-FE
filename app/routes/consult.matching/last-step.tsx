import { Info } from "lucide-react";
import { useNavigate } from "react-router";

import calendarCheck from "~/assets/calendar-check.png";
import ConsultantCard from "~/components/card/consultant-card";
import FloatingContainer from "~/components/container/floating-container";
import Divider from "~/components/divider";
import { Pencil, Person } from "~/components/icons";
import PageLayout from "~/components/layout/page-layout";
import { Button } from "~/components/ui/button";

const LastStep = () => {
  const navigate = useNavigate();

  const onRouteToHome = () => {
    navigate("/");
  };

  const onRouteToConsultHistory = () => {
    navigate("/consult");
  };

  return (
    <>
      <PageLayout
        withFloating
        className="from-blue-gradient-start bg-gradient-to-b to-white to-10%"
      >
        <section className="space-y-8 px-4 pb-6">
          <div className="flex flex-col items-center gap-3">
            <img src={calendarCheck} alt="상담 일정 확정 아이콘" className="w-20" />
            <p className="text-cool-neutral-10 font-heading2-bold">
              <span className="text-primary-normal">상담 일정</span>이 확정되었습니다.
            </p>
          </div>
          <ConsultantCard />
        </section>
        <Divider className="bg-cool-neutral-99 h-2" />
        <section className="space-y-4 px-4 py-6">
          <div className="flex items-center gap-1">
            <Person className="text-primary-normal" />
            <p className="font-headline2-bold text-label-strong">예약 정보</p>
          </div>
          <div className="space-y-3">
            <div className="font-body2-normal-regular space-y-2">
              <p className="text-label-alternative">예약된 일정</p>
              <p>6월 23일(월) 오후 6시 30분</p>
            </div>
            <Divider className="bg-cool-neutral-97" />
            <div className="font-body2-normal-regular space-y-2">
              <p className="text-label-alternative">상담사 정보</p>
              <p>이정훈 상담사 (010-1234-1234)</p>
            </div>
          </div>
        </section>
        <Divider className="bg-cool-neutral-99 h-2" />
        <section className="space-y-4 px-4 py-6">
          <div className="flex items-center gap-1">
            <Pencil className="text-primary-normal" />
            <p className="font-headline2-bold text-label-strong">상담 정보</p>
          </div>
          <div className="space-y-3">
            <div className="font-body2-normal-regular space-y-2">
              <p className="text-label-alternative">목적</p>
              <p>실거주를 위한 집을 사고 싶어요</p>
            </div>
            <Divider className="bg-cool-neutral-97" />
            <div className="font-body2-normal-regular space-y-2">
              <p className="text-label-alternative">지역</p>
              <p>직접 입력 (직접 입력한 내용)</p>
            </div>
            <Divider className="bg-cool-neutral-97" />
            <div className="font-body2-normal-regular space-y-2">
              <p className="text-label-alternative">희망 서비스</p>
              <p>낙찰부터 명도까지 전반적으로 도와주세요.</p>
            </div>
            <Divider className="bg-cool-neutral-97" />
            <div className="font-body2-normal-regular space-y-2">
              <p className="text-label-alternative">궁금한 분야</p>
              <p>아파트 경매</p>
            </div>
            <Divider className="bg-cool-neutral-97" />
            <div className="font-body2-normal-regular space-y-2">
              <p className="text-label-alternative">명의</p>
              <p>개인 (감면 목적 등으로 개인 사업자로 진행을 고려 중이에요.)</p>
            </div>
          </div>
        </section>
        <section className="bg-cool-neutral-99 mb-5 p-4">
          <div className="flex items-center gap-1">
            <Info className="text-cool-neutral-99 size-[18px]" fill="#2e2f33e0" />
            <p className="text-label-neutral font-body2-normal-bold">상담 안내</p>
          </div>
          <ul className="font-body2-normal-regular text-label-neutral list-disc pl-5">
            <li>예약된 일정에 맞춰 연락드릴 예정입니다.</li>
            <li>무료 상담은 약 30분간 진행 됩니다.</li>
          </ul>
        </section>
      </PageLayout>
      <FloatingContainer className="flex gap-3">
        <Button onClick={onRouteToHome} theme="assistive" className="flex-1 transition-none">
          홈으로 이동
        </Button>
        <Button onClick={onRouteToConsultHistory} className="flex-1 transition-none">
          상담 내역으로 이동
        </Button>
      </FloatingContainer>
    </>
  );
};

export default LastStep;
