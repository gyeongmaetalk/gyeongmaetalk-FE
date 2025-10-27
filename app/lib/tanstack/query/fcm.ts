import { useQuery } from "@tanstack/react-query";

import type { HTTPError } from "ky";

import { FCM } from "~/constants";
import { useRefreshTokenStore } from "~/lib/zustand/user";
import type { BaseResponse } from "~/models";
import type { NotificationResponse } from "~/models/fcm";
import { getNotifications } from "~/services/fcm";

export const useGetNotifications = () => {
  const refreshToken = useRefreshTokenStore((state) => state.refreshToken);

  return useQuery<BaseResponse<NotificationResponse>, HTTPError, NotificationResponse>({
    queryKey: [FCM.NOTIFICATIONS],
    queryFn: getNotifications,
    select: (data) => data.result,
    enabled: !!refreshToken,
  });
};
