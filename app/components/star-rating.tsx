import { cn } from "~/lib/utils";

import { Star } from "./icons";

interface StarRatingProps {
  rating: number;
  size?: "md" | "lg";
  setRating?: (rating: number) => void;
}

const StarRating = ({ rating, size = "md", setRating }: StarRatingProps) => {
  const isLarge = size === "lg";

  const onClickRating = (rating: number) => {
    if (setRating) {
      setRating(rating);
    }
  };

  return (
    <div className={cn("flex items-center gap-0.5", isLarge && "gap-2")}>
      {Array.from({ length: 5 }).map((_, index) => (
        <button type="button" key={index} onClick={() => onClickRating(index + 1)}>
          <Star
            className={cn(
              "text-orange-60 size-4",
              isLarge && "size-8",
              index >= rating && "text-label-assistive"
            )}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRating;
