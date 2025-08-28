import ConsultantReviewCard from "~/components/card/consultant-review-card";
import FloatingContainer from "~/components/container/floating-container";
import { WithBackHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import ReviewItemHeader from "~/components/review/review-item-header";
import { Button } from "~/components/ui/button";
import { DragCarousel } from "~/components/ui/carousel/drag-carousel";
import { DragCarouselItem } from "~/components/ui/carousel/drag-carousel";

interface ConsultReviewsDetailPageProps {
  images?: string[];
  reviewId: string;
}

const ConsultReviewsDetailPage = ({ reviewId, images }: ConsultReviewsDetailPageProps) => {
  return (
    <>
      <PageLayout header={<WithBackHeader title="상담 상세" />} withFloating>
        <section className="space-y-3 px-4 py-6">
          <ReviewItemHeader isMyReview={false} reviewId={+reviewId} />
          <ConsultantReviewCard />
          {images?.length === 1 && (
            <div className="aspect-image bg-cool-neutral-30 w-full rounded-[12px]" />
          )}
          {images && images.length > 1 && (
            <DragCarousel>
              {images.map((image, index) => (
                <DragCarouselItem key={index} className="w-4/5">
                  <img src={image} alt="review-image" className="w-full object-cover" />
                </DragCarouselItem>
              ))}
            </DragCarousel>
          )}

          <p className="font-label1-normal-medium text-label-neutral">
            처음에는 ‘낙찰’이라는 단어조차 무섭게 느껴졌고, 경매 관련 용어나 절차도 전혀 몰라서
            시작을 망설였습니다.
            <br />
            <br />
            혹시 잘못하면 큰돈을 잃을까 봐 불안했고, 주변에 물어볼 사람도 없어 답답했죠. 그런데
            상담을 받고 나니, 제 자본 상황과 목표에 맞춰 어떤 물건 유형을 노려야 하는지 구체적으로
            알 수 있었습니다.
            <br />
            <br />
            덕분에 무엇부터 준비해야 할지, 그리고 어떤 절차로 진행되는지 머릿속에 그림이 그려졌어요.
            막연한 불안이 확 줄었고, 혼자였다면 절대 발을 못 들였을 경매에 첫 걸음을 내딛게
            됐습니다.
            <br />
            <br />
            지금은 경매가 더 이상 ‘나와 상관없는 일’이 아니라, 내가 충분히 도전할 수 있는 투자라는
            확신이 생겼습니다. 정말 감사합니다!
          </p>
        </section>
      </PageLayout>
      <FloatingContainer>
        <Button className="w-full" variant="outlined" theme="assistive">
          후기 목록으로 이동
        </Button>
      </FloatingContainer>
    </>
  );
};

export default ConsultReviewsDetailPage;
