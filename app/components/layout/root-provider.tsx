import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Outlet } from "react-router";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

const naverMapKey = import.meta.env.VITE_NAVER_MAP_KEY;
const naverMapScriptUrl = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${naverMapKey}`;

const RootProvider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <script type="text/javascript" src={naverMapScriptUrl} />
      <Outlet />
      <Toaster position="top-center" duration={3000} closeButton />
    </QueryClientProvider>
  );
};

export default RootProvider;
