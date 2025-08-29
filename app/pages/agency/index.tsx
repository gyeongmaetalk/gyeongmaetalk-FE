import Divider from "~/components/divider";
import AuctionExample from "~/routes/agency/auction-example";
// import Consulted from "~/routes/agency/consulted";
import NotConsulted from "~/routes/agency/not-consulted";
// import NotPaid from "~/routes/agency/not-paid";

type ConsultStatus = "not-consulted" | "consulted" | "not-paid";

const consultStatus: ConsultStatus = "not-consulted";

const AgencyPage = () => {
  const renderConsultStatus = () => {
    switch (consultStatus) {
      case "not-consulted":
        return <NotConsulted />;
      // TODO: 상태에 따라 컴포넌트 렌더링 되도록 수정
      // case "consulted":
      //   return <Consulted />;
      // case "not-paid":
      //   return <NotPaid />;
    }
  };

  return (
    <div>
      <section className="px-4 py-6">
        <p className="font-heading2-bold text-label-strong">
          경매톡에서 경매대행 시
          <br />
          <span className="text-primary-normal">무료로 추천매물</span>을 받아 볼 수 있어요!
        </p>
        <AuctionExample />
        <p className="text-label-assistive font-caption1-regular">예시 이미지 입니다.</p>
      </section>
      <Divider className="h-2" />
      <section className="px-4 py-6">{renderConsultStatus()}</section>
    </div>
  );
};

export default AgencyPage;
