import { useNavigate } from "react-router";
import Dot from "~/components/icons/Dot";
import { DefaultHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import { DragCarousel, DragCarouselItem } from "~/components/ui/carousel/drag-carousel";
import { HOME_SECTION_TITLES, type Status } from "~/routes/_index/constant";
import ReviewPreview from "~/routes/_index/review-preview";
import SectionField from "~/routes/_index/section-field";
import TitleSection from "~/routes/_index/title-section";

export default function HomePage() {
  const navigate = useNavigate();
  const status: Status = "reservation";

  return (
    <PageLayout header={<DefaultHeader />} showNav>
      <div className="flex h-full flex-col bg-blue-200">
        <TitleSection status={status} />

        <div className="flex h-full flex-col gap-18 rounded-t-[20px] rounded-b-none bg-[#FFF] px-4 py-6 shadow-[0_0_16px_0_rgba(8,89,193,0.2)]">
          {status === "reservation" && (
            <SectionField title={HOME_SECTION_TITLES.RESERVATION} viewMore viewMoreLink="/">
              <div className="flex flex-row items-center gap-2 rounded-[12px] bg-[rgba(0_119_255_/_0.05)] p-4">
                <div className="rounded-[111px] border-1 border-[rgba(0_119_255_/_0.50)] bg-[#FFF] px-2 py-[5px] text-[12px] font-bold text-[#07F]">
                  1일 전
                </div>
                <div className="flex flex-row items-center gap-1.5">
                  <div className="font-body1-normal-medium text-label-neutral">7월 23일(월)</div>
                  <Dot />
                  <div className="font-body1-normal-medium text-label-neutral">오후 6시 30분</div>
                </div>
              </div>
            </SectionField>
          )}
          <SectionField title={HOME_SECTION_TITLES.A_TO_Z} viewMore viewMoreLink="/">
            <DragCarousel>
              {contents.map((item) => (
                <DragCarouselItem key={item.id}>
                  <div className="font-body1-normal-bold text-label-neutral h-60 w-45 rounded-[12px] bg-[rgb(247_247_248_/_0.5)] p-4 whitespace-pre-line">
                    {item.title}
                  </div>
                </DragCarouselItem>
              ))}
            </DragCarousel>
          </SectionField>

          <SectionField
            title={HOME_SECTION_TITLES.USER_REVIEWS}
            viewMore
            viewMoreLink="/consult/reviews"
          >
            <div className="flex flex-col gap-4">
              {reviews.map((review) => (
                <ReviewPreview
                  key={review.id}
                  {...review}
                  onClick={() => {
                    navigate(`/consult/reviews/${review.id}`);
                  }}
                />
              ))}
            </div>
          </SectionField>
        </div>
      </div>
    </PageLayout>
  );
}

const contents = [
  {
    id: 1,
    title: "법원에서 \n부동산을 판다?\n경매, 진짜 뭔가요?",
  },
  {
    id: 2,
    title: "법원경매\n경매에 올라오는 집은\n누가 왜 내놓을까?",
  },
  {
    id: 3,
    title: "법원경매\n법원 경매로 살아가는 사람들",
  },
];

const reviews = [
  {
    id: 1,
    rating: 5,
    user: "dkddkad",
    content:
      "처음엔 낙찰도 무섭고 용어도 모르겠고 망설였는데, 상담받고 나니 제 상황에서 가능한 물건 유형이 뭔지 명확해졌어요. 막연한 불안이 확 줄었고, 혼자였다면 진짜 못 시작했을 거예요.",
    date: "2025.09.02",
    images: ["https://via.placeholder.com/150"],
  },
  {
    id: 2,
    rating: 4,
    user: "dkdddasd",
    content:
      "처음엔 낙찰도 무섭고 용어도 모르겠고 망설였는데, 상담받고 나니 제 상황에서 가능한 물건 유형이 뭔지 명확해졌어요. 막연한 불안이 확 줄었고, 혼자였다면 진짜 못 시작했을 거예요.",
    date: "2025.09.02",
    images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
  },
  {
    id: 3,
    rating: 3,
    user: "dkddasdd",
    content:
      "처음엔 낙찰도 무섭고 용어도 모르겠고 망설였는데, 상담받고 나니 제 상황에서 가능한 물건 유형이 뭔지 명확해졌어요. 막연한 불안이 확 줄었고, 혼자였다면 진짜 못 시작했을 거예요.",
    date: "2025.09.02",
    images: [],
  },
];
