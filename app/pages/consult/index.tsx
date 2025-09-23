import { Info } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";

import ConsultInfoCard from "~/components/card/consult-info-card";
import ConsultantCard from "~/components/card/consultant-card";
import ReservationInfoCard from "~/components/card/reservation-info-card";
import FloatingContainer from "~/components/container/floating-container";
import Divider from "~/components/divider";
import { WithLeftTitleHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import { Button } from "~/components/ui/button";
import { ConsultEmpty } from "~/routes/consult._index/consultEmpty";

const ConsultPage = () => {
  const navigate = useNavigate();
  const hasConsult = true;
  const status: "reserved" | "completed" | "auction" = "reserved";

  const RESERVED_BUTTON_OPTIONS = [
    { variant: "outlined", theme: "assistive", label: "예약 취소", value: "cancel", review: false },
    { variant: "outlined", theme: "assistive", label: "예약 변경", value: "change", review: false },
  ];

  const COMPLETED_BUTTON_OPTIONS = [
    { variant: "outlined", theme: "assistive", label: "리뷰 작성", value: "review", review: false },
    { variant: "outlined", theme: "primary", label: "경매 진행", value: "auction", review: false },
  ];

  const AUCTION_BUTTON_OPTIONS = [
    { variant: "outlined", theme: "assistive", label: "리뷰 작성", value: "review", review: true },
    {
      variant: "outlined",
      theme: "primary",
      label: "추천 매물 보기",
      value: "recommend",
      review: false,
    },
  ];

  const buttonOptions =
    status === "reserved"
      ? RESERVED_BUTTON_OPTIONS
      : status === "completed"
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
      navigate(`/consult/write?reviewId=1`);
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
      {!hasConsult ? (
        <PageLayout header={<WithLeftTitleHeader title="무료상담" />} showNav>
          <ConsultEmpty />
        </PageLayout>
      ) : (
        <>
          <PageLayout withFloating header={<WithLeftTitleHeader title="무료상담" />}>
            <div className="flex h-full flex-col">
              {/* 상담사 정보 */}
              <div className="px-4 py-6">
                <ConsultantCard status={status} />
              </div>
              <Divider className="bg-cool-neutral-99 h-2" />

              {/* 예약 정보 */}
              <ReservationInfoCard />
              <Divider className="bg-cool-neutral-99 h-2" />
              {/* 상담 정보 */}
              <ConsultInfoCard />

              {/* 경매 정보 */}
              {status === "reserved" && (
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
              {buttonOptions === RESERVED_BUTTON_OPTIONS && (
                <div className="flex w-full gap-3 px-4 py-2">
                  {buttonOptions.map((button) => (
                    <Button
                      className="flex-1"
                      key={button.label}
                      variant={button.variant as "default" | "text" | "outlined"}
                      theme={button.theme as "default" | "assistive" | "secondary"}
                    >
                      {button.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </PageLayout>
          {buttonOptions !== RESERVED_BUTTON_OPTIONS && (
            <FloatingContainer className="flex gap-3">
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
            </FloatingContainer>
          )}
        </>
      )}
    </>
  );
};

export default ConsultPage;
