import { Person } from "../icons";
import Divider from "../divider";

// interface ConsultReservationInfoCardProps {
//   date: string;
//   consultantName: string;
//   consultantPhone: string;
// }

const ReservationInfoCard = () => {
  return (
    <section className="space-y-4 px-4 py-6">
      <div className="flex items-center gap-1">
        <Person className="text-primary-normal" />
        <p className="font-headline2-bold text-label-strong">예약 정보</p>
      </div>
      <div className="space-y-3">
        <div className="font-body2-normal-regular space-y-2">
          <p className="text-label-alternative">예약된 일정</p>
          <p>6월 23일(월) 오후 6시 30분</p>
        </div>
        <Divider className="bg-cool-neutral-97" />
        <div className="font-body2-normal-regular space-y-2">
          <p className="text-label-alternative">상담사 정보</p>
          <p>이정훈 상담사 (010-1234-1234)</p>
        </div>
      </div>
    </section>
  );
};

export default ReservationInfoCard;
