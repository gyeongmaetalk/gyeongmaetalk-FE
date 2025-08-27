import { useSearchParams } from "react-router";

import FirstStep from "~/routes/consult.matching/first-step";
import LastStep from "~/routes/consult.matching/last-step";
import SecondStep from "~/routes/consult.matching/second-step";

// useLocation의 state가 null이면 bad request
const ConsultMatchingPage = () => {
  const [searchParams] = useSearchParams();

  // 종류: reservation, complete. null인 경우 맨 처음 화면
  const currentMode = searchParams.get("mode");

  switch (currentMode) {
    case "reservation":
      return <SecondStep />;
    case "complete":
      return <LastStep />;
    default:
      return <FirstStep />;
  }
};

export default ConsultMatchingPage;
