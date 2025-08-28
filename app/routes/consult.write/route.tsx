import ConsultWriteReviewPage from "~/pages/consult/write";

export const meta = () => {
  return [{ title: "상담후기 작성" }, { name: "description", content: "상담후기 작성" }];
};

export default function ConsultWriteReviewLayout() {
  return <ConsultWriteReviewPage />;
}
