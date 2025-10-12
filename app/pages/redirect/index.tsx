import { useEffect } from "react";

import { Loader2 } from "lucide-react";
import { Navigate, useNavigate, useSearchParams } from "react-router";

import { WebviewEvent } from "~/constants/webview";
import { useWebView } from "~/hooks/use-webview";
import { useAccessTokenStore, useRefreshTokenStore } from "~/lib/zustand/user";

export default function RedirectPage() {
  const [searchParams] = useSearchParams();

  const accessToken = searchParams.get("accessToken");
  const refreshToken = searchParams.get("refreshToken");
  const registered = searchParams.get("registered");

  const navigate = useNavigate();

  const { postMessage } = useWebView();

  const setAccessToken = useAccessTokenStore((state) => state.setAccessToken);
  const setRefreshToken = useRefreshTokenStore((state) => state.setRefreshToken);

  if (!accessToken || !refreshToken) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    postMessage(WebviewEvent.GET_ALARM_STATUS, { accessToken, refreshToken });

    const requestAccessToken = async () => {
      if (registered === "true") {
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        navigate("/", { replace: true });
      } else {
        navigate("/signup", { replace: true, state: { accessToken, refreshToken } });
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
