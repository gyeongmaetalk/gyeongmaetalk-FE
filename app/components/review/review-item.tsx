import { Link } from "react-router";

import type { ConsultantReviewListItemDTO, ReviewListItemDTO } from "~/models/review";
import { formatDate } from "~/utils/format";

import ReviewItemHeader from "./review-item-header";
import { LogoIcon, Verified } from "../icons";

type ReviewItemProps = ConsultantReviewListItemDTO | ReviewListItemDTO;

const ReviewItem = (props: ReviewItemProps) => {
  const isConsultantReview = "counselorName" in props;

  return (
    <div className="space-y-3">
      <ReviewItemHeader
        isMyReview={props.isMine}
        reviewId={props.reviewId}
        createAt={props.createAt}
      />
      {isConsultantReview && (
        <div className="bg-cool-neutral-99 flex items-center gap-1.5 rounded-[12px] px-3 py-2">
          <div className="flex items-center gap-0.5">
            <p className="font-label2-regular text-label-strong">{props.counselorName} 상담사</p>
            <Verified />
          </div>
          <div className="bg-label-alternative size-[3px]" />
          <p className="font-label2-regular text-label-alternative">
            {formatDate({ date: props.counselDateTime, withTime: true })} 상담완료
          </p>
        </div>
      )}
      <Link to={`/consult/reviews/${props.reviewId}`} className="flex justify-between gap-2.5">
        <p className="font-label1-normal-medium line-clamp-3 py-2.5">{props.content}</p>
        <div className="size-20 shrink-0 rounded-[12px]">
          {props.thumbnail ? (
            <img src={props.thumbnail} alt="리뷰 이미지" className="w-full object-cover" />
          ) : (
            <LogoIcon className="size-full" />
          )}
        </div>
      </Link>
    </div>
  );
};

export default ReviewItem;
