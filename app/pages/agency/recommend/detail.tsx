import { Copy } from "lucide-react";
import { Navigate, useParams } from "react-router";

import Divider from "~/components/divider";
import { Header } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import { Badge } from "~/components/ui/badge";
import RequestBidButton from "~/routes/agency.recommend._index/request-bid-button";
import GyeongmaeMap from "~/routes/agency.recommend.$id/gyeongmae-map";
import ListingCarousel from "~/routes/agency.recommend.$id/listing-carousel";
import { formatPrice } from "~/utils/format";
import { errorToast, successToast } from "~/utils/toast";

const AgencyRecommendDetailPage = () => {
  const { id } = useParams();

  if (!id) {
    return <Navigate to="/agency/recommend" />;
  }

  const onCopy = (e: React.MouseEvent) => {
    e.stopPropagation();

    const defaultSuccess = () => successToast("복사 완료");
    const defaultFailure = () => errorToast("복사 실패");

    navigator.clipboard.writeText(id).then(defaultSuccess).catch(defaultFailure);
  };

  return (
    <PageLayout
      header={
        <Header.Container>
          <Header.Left>
            <Header.Back />
          </Header.Left>
          <Header.Center>
            <Header.Title>{id}</Header.Title>
          </Header.Center>
          <Header.Right>
            <Header.Alarm />
          </Header.Right>
        </Header.Container>
      }
      withFloating
    >
      <ListingCarousel />
      <section className="space-y-3 px-4 py-6">
        <div className="space-y-1">
          <Badge size="xs" theme="accent">
            아파트
          </Badge>
          <div className="flex items-center gap-1">
            <p className="font-headline1-bold text-label-strong">아이파크뷰</p>
            <div className="flex items-center justify-between">
              <p className="font-label1-normal-regular text-label-alternative">101.28cm (30평)</p>
            </div>
          </div>
          <p className="text-label-neutral font-body2-normal-regular">
            서울 도봉구 창동 123-45, 101동 101호
          </p>
          <div className="flex items-center gap-1">
            <p className="text-label-neutral font-body2-normal-regular">{id}</p>
            <button onClick={onCopy}>
              <Copy className="text-label-alternative size-4 rotate-180" />
            </button>
          </div>
        </div>
        <div className="bg-cool-neutral-99 space-y-2 rounded-[4px] p-3">
          <div className="flex items-center justify-between">
            <p className="font-body2-normal-regular text-label-neutral">감정가</p>
            <p className="font-body2-normal-bold">{formatPrice(320000000, { showUnit: true })}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-body2-normal-regular text-label-neutral">최저가</p>
            <p className="font-body2-normal-bold">{formatPrice(240000000, { showUnit: true })}</p>
          </div>
        </div>
        <p className="font-caption1-regular text-label-alternative">25.6.23 업데이트 매물</p>
      </section>
      <Divider className="h-2" />
      <section className="space-y-3 px-4 py-6">
        <p className="font-body1-normal-bold">사건 개요</p>
        <div className="font-body2-normal-regular space-y-1">
          <div className="flex">
            <p className="text-label-alternative w-20 shrink-0">사건명</p>
            <p>부동산 임의경매</p>
          </div>
          <div className="flex">
            <p className="text-label-alternative w-20 shrink-0">법원명</p>
            <p>서울북부지방법원</p>
          </div>
          <div className="flex">
            <p className="text-label-alternative w-20 shrink-0">접수일</p>
            <p>2024. 03. 15</p>
          </div>
          <div className="flex">
            <p className="text-label-alternative w-20 shrink-0">개시결정일</p>
            <p>2024. 08. 02</p>
          </div>
          <div className="flex">
            <p className="text-label-alternative w-20 shrink-0">현재 상태</p>
            <p>매각 기일 예정</p>
          </div>
        </div>
      </section>
      <Divider className="h-2" />
      <section className="space-y-3 px-4 py-6">
        <p className="font-body1-normal-bold">입찰 일정</p>
        <div className="font-label1-normal-regular border-cool-neutral-98 w-full overflow-hidden rounded-[4px] border">
          <div className="text-label-neutral bg-cool-neutral-99 flex p-2.5">
            <p className="flex-1 shrink-0 text-center">구분</p>
            <p className="flex-2 shrink-0 text-center">매각기일</p>
            <p className="flex-2 shrink-0 text-center">최저가</p>
            <p className="flex-1 shrink-0 text-center">결과</p>
          </div>
          <div>
            <div className="border-t-cool-neutral-98 flex border-t p-2.5">
              <p className="flex-1 shrink-0 text-center">1차</p>
              <p className="flex-2 shrink-0 text-center">2025.07.07</p>
              <p className="flex-2 shrink-0 text-center">2,055,000,000원</p>
              <p className="flex-1 shrink-0 text-center">유찰</p>
            </div>
            <div className="border-t-cool-neutral-98 flex border-t p-2.5">
              <p className="flex-1 shrink-0 text-center">2차</p>
              <p className="flex-2 shrink-0 text-center">2025.08.11</p>
              <p className="flex-2 shrink-0 text-center">1,644,000,000원</p>
              <p className="flex-1 shrink-0 text-center">-</p>
            </div>
          </div>
        </div>
      </section>
      <Divider className="h-2" />
      <section className="space-y-3 px-4 py-6">
        <p className="font-body1-normal-bold">권리관계</p>
        <div className="font-body2-normal-regular space-y-1">
          <div className="flex">
            <p className="text-label-alternative w-20 shrink-0">채무자</p>
            <p>풍천케미칼(주)</p>
          </div>
          <div className="flex">
            <p className="text-label-alternative w-20 shrink-0">채권자</p>
            <p>에프에스비2409유동화전문 유한회사(양도인: 페퍼저축은행)</p>
          </div>
          <div className="flex">
            <p className="text-label-alternative w-20 shrink-0">소유자</p>
            <p>이철수</p>
          </div>
          <div className="flex">
            <p className="text-label-alternative w-20 shrink-0">임차인</p>
            <p>김지은</p>
          </div>
          <div className="flex">
            <p className="text-label-alternative w-20 shrink-0">현재 상태</p>
            <p>매각 기일 예정</p>
          </div>
        </div>
      </section>
      <Divider className="h-2" />
      <section className="space-y-3 px-4 py-6">
        <p className="font-body1-normal-bold">전문가 코멘트</p>
        <p className="font-body1-normal-regular">
          1회 유찰 후 80% 수준으로 진입 예정이며, 전세 시세 약 12억 전후로 예상됩니다. 법인 명의
          물건이므로 명도·세무 리스크 검토 필요합니다.
        </p>
      </section>
      <Divider className="h-2" />
      <section className="space-y-3 px-4 py-6">
        <p className="font-body1-normal-bold">지도</p>
        <div className="space-y-2">
          <p className="font-body1-normal-regular text-label-alternative">
            서울 도봉구 창동 123-45
          </p>
          <GyeongmaeMap />
        </div>
        <RequestBidButton />
      </section>
    </PageLayout>
  );
};

export default AgencyRecommendDetailPage;
