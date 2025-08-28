import { Quote } from "lucide-react";

import { cn } from "~/lib/utils";

import { Star, Verified } from "../icons";

interface ConsultantCardProps {
  status?: "reserved" | "completed" | "auction";
}

const getStatusText = (status: ConsultantCardProps["status"]) => {
  switch (status) {
    case "reserved":
      return "예약 확정";
    case "completed":
      return "상담 완료";
    case "auction":
      return "경매 진행";
  }
};

const getStatusColor = (status: ConsultantCardProps["status"]) => {
  if (status === "reserved") return "text-green-20 bg-green-95";
  return "text-blue-20 bg-blue-95";
};

const ConsultantCard = ({ status }: ConsultantCardProps) => {
  return (
    <section className="shadow-card from-primary-normal/50 flex flex-col items-center gap-4 rounded-[12px] bg-gradient-to-tr to-[#13DBFF]/20 p-[1px]">
      <div className="flex w-full flex-col gap-2 rounded-[12px] bg-white p-4">
        {status && (
          <div
            className={cn("font-caption1-bold w-max rounded-sm px-2 py-1", getStatusColor(status))}
          >
            {getStatusText(status)}
          </div>
        )}
        <div className="flex w-full flex-col items-center gap-4">
          <div className="bg-cool-neutral-30 size-[72px] rounded-full" />
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1">
              <p className="font-heading2-bold">이정훈 상담사</p>
              <Verified />
            </div>
            <p className="text-label-neutral font-label1-normal-regular">경매지도사</p>
            <div className="font-label1-normal-regular flex items-center gap-1">
              <Star className="text-status-cautionary" />
              <p>4.6</p>
              <p className="text-label-neutral underline">리뷰 123건</p>
            </div>
          </div>
          <div className="flex gap-1">
            <Quote fill="#007fff" className="size-3 rotate-180 text-transparent" />
            <p className="font-body1-normal-medium">
              10년간의 경매 실전 경험을 기반으로 실수 없는 낙찰을 도와드립니다.
            </p>
            <Quote fill="#007fff" className="size-3 text-transparent" />
          </div>
          <div className="bg-blue-99 w-full rounded-md">
            <div className="flex items-center gap-2 px-3 py-2">
              <p className="font-label1-normal-bold w-[60px]">전문분야</p>
              <p className="font-label1-normal-regular">
                아파트, 실거주 가능 분석, 지분경매, 권리분석
              </p>
            </div>
            <div className="flex items-center gap-2 px-3 py-2">
              <p className="font-label1-normal-bold w-[60px]">경력</p>
              <p className="font-label1-normal-regular">10년차</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-2">
              <p className="font-label1-normal-bold w-[60px]">누적상담</p>
              <p className="font-label1-normal-regular">120건</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-2">
              <p className="font-label1-normal-bold w-[60px]">자격</p>
              <p className="font-label1-normal-regular">경매지도사 자격증</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultantCard;
