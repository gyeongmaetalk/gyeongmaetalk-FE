import { useNavigate } from "react-router";

import insideBuilding from "~/assets/agency-recommend/inside-building.png";
import outsideBuilding from "~/assets/agency-recommend/outside-building.png";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { DragCarousel, DragCarouselItem } from "~/components/ui/carousel/drag-carousel";
import { formatPrice } from "~/utils/format";

interface AgencyRecommendItemProps {
  status: "buy" | "not-buy";
}

export default function AgencyRecommendItem({ status }: AgencyRecommendItemProps) {
  const navigate = useNavigate();

  const isBuy = status === "buy";

  const onRouteToApplyRecommendDetail = (id: string) => {
    if (!isBuy) return;
    navigate(`/agency/recommend/${id}`);
  };

  return (
    <div className="space-y-3">
      <div className="space-y-1.5">
        <Badge size="xs" theme="accent">
          아파트
        </Badge>
        <p className="font-headline1-bold text-label-strong">서울 역세권 30평 아파트</p>
        <div className="flex items-center justify-between">
          <p className="font-caption1-regular text-label-alternative">25.6.23 업데이트 매물</p>
          <p className="font-caption1-bold text-primary-normal">
            {isBuy ? "구매완료" : formatPrice(20000)}
          </p>
        </div>
      </div>
      <DragCarousel>
        <DragCarouselItem className="w-4/5">
          <div className="relative overflow-hidden rounded-[12px]">
            <img src={outsideBuilding} alt="건물 외관" className="w-full" />
            <div className="bg-label-neutral font-caption1-bold absolute top-0 left-0 flex items-center justify-center rounded-br-[12px] px-2.5 py-2 text-white">
              외관
            </div>
          </div>
        </DragCarouselItem>
        <DragCarouselItem className="w-4/5">
          <div className="relative overflow-hidden rounded-[12px]">
            <img src={insideBuilding} alt="건물 내부" className="w-full" />
            <div className="bg-label-neutral font-caption1-bold absolute top-0 left-0 flex items-center justify-center rounded-br-[12px] px-2.5 py-2 text-white">
              도면
            </div>
          </div>
        </DragCarouselItem>
      </DragCarousel>
      <div className="space-y-0.5">
        <div className="flex">
          <p className="font-caption1-bold w-14">지역</p>
          <p className="font-label2-regular text-label-alternative">서울 도봉구</p>
        </div>
        <div className="flex">
          <p className="font-caption1-bold w-14">면적</p>
          <p className="font-label2-regular text-label-alternative">101.28cm(30평)</p>
        </div>
        <div className="flex">
          <p className="font-caption1-bold w-14">입찰일</p>
          <p className="font-label2-regular text-label-alternative">25.09.18</p>
        </div>
        <div className="flex">
          <p className="font-caption1-bold w-14">감정가</p>
          <p className="font-label2-regular text-label-alternative">3.2억</p>
        </div>
        <div className="flex">
          <p className="font-caption1-bold w-14">최저가</p>
          <p className="font-label2-regular text-label-alternative">2.4억</p>
        </div>
      </div>
      <Button
        className="w-full"
        theme={isBuy ? "assistive" : "default"}
        onClick={() => onRouteToApplyRecommendDetail("2024타경12345")}
      >
        {isBuy ? "자세히 보기" : "구매하기"}
      </Button>
    </div>
  );
}
