import { Link } from "react-router";

import ReviewItemMenu from "./review-item-menu";
import { Verified } from "../icons";
import StarRating from "../star-rating";
import { Badge } from "../ui/badge";

interface ReviewItemProps {
  reviewId: number;
  isMyReview: boolean;
  isConsultantReview?: boolean;
}

const ReviewItem = ({ reviewId, isMyReview, isConsultantReview }: ReviewItemProps) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="space-y-1.5">
          <div className="font-label2-regular flex items-center gap-1">
            {isMyReview && (
              <Badge theme="accent" size="xs">
                내글
              </Badge>
            )}
            <p className="text-label-strong">dkd****</p>
            <div className="bg-label-alternative size-[3px]" />
            <p className="text-label-alternative">25.07.22</p>
          </div>
          <StarRating rating={4} />
        </div>
        <ReviewItemMenu reviewId={reviewId} isMyReview={isMyReview} />
      </div>
      {isConsultantReview && (
        <div className="bg-cool-neutral-99 flex items-center gap-1.5 rounded-[12px] px-3 py-2">
          <div className="flex items-center gap-0.5">
            <p className="font-label2-regular text-label-strong">이정훈 상담사</p>
            <Verified />
          </div>
          <div className="bg-label-alternative size-[3px]" />
          <p className="font-label2-regular text-label-alternative">25.06.23 18:00 상담완료</p>
        </div>
      )}
      <Link to={`/consult/reviews/${reviewId}`} className="flex items-center gap-2.5">
        <p className="font-label1-normal-medium line-clamp-3">
          처음엔 낙찰도 무섭고 용어도 모르겠고 망설였는데, 상담받고 나니 제 상황에서 가능한 물건
          유형이 뭔지 명확해졌어요. 막연한 불안이 확 줄었고, 혼자였다면 진짜 못 시작했을 거예요.
        </p>
        <div className="bg-cool-neutral-30 size-20 shrink-0 rounded-[12px]" />
      </Link>
    </div>
  );
};

export default ReviewItem;
