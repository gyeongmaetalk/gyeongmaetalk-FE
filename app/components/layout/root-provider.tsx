import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Outlet } from "react-router";
import { Toaster } from "sonner";

import MswProvider from "./msw-provider";

const queryClient = new QueryClient();

const kakaoScriptUrl = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.6/kakao.min.js";
const kakaoJavascriptKey = import.meta.env.VITE_KAKAO_JS_KEY;

const naverMapKey = import.meta.env.VITE_NAVER_MAP_KEY;
const naverMapScriptUrl = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${naverMapKey}`;

if (typeof Kakao !== "undefined" && !Kakao.isInitialized()) {
  Kakao.init(kakaoJavascriptKey);
}

const RootProvider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <script type="text/javascript" src={naverMapScriptUrl} />
      <script
        src={kakaoScriptUrl}
        integrity="sha384-WAtVcQYcmTO/N+C1N+1m6Gp8qxh+3NlnP7X1U7qP6P5dQY/MsRBNTh+e1ahJrkEm"
        crossOrigin="anonymous"
      />
      <Outlet />
      <MswProvider />
      <Toaster position="bottom-center" duration={3000} closeButton />
    </QueryClientProvider>
  );
};

export default RootProvider;
