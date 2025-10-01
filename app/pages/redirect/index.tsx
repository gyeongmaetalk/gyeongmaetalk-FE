import { useEffect } from "react";

import ky from "ky";
import { Loader2 } from "lucide-react";
import { Navigate, redirect, useSearchParams } from "react-router";

import { AuthProvider } from "~/constants/auth";
import { useAccessTokenStore, useRefreshTokenStore } from "~/lib/zustand/user";
import { login } from "~/services/auth";

export default function RedirectPage() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

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
              client_id: import.meta.env.VITE_KAKAO_REST_API_KEY,
              redirect_uri: `${origin}/redirect`,
              code,
            },
          })
          .json();

        const data = await login({
          accessToken: response.access_token,
          provider: AuthProvider.KAKAO,
        });

        if (data.results.registered) {
          setAccessToken(data.results.accessToken);
          setRefreshToken(data.results.refreshToken);
        } else {
          setAccessToken(response.access_token);
          redirect("/signup");
        }
      } catch (err) {
        console.error(err);
      }
    };

    requestAccessToken();
  }, []);

  return (
    <section className="flex h-full flex-col items-center justify-center gap-2">
      <Loader2 className="text-primary-normal size-10 animate-spin" />
      <p>로그인 중...</p>
    </section>
  );
}
