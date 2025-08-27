import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Outlet } from "react-router";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

const RootProvider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster position="top-center" duration={3000} closeButton />
    </QueryClientProvider>
  );
};

export default RootProvider;
