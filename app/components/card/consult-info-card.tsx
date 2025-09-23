import Divider from "../divider";
import { Pencil } from "../icons";

const ConsultInfoCard = () => {
  return (
    <section className="space-y-4 px-4 py-6">
      <div className="flex items-center gap-1">
        <Pencil className="text-primary-normal" />
        <p className="font-headline2-bold text-label-strong">상담 정보</p>
      </div>
      <div className="space-y-3">
        <div className="font-body2-normal-regular space-y-2">
          <p className="text-label-alternative">목적</p>
          <p>실거주를 위한 집을 사고 싶어요</p>
        </div>
        <Divider className="bg-cool-neutral-97" />
        <div className="font-body2-normal-regular space-y-2">
          <p className="text-label-alternative">지역</p>
          <p>직접 입력 (직접 입력한 내용)</p>
        </div>
        <Divider className="bg-cool-neutral-97" />
        <div className="font-body2-normal-regular space-y-2">
          <p className="text-label-alternative">희망 서비스</p>
          <p>낙찰부터 명도까지 전반적으로 도와주세요.</p>
        </div>
        <Divider className="bg-cool-neutral-97" />
        <div className="font-body2-normal-regular space-y-2">
          <p className="text-label-alternative">궁금한 분야</p>
          <p>아파트 경매</p>
        </div>
        <Divider className="bg-cool-neutral-97" />
        <div className="font-body2-normal-regular space-y-2">
          <p className="text-label-alternative">명의</p>
          <p>개인 (감면 목적 등으로 개인 사업자로 진행을 고려 중이에요.)</p>
        </div>
      </div>
    </section>
  );
};

export default ConsultInfoCard;
