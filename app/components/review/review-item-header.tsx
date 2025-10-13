import { formatDate } from "~/utils/format";

import ReviewItemMenu from "./review-item-menu";
import StarRating from "../star-rating";
import { Badge } from "../ui/badge";

interface ReviewItemHeaderProps {
  isMyReview: boolean;
  reviewId: number;
  createAt: string;
  name: string;
}

const ReviewItemHeader = ({ isMyReview, reviewId, createAt, name }: ReviewItemHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-1.5">
        <div className="font-label2-regular flex items-center gap-1">
          {isMyReview && (
            <Badge theme="accent" size="xs">
              내글
            </Badge>
          )}
          <p className="text-label-strong">{name}</p>
          <p className="text-label-alternative text-[3px]">●</p>
          <p className="text-label-alternative">{formatDate({ date: createAt })}</p>
        </div>
        <StarRating rating={4} />
      </div>
      <ReviewItemMenu reviewId={reviewId} isMyReview={isMyReview} />
    </div>
  );
};

export default ReviewItemHeader;
