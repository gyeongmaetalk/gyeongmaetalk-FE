import { Link } from "react-router";

interface AlarmRecommendItemProps {
  title: string;
  counselorName: string;
  thumbnail: string;
  recommendId: string;
}

export default function AlarmRecommendItem({
  title,
  counselorName,
  thumbnail,
  recommendId,
}: AlarmRecommendItemProps) {
  return (
    <Link className="flex items-center gap-3" to={`/agency/recommend/${recommendId}`}>
      <div className="space-y-1">
        <p className="font-body2-normal-bold">{title}</p>
        <p className="font-body2-normal-normal">
          {counselorName} 상담사님이 추천 매물을 올려주셨어요.
        </p>
      </div>
      <img src={thumbnail} alt="추천 매물 이미지" className="size-16 rounded-lg object-cover" />
    </Link>
  );
}
