import Divider from "../divider";
import { Verified } from "../icons";

interface ConsultantReviewCardProps {
  date?: string;
}

const ConsultantReviewCard = ({ date }: ConsultantReviewCardProps) => {
  return (
    <div className="bg-cool-neutral-99 space-y-2.5 rounded-lg p-3">
      <div className="flex items-center gap-3">
        <div className="bg-cool-neutral-30 size-10 rounded-full" />
        <div className="space-y-1">
          <div className="flex items-center gap-0.5">
            <p className="font-label2-bold text-label-strong">이정훈 상담사</p>
            <Verified />
          </div>
          <p className="font-label2-regular text-label-neutral">10년차 경매지도사</p>
        </div>
      </div>
      {date && (
        <>
          <Divider className="bg-cool-neutral-50/22" />
          <div className="flex items-center gap-1">
            <p className="font-caption1-bold w-12">진행일</p>
            <p className="font-label2-regular text-label-alternative">{date} 상담완료</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ConsultantReviewCard;
