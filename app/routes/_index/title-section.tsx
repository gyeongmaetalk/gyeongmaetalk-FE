import { useNavigate } from "react-router";

import { Button } from "~/components/ui/button";
import { CounselStatus } from "~/constants";

import { getStatus } from "./constant";

interface TitleSectionProps {
  status: CounselStatus;
}

export default function TitleSection({ status }: TitleSectionProps) {
  const navigate = useNavigate();
  const { title, highlightText, titleAfter, description, hasButton, buttonText, buttonLink } =
    getStatus(status);

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
