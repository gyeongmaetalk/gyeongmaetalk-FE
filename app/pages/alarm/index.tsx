import { useEffect, useState } from "react";

import { useNavigate } from "react-router";

import { AlarmFill } from "~/components/icons";
import { Header } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import { Button } from "~/components/ui/button";
import { WebviewEvent } from "~/constants/webview";
import { useWebView } from "~/hooks/use-webview";

export default function AlarmPage() {
  const [isAlarmEnabled, setIsAlarmEnabled] = useState<boolean | null>(null);

  const navigate = useNavigate();

  const { postMessage } = useWebView({
    onMessage: (event) => {
      console.log(event);
      const { type, data } = event;
      if (type === WebviewEvent.GET_ALARM_STATUS) {
        const { alarmEnabled } = data as { alarmEnabled: boolean };
        setIsAlarmEnabled(alarmEnabled);
      }
    },
  });

  const onNavigateSetting = () => {
    navigate("/mypage/alarm");
  };

  const onOpenSetting = () => {
    postMessage({ type: WebviewEvent.OPEN_SETTING });
  };

  useEffect(() => {
    postMessage({ type: WebviewEvent.GET_ALARM_STATUS });
  }, []);

  return (
    <PageLayout
      header={
        <Header.Container>
          <Header.Left>
            <Header.Back />
          </Header.Left>
          <Header.Center>
            <Header.Title>알림센터</Header.Title>
          </Header.Center>
          <Header.Right>
            <Button
              variant="text"
              theme="assistive"
              className="p-0 active:bg-transparent"
              onClick={onNavigateSetting}
            >
              설정
            </Button>
          </Header.Right>
        </Header.Container>
      }
      withFloating
    >
      {isAlarmEnabled === false && (
        <div className="bg-blue-99 border-blue-95 mx-3 my-4 flex items-center justify-between rounded-[12px] border p-3">
          <div className="flex items-center gap-1">
            <AlarmFill />
            <p className="font-body2-normal-regular text-label-neutral">알림이 꺼져있어요.</p>
          </div>
          <Button
            variant="text"
            theme="secondary"
            className="p-0 active:bg-transparent"
            onClick={onOpenSetting}
          >
            알림 켜기
          </Button>
        </div>
      )}
    </PageLayout>
  );
}
