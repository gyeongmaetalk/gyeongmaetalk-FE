import { useNavigate } from "react-router";

import { Button } from "~/components/ui/button";

import { statusMap } from "./constant";

export interface StatusMapType {
  [key: string]: {
    title?: string;
    highlightText?: string;
    titleAfter?: string;
    description: string;
    hasButton: boolean;
    buttonText?: string;
    buttonLink?: string;
  };
}

export default function TitleSection({ status }: { status: string }) {
  const navigate = useNavigate();
  const { title, highlightText, titleAfter, description, hasButton, buttonText, buttonLink } =
    statusMap[status];

  return (
    <div className="flex flex-col gap-5 px-5 py-10">
      {/* 타이틀 */}
      <div className="flex flex-col gap-1">
        <div className="text-label-normal text-[20px] font-bold whitespace-pre-line">
          {title}
          <span className="text-primary-normal text-[20px] font-bold">{highlightText}</span>
          {titleAfter}
        </div>
        {/* 서브 타이틀 */}
        <div className="font-body2-reading-medium text-label-neutral">{description}</div>
      </div>

      {/* 버튼 영역 */}
      {hasButton && (
        <div>
          <Button
            variant="default"
            theme="default"
            size="md"
            onClick={() => navigate(buttonLink ?? "/")}
          >
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
}
