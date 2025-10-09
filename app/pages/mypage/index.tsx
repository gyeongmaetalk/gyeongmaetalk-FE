import { Navigate, useNavigate } from "react-router";

import Divider from "~/components/divider";
import { Apple, Back, Kakao } from "~/components/icons";
import { cn } from "~/lib/utils";
import { useAccessTokenStore, useRefreshTokenStore } from "~/lib/zustand/user";

const response = {
  auth: true,
  name: "박서현",
  authType: "apple",
  hasAuctionInProgress: true,
};

const MyPagePage = () => {
  const navigate = useNavigate();

  const accessToken = useAccessTokenStore((state) => state.accessToken);
  const refreshToken = useRefreshTokenStore((state) => state.refreshToken);

  if (!accessToken && !refreshToken) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col">
      {/* 회원 로그인 정보 */}
      <div className="flex h-24 flex-row items-center justify-between px-4 pt-6 pb-[15px]">
        <div className="flex flex-row items-center gap-1">
          {response.auth && (
            <div
              className={cn(
                "bg-kakao flex size-6 items-center justify-center rounded-[4px]",
                response.authType === "kakao" && "bg-kakao",
                response.authType === "apple" && "bg-black"
              )}
            >
              {response.authType === "kakao" && <Kakao className="h-[15px] w-[15px]" />}
              {response.authType === "apple" && <Apple className="h-[15px] w-[15px]" />}
            </div>
          )}
          <div
            className="font-headline1-bold ml-1"
            onClick={response.auth ? () => navigate("/mypage/userinfo") : () => navigate("/login")}
          >
            {response.auth ? `${response.name} 님` : "로그인 및 회원가입"}
          </div>
          <Back className="h-3 w-[7px] -scale-x-100" />
        </div>
        {response.hasAuctionInProgress && (
          <div className="flex h-5 items-center rounded-[6px] bg-[#e5f6fe] px-[6px]">
            <div className="font-caption2-medium text-primary-normal">경매 진행 중</div>
          </div>
        )}
      </div>

      {/* 구분선 */}
      <Divider className="bg-cool-neutral-99 h-2" />

      <div className="px-4 pt-[15px] pb-6">
        {/* 후기 및 알림 */}
        {response.auth && (
          <div className="flex flex-col gap-2">
            <div className="font-label2-medium text-cool-neutral-50">후기 및 알림</div>
            <div className="font-body1-normal-regular text-label-normal cursor-pointer py-3">
              작성한 후기
            </div>
            <div
              className="font-body1-normal-regular text-label-normal cursor-pointer py-3"
              onClick={() => navigate("/mypage/alarm")}
            >
              알림
            </div>
            <Divider className="bg-cool-neutral-98 my-4" />
          </div>
        )}

        {/* 고객센터 */}
        <div className="flex flex-col gap-2">
          <div className="font-label2-medium text-cool-neutral-50">고객센터</div>
          <div
            className="font-body1-normal-regular text-label-normal cursor-pointer py-3"
            onClick={() => navigate("/questions")}
          >
            자주 묻는 질문
          </div>
          <div
            className="font-body1-normal-regular text-label-normal cursor-pointer py-3"
            onClick={() => navigate("/inquiry")}
          >
            1:1 문의
          </div>
          <Divider className="bg-cool-neutral-98 my-4" />
        </div>

        {/* 안내 */}
        <div className="flex flex-col gap-2">
          <div className="font-label2-medium text-cool-neutral-50">안내</div>
          <div className="font-body1-normal-regular text-label-normal cursor-pointer py-3">
            서비스 소개
          </div>
          <div className="font-body1-normal-regular text-label-normal cursor-pointer py-3">
            이용약관
          </div>
          <div className="font-body1-normal-regular text-label-normal cursor-pointer py-3">
            개인정보 처리방침
          </div>
          <Divider className="bg-cool-neutral-98 my-4" />

          {/* 로그아웃 */}
          {response.auth && (
            <div className="font-body1-normal-regular text-label-normal cursor-pointer py-3">
              로그아웃
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPagePage;
