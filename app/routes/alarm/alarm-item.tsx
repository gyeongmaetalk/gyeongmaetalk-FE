import { Bubble, Company } from "~/components/icons";
import { NotificationType } from "~/constants";
import { cn } from "~/lib/utils";
import type { NotificationItem } from "~/types/fcm";
import { getTimeDisplay } from "~/utils/format";

interface AlarmItemProps extends NotificationItem {
  children: React.ReactNode;
}

export default function AlarmItem({ type, createdAt, read, children }: AlarmItemProps) {
  const isReview = type === NotificationType.COUNSEL_FINISHED;

  const title = isReview ? "리뷰 작성" : "추천 매물";
  const bgColor = isReview ? "bg-orange-95" : "bg-pink-95";
  const Icon = isReview ? Bubble : Company;

  return (
    <section className={cn("space-y-2 p-4", !read && "bg-blue-99")}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className={cn("w-max rounded-full p-1", bgColor)}>
            <Icon />
          </div>
          <p className="font-label1-normal-medium text-label-alternative">{title}</p>
        </div>
        <p className="font-label2-regular text-label-alternative">{getTimeDisplay(createdAt)}</p>
      </div>
      {children}
    </section>
  );
}
