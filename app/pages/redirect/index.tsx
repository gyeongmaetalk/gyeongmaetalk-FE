import { useEffect, useState } from "react";

import ky from "ky";
import { AlertCircle, Loader2 } from "lucide-react";
import { Navigate, useNavigate, useSearchParams } from "react-router";

import { Button } from "~/components/ui/button";
import { AuthProvider } from "~/constants/auth";
import { useAccessTokenStore, useRefreshTokenStore } from "~/lib/zustand/user";
import { login } from "~/services/auth";

const clientId = import.meta.env.VITE_KAKAO_REST_API_KEY;

export default function RedirectPage() {
  const [isError, setIsError] = useState(false);

  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  const navigate = useNavigate();

  const setAccessToken = useAccessTokenStore((state) => state.setAccessToken);
  const setRefreshToken = useRefreshTokenStore((state) => state.setRefreshToken);

  if (!code) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    const requestAccessToken = async () => {
      const origin = window.location.origin;

      try {
        const response: Kakao.Auth.AuthSuccessObject = await ky
          .post("https://kauth.kakao.com/oauth/token	", {
            searchParams: {
              grant_type: "authorization_code",
              client_id: clientId,
              redirect_uri: `${origin}/redirect`,
              code,
            },
          })
          .json();

        const data = await login({
          accessToken: response.access_token,
          provider: AuthProvider.KAKAO,
        });

        if (data.result.registered) {
          setAccessToken(data.result.accessToken);
          setRefreshToken(data.result.refreshToken);
          navigate("/", { replace: true });
        } else {
          setAccessToken(data.result.accessToken);
          navigate("/signup", { replace: true });
        }
      } catch (err) {
        console.error(err);
        setIsError(true);
      }
    };

    requestAccessToken();
  }, []);

  return (
    <section className="flex h-full flex-col items-center justify-center gap-2">
      {isError ? (
        <>
          <AlertCircle className="text-destructive size-10" />
          <p>로그인 중에 오류가 발생했어요.</p>
          <Button size="md" onClick={() => navigate("/login", { replace: true })}>
            다시 로그인 하기
          </Button>
          <Button size="md" theme="assistive" onClick={() => navigate("/", { replace: true })}>
            홈으로 돌아가기
          </Button>
        </>
      ) : (
        <>
          <Loader2 className="text-primary-normal size-10 animate-spin" />
          <p>로그인 중...</p>
        </>
      )}
    </section>
  );
}
