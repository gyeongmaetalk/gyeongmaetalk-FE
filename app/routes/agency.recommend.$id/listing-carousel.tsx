import { useState } from "react";
import { useEffect } from "react";

import insideBuilding from "~/assets/agency-recommend/inside-building.png";
import outsideBuilding from "~/assets/agency-recommend/outside-building.png";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";

const CAROUSEL_ITEMS = [
  {
    id: 1,
    image: outsideBuilding,
    title: "외관",
  },
  {
    id: 2,
    image: insideBuilding,
    title: "도면",
  },
];

export default function ListingCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (api) {
      api.on("select", () => {
        setCurrentIndex(api.selectedScrollSnap());
      });
    }
  }, [api]);

  return (
    <Carousel className="relative" setApi={setApi}>
      <p className="bg-label-neutral font-caption1-regular absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-[18px] px-3 py-1 text-white">
        {CAROUSEL_ITEMS[currentIndex].title}
        <div className="size-[3px] bg-[#d9d9d9]" />
        {currentIndex + 1} / {CAROUSEL_ITEMS.length}
      </p>
      <CarouselContent>
        {CAROUSEL_ITEMS.map((item) => (
          <CarouselItem key={item.id}>
            <img src={item.image} alt={item.title} className="w-full" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
