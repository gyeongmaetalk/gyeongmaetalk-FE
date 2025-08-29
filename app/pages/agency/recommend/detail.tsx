import { Copy } from "lucide-react";
import { Navigate, useParams } from "react-router";

import Divider from "~/components/divider";
import { Header } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import { Badge } from "~/components/ui/badge";
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

    const defaultSuccess = () => successToast("복사에 성공했어요.");
    const defaultFailure = () => errorToast("복사에 실패했어요.");

    navigator.clipboard.writeText(id).then(defaultSuccess).catch(defaultFailure);
  };

  return (
    <PageLayout
      header={
        <Header.Container>
          <Header.Left>
            <Header.Close />
          </Header.Left>
          <Header.Center>
            <Header.Title>{id}</Header.Title>
          </Header.Center>
          <Header.Right>
            <Header.Close />
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
    </PageLayout>
  );
};

export default AgencyRecommendDetailPage;
