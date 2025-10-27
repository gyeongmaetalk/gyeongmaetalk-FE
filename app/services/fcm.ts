import { api } from "~/lib/ky";
import type { BaseResponse } from "~/models";
import type { NotificationResponse } from "~/models/fcm";

export const getNotifications = async (): Promise<BaseResponse<NotificationResponse>> => {
  return api.get("fcm/notifications").json();
};

export const readNotification = async (notificationId: number): Promise<BaseResponse<void>> => {
  return api.patch(`fcm/${notificationId}/read`).json();
};
