import { useState } from "react";

import { Navigate, useLocation } from "react-router";

import type { MatchCounselResponse } from "~/models/counsel";
import FirstStep from "~/routes/consult.matching/first-step";
import LastStep from "~/routes/consult.matching/last-step";
import SecondStep from "~/routes/consult.matching/second-step";

export type Mode = "reservation" | "complete" | null;

const ConsultMatchingPage = () => {
  const [mode, setMode] = useState<Mode>(null);

  const { state }: { state: MatchCounselResponse } = useLocation();

  if (!state) {
    return <Navigate to="/" replace />;
  }

  switch (mode) {
    case "reservation":
      return <SecondStep consultant={state} onChangeMode={setMode} />;
    case "complete":
      return <LastStep consultant={state} />;
    default:
      return <FirstStep consultant={state} onChangeMode={setMode} />;
  }
};

export default ConsultMatchingPage;
