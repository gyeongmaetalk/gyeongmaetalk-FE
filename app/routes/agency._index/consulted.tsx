import ConsultantReviewCard from "~/components/card/consultant-review-card";

export default function Consulted() {
  return (
    <div className="space-y-4">
      <p className="text-label-strong font-headline2-bold">
        예약한 상담을 마친 후,
        <br />
        경매 대행를 진행해 보세요.
      </p>
      <ConsultantReviewCard
        date="25.6.23 18:00"
        counselorName="이정훈"
        experience={10}
        counselorImage="https://i.namu.wiki/i/8mcZn4QTDZNSyG5LCLIltEOwSsrMoAG9TKsurgtD2zMPJWqQCYvZUsL_66BkJy3JmN4lhegQHg_A2iGdD-AWLw.webp"
      />
    </div>
  );
}
