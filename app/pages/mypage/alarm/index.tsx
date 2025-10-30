import { useEffect, useRef, useState } from "react";

import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";
import { FCM } from "~/constants";
import { useDebounce } from "~/hooks/use-debounce";
import { queryClient } from "~/lib/tanstack";
import { useUpdateNotificationSetting } from "~/lib/tanstack/mutation/auth";
import { useGetNotificationSetting } from "~/lib/tanstack/query/fcm";

const MyPageAlarmPage = () => {
  const firstRenderRef = useRef(true);

  const { data: notificationSetting } = useGetNotificationSetting();

  const [alarmState, setAlarmState] = useState({
    reviewNotificationEnabled: notificationSetting?.reviewNotificationEnabled ?? false,
    propertyNotificationEnabled: notificationSetting?.propertyNotificationEnabled ?? false,
  });

  const debouncedAlarmState = useDebounce(alarmState, 500);

  const onChangeAlarmState = (key: keyof typeof alarmState, value: boolean) => {
    setAlarmState({ ...alarmState, [key]: value });
  };

  const { mutate: updateNotificationSetting } = useUpdateNotificationSetting({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [FCM.NOTIFICATION_SETTING] });
    },
  });

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    updateNotificationSetting(debouncedAlarmState);
  }, [
    debouncedAlarmState.propertyNotificationEnabled,
    debouncedAlarmState.reviewNotificationEnabled,
  ]);

  return (
    <div className="px-4 py-6">
      <div className="flex flex-row items-center justify-between py-3">
        <Label className="font-body1-normal-regular text-label-normal">추천매물</Label>
        <Switch
          checked={alarmState.propertyNotificationEnabled}
          onCheckedChange={(value) => onChangeAlarmState("propertyNotificationEnabled", value)}
        />
      </div>
      <div className="flex flex-row items-center justify-between py-3">
        <Label className="font-body1-normal-regular text-label-normal">리뷰</Label>
        <Switch
          checked={alarmState.reviewNotificationEnabled}
          onCheckedChange={(value) => onChangeAlarmState("reviewNotificationEnabled", value)}
        />
      </div>
    </div>
  );
};

export default MyPageAlarmPage;
