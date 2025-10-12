import { useNavigate } from "react-router";

import insideBuilding from "~/assets/agency-recommend/inside-building.png";
import outsideBuilding from "~/assets/agency-recommend/outside-building.png";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { DragCarousel, DragCarouselItem } from "~/components/ui/carousel/drag-carousel";
import type { PropertyListItemProps } from "~/types/property";
import { formatArea, formatDate, formatPrice } from "~/utils/format";

interface AgencyRecommendItemProps extends PropertyListItemProps {
  status: "buy" | "not-buy";
}

export default function AgencyRecommendItem({
  status,
  id,
  address,
  area,
  biddingDate,
  appraisedPrice,
  minPrice,
  images,
}: AgencyRecommendItemProps) {
  const navigate = useNavigate();

  const isBuy = status === "buy";

  const onRouteToApplyRecommendDetail = (id: number) => {
    // 구매하기 버튼이라면 토스 페이먼츠로 이동
    if (!isBuy) return;
    navigate(`/agency/recommend/${id}`);
  };

  return (
    <div className="space-y-3">
      <div className="space-y-1.5">
        <Badge size="xs" theme="accent">
          아파트
        </Badge>
        <p className="font-headline1-bold text-label-strong">{address}</p>
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
          <p className="font-label2-regular text-label-alternative">{address}</p>
        </div>
        <div className="flex">
          <p className="font-caption1-bold w-14">면적</p>
          <p className="font-label2-regular text-label-alternative">{formatArea(area)}</p>
        </div>
        <div className="flex">
          <p className="font-caption1-bold w-14">입찰일</p>
          <p className="font-label2-regular text-label-alternative">
            {formatDate({ date: biddingDate })}
          </p>
        </div>
        <div className="flex">
          <p className="font-caption1-bold w-14">감정가</p>
          <p className="font-label2-regular text-label-alternative">
            {formatPrice(appraisedPrice, { showUnit: true })}
          </p>
        </div>
        <div className="flex">
          <p className="font-caption1-bold w-14">최저가</p>
          <p className="font-label2-regular text-label-alternative">
            {formatPrice(minPrice, { showUnit: true })}
          </p>
        </div>
      </div>
      <Button
        className="w-full"
        theme={isBuy ? "assistive" : "default"}
        onClick={() => onRouteToApplyRecommendDetail(id)}
      >
        {isBuy ? "자세히 보기" : "구매하기"}
      </Button>
    </div>
  );
}
