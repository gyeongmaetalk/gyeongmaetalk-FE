import { Link } from "react-router";

import { Verified } from "~/components/icons";
import { formatDate } from "~/utils/format";

interface AlarmReviewItemProps {
  reviewId: number;
  counselDateTime: string;
}

export default function AlarmReviewItem({ reviewId, counselDateTime }: AlarmReviewItemProps) {
  return (
    <Link className="space-y-2" to={`/consult/write?reviewId=${reviewId}`}>
      <p className="font-body2-normal-regular">무료 상담은 어떠셨나요? 후기를 남겨주세요</p>
      <div className="bg-cool-neutral-99 flex items-center gap-1.5 rounded-md px-3 py-2">
        <div className="flex items-center gap-0.5">
          <Verified />
          <p className="font-label2-regular text-label-neutral">이정훈 상담사</p>
        </div>
        <div className="bg-label-alternative size-[3px]" />
        <p className="font-label2-regular text-label-alternative">
          {formatDate({ date: counselDateTime, withTime: true, shortYear: true })} 상담완료
        </p>
      </div>
    </Link>
  );
}
