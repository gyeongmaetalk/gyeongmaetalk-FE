import { Bubble, Company } from "~/components/icons";
import { cn } from "~/lib/utils";

interface AlarmItemProps {
  type: "review" | "recommend";
  createAt: string;
  isRead: boolean;
  children: React.ReactNode;
}

function getTimeDisplay(createAt: string): string {
  const now = new Date();
  const createDate = new Date(createAt);
  const diffTime = now.getTime() - createDate.getTime();

  const diffMinutes = Math.floor(diffTime / (1000 * 60));
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  // 하루 이내 (24시간 이내)
  if (diffHours < 24) {
    if (diffMinutes < 60) {
      return `${diffMinutes}분 전`;
    }
    return `${diffHours}시간 전`;
  }

  // 어제 (24시간 ~ 48시간 전)
  if (diffHours < 48) {
    const hours = createDate.getHours();
    const minutes = createDate.getMinutes();
    const period = hours < 12 ? "오전" : "오후";
    const displayHours = hours <= 12 ? hours : hours - 12;
    const displayMinutes = minutes.toString().padStart(2, "0");
    return `어제 ${period} ${displayHours}:${displayMinutes}`;
  }

  // 그 이전 시간
  if (diffYears >= 1) {
    return `${diffYears}년 전`;
  }

  if (diffMonths >= 1) {
    return `${diffMonths}달 전`;
  }

  return `${diffDays}일 전`;
}

export default function AlarmItem({ type, createAt, isRead, children }: AlarmItemProps) {
  const isReview = type === "review";

  const title = isReview ? "리뷰 작성" : "추천 매물";
  const bgColor = isReview ? "bg-orange-95" : "bg-pink-95";
  const Icon = isReview ? Bubble : Company;

  return (
    <section className={cn("space-y-2 p-4", isRead && "bg-blue-99")}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className={cn("w-max rounded-full p-1", bgColor)}>
            <Icon />
          </div>
          <p className="font-label1-normal-medium text-label-alternative">{title}</p>
        </div>
        <p className="font-label2-regular text-label-alternative">{getTimeDisplay(createAt)}</p>
      </div>
      {children}
    </section>
  );
}
