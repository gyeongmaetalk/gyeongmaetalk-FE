import { Fragment } from "react/jsx-runtime";

import FilterDropdown from "~/routes/consult.reviews.consultant/filter-dropdown";

import ReviewItem from "./review-item";
import Divider from "../divider";

interface ReviewListProps {
  consultantId: string;
  sort: string;
}

const ReviewList = ({ consultantId, sort }: ReviewListProps) => {
  return (
    <section className="space-y-6 px-4">
      <div className="flex items-center justify-between">
        <p className="font-headline2-bold">
          전체 <span className="text-primary-normal">216개</span>
        </p>
        <FilterDropdown consultantId={consultantId} sort={sort} />
      </div>
      <div className="space-y-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <Fragment key={index}>
            <ReviewItem reviewId={index} isMyReview={index % 2 === 0} />
            {index !== 9 && <Divider className="bg-cool-neutral-98" />}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default ReviewList;
