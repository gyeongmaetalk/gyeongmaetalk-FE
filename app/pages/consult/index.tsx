import { Info } from "lucide-react";
import { useNavigate } from "react-router";

import ConsultInfoCard from "~/components/card/consult-info-card";
import ConsultantCard from "~/components/card/consultant-card";
import ReservationInfoCard from "~/components/card/reservation-info-card";
import FloatingContainer from "~/components/container/floating-container";
import Divider from "~/components/divider";
import { WithLeftTitleHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import { Button } from "~/components/ui/button";
import type { MatchCounselResponse } from "~/models/counsel";
import { ConsultEmpty } from "~/routes/consult._index/consultEmpty";

const ConsultPage = () => {
  const navigate = useNavigate();
  const hasConsult = reservedcCounselData.length > 0;

  const RESERVED_BUTTON_OPTIONS = [
    {
      variant: "outlined",
      theme: "assistive",
      label: "예약 취소",
      value: "cancel",
      review: false,
    },
    {
      variant: "outlined",
      theme: "assistive",
      label: "예약 변경",
      value: "change",
      review: false,
    },
  ];

  const COMPLETED_BUTTON_OPTIONS = [
    {
      variant: "outlined",
      theme: "assistive",
      label: "리뷰 작성",
      value: "review",
      review: reservedcCounselData[0].hasReview,
    },
    {
      variant: "outlined",
      theme: "primary",
      label: "경매 진행",
      value: "auction",
      review: false,
    },
  ];

  const AUCTION_BUTTON_OPTIONS = [
    {
      variant: "outlined",
      theme: "assistive",
      label: "리뷰 작성",
      value: "review",
      review: reservedcCounselData[0].hasReview,
    },
    {
      variant: "outlined",
      theme: "primary",
      label: "추천 매물 보기",
      value: "recommend",
      review: false,
    },
  ];

  const buttonOptions =
    reservedcCounselData[0].state === "reserved"
      ? RESERVED_BUTTON_OPTIONS
      : reservedcCounselData[0].state === "completed"
        ? COMPLETED_BUTTON_OPTIONS
        : AUCTION_BUTTON_OPTIONS;

  const handleButtonClick = (value: string) => {
    if (value === "cancel") {
      // TODO: 예약 취소 API 호출
    }
    if (value === "change") {
      // TODO: 예약 변경 API 호출
    }
    if (value === "review") {
      navigate(
        `/consult/write?reviewId=${reservedcCounselData[0].matchCounselorResponse.counselFormId}`
      );
    }
    if (value === "auction") {
      navigate("/agency");
    }
    if (value === "recommend") {
      navigate("/agency/recommend");
    }
  };

  return (
    <>
      <PageLayout header={<WithLeftTitleHeader title="무료상담" />} showNav>
        {!hasConsult && (
          <div className="flex h-full flex-col">
            <ConsultEmpty />
          </div>
        )}
        <div className="flex h-full flex-col">
          {/* 상담사 정보 */}
          <div className="px-4 py-6">
            <ConsultantCard
              status={reservedcCounselData[0].state}
              consultant={reservedcCounselData[0].matchCounselorResponse}
            />
          </div>
          <Divider className="bg-cool-neutral-99 h-2" />

          {/* 예약 정보 */}
          <ReservationInfoCard
            reservationResult={reservedcCounselData[0]}
            consultant={reservedcCounselData[0].matchCounselorResponse}
          />
          <Divider className="bg-cool-neutral-99 h-2" />
          {/* 상담 정보 */}
          <ConsultInfoCard
            purpose={reservedcCounselData[0].purpose}
            area={reservedcCounselData[0].area}
            serviceType={reservedcCounselData[0].serviceType}
            interest={reservedcCounselData[0].interest}
            participantType={reservedcCounselData[0].participantType}
          />

          {/* 경매 정보 */}
          {reservedcCounselData[0].state === "reserved" && (
            <>
              <Divider className="bg-cool-neutral-99 h-2" />
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
            </>
          )}
          <div className="mb-2 flex w-full gap-3 px-4 py-2">
            {buttonOptions.map((button) => (
              <Button
                className={`${button.review ? "hidden" : "flex-1"}`}
                key={button.label}
                variant={button.variant as "default" | "text" | "outlined"}
                theme={button.theme as "default" | "assistive" | "secondary"}
                onClick={() => handleButtonClick(button.value)}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default ConsultPage;

const reservedcCounselData: ReservedCounselDataResponse[] = [
  {
    state: "completed",
    hasReview: false,
    matchCounselorResponse: {
      counselorId: 1,
      counselFormId: 1,
      counselorName: "이정훈",
      score: 4.6,
      reviewCount: 123,
      description: "10년간 경매 실전 경험을 기반으로 실수 없는 낙찰을 도와 드립니다.",
      experience: 10,
      counselCount: 120,
      license: "경매지도사 자격증",
      specialization: "아파트, 실거주 가능 분석, 지분경매, 권리분석",
    },
    counselDate: "2021-12-31",
    counselTime: "12:00:00",
    cellPhone: "01012345678",
    purpose: "실거주를 위한 집을 사고 싶어요.",
    area: "수도권",
    serviceType: "낙찰부터 명도까지 전반적으로 도와주세요.",
    interest: "아파트 경매",
    participantType: "개인,감면 등의 목적을 이유로 개인 사업자를 고려중이에요.",
  },
];

interface ReservedCounselDataResponse {
  state: "reserved" | "completed" | "auction";
  hasReview: boolean;
  matchCounselorResponse: MatchCounselResponse;
  counselDate: string;
  counselTime: string;
  cellPhone: string;
  purpose: string;
  area: string;
  serviceType: string;
  interest: string;
  participantType: string;
}
