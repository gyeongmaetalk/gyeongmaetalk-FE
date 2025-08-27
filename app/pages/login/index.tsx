import { Apple, Kakao, LogoIcon, LogoText } from "~/components/icons";
import { Button } from "~/components/ui/button";

const LoginPage = () => {
  return (
    <div className="flex h-full flex-col bg-white">
      <section className="flex flex-2 flex-col items-center justify-center">
        <div className="flex items-center gap-1.5">
          <LogoIcon className="h-11" />
          <LogoText className="h-9" />
        </div>
        <h1 className="font-heading1-bold">부동산 경매의 든든한 파트너</h1>
      </section>
      <section className="flex flex-1 flex-col items-center justify-center gap-[25px]">
        <p className="font-body1-normal-medium text-label-strong">
          간편 로그인으로 빠르게 경매톡을 시작해보세요!
        </p>
        <div className="flex w-full flex-col gap-3 px-4">
          <Button className="font-headline2-bold flex items-center gap-1 bg-black text-white hover:bg-black/85 active:bg-black/75">
            <Apple className="size-5" />
            <span className="font-body1-normal-medium">Apple로 계속하기</span>
          </Button>
          <Button className="font-headline2-bold bg-kakao hover:bg-kakao/85 active:bg-kakao/75 flex items-center gap-1 text-black/85">
            <Kakao className="size-5" />
            <span className="font-body1-normal-medium">카카오로 계속하기</span>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
