import { api } from "~/lib/ky";
import type { BaseResponse } from "~/models";
import type { NotificationResponse } from "~/models/fcm";

export const getNotifications = async (): Promise<BaseResponse<NotificationResponse>> => {
  return api.get("fcm/notifications").json();
};
