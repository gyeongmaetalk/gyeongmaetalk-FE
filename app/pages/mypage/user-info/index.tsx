import { Button } from "~/components/ui/button";
import { Textfield } from "~/components/ui/textfield";

const UserInfoPage = () => {
  const response = {
    name: "박서현",
    birth: "2003.06.23",
    phone: "010-1234-5678",
  };
  return (
    <div className="px-4 py-6">
      <div className="flex flex-col gap-5">
        <Textfield disabled label="이름" placeholder="이름" value={response.name} />
        <Textfield disabled label="생년월일" placeholder="생년월일" value={response.birth} />
        <Textfield disabled label="전화번호" placeholder="전화번호" value={response.phone} />
      </div>

      <div className="fixed right-0 bottom-0 left-0 flex flex-col gap-2 px-4 pb-6">
        <Button>본인인증으로 정보 수정</Button>
        <Button variant="text" theme="assistive">
          회원탈퇴
        </Button>
      </div>
    </div>
  );
};

export default UserInfoPage;
