import { cn } from "~/lib/utils";

import { Star } from "./icons";

interface StarRatingProps {
  rating: number;
  setRating?: (rating: number) => void;
}

const StarRating = ({ rating, setRating }: StarRatingProps) => {
  const onClickRating = (rating: number) => {
    if (setRating) {
      setRating(rating);
    }
  };

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <button key={index} onClick={() => onClickRating(index + 1)}>
          <Star
            className={cn("text-orange-60 size-4", index >= rating && "text-label-assistive")}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRating;
