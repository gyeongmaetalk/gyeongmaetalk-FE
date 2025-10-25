import Dot from "~/components/icons/Dot";
import StarRating from "~/components/star-rating";
import type { ReviewListItemDTO } from "~/models/review";
import { maskUserName } from "~/utils/format";

interface ReviewPreviewProps extends ReviewListItemDTO {
  onClick: () => void;
}

const ReviewPreview = ({
  score,
  content,
  name,
  createAt,
  imageCount,
  thumbnail,
  onClick,
}: ReviewPreviewProps) => {
  return (
    <div className="flex flex-row items-center gap-2.5" onClick={onClick}>
      <div className="flex flex-col gap-1">
        <StarRating rating={score} />
        <p className="font-label1-normal-medium text-label-neutral text-overflow-ellipsis line-clamp-2">
          {content}
        </p>
        <div className="flex flex-row items-center gap-1">
          <p className="font-label2-regular text-label-alternative">{maskUserName(name)}</p>
          <Dot />
          <p className="font-label2-regular text-label-alternative">{createAt}</p>
        </div>
      </div>
      {imageCount > 0 && (
        <div className="bg-cool-neutral-70 size-20 shrink-0 rounded-[12px]">
          {thumbnail && <img src={thumbnail} alt="리뷰 이미지" className="w-full object-cover" />}
        </div>
      )}
    </div>
  );
};

export default ReviewPreview;
