import Dot from "~/components/icons/Dot";
import StarRating from "~/components/star-rating";

interface ReviewPreviewProps {
  rating: number;
  content: string;
  user: string;
  date: string;
  images: string[];
  onClick: () => void;
}

const ReviewPreview = ({ rating, content, user, date, images, onClick }: ReviewPreviewProps) => {
  // 유저 이름 마스킹 처리
  const maskUserName = (name: string): string => {
    if (name.length <= 4) return name;
    const visiblePart = name.slice(0, 4);
    const maskedPart = "*".repeat(name.length - 4);
    return visiblePart + maskedPart;
  };

  return (
    <div className="flex flex-row items-center gap-2.5" onClick={onClick}>
      <div className="flex flex-col gap-1">
        <StarRating rating={rating} />
        <p className="font-label1-normal-medium text-label-neutral text-overflow-ellipsis line-clamp-2">
          {content}
        </p>
        <div className="flex flex-row items-center gap-1">
          <p className="font-label2-regular text-label-alternative">{maskUserName(user)}</p>
          <Dot />
          <p className="font-label2-regular text-label-alternative">{date}</p>
        </div>
      </div>
      {images.length > 0 && (
        <div className="bg-cool-neutral-70 size-20 shrink-0 rounded-[12px]">
          {images[0] && <img src={images[0]} alt="리뷰 이미지" className="w-full object-cover" />}
        </div>
      )}
    </div>
  );
};

export default ReviewPreview;
