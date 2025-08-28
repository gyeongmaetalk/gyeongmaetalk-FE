import ReviewItemMenu from "./review-item-menu";
import StarRating from "../star-rating";
import { Badge } from "../ui/badge";

interface ReviewItemHeaderProps {
  isMyReview: boolean;
  reviewId: number;
}

const ReviewItemHeader = ({ isMyReview, reviewId }: ReviewItemHeaderProps) => {
  return (
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
  );
};

export default ReviewItemHeader;
