import { Bubble, Company } from "~/components/icons";
import { cn } from "~/lib/utils";
import { getTimeDisplay } from "~/utils/format";

interface AlarmItemProps {
  type: "review" | "recommend";
  createAt: string;
  isRead: boolean;
  children: React.ReactNode;
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
