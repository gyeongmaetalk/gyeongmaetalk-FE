import { useEffect, useState } from "react";

import { useNavigate } from "react-router";

import { AlarmFill } from "~/components/icons";
import { Header } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import { Button } from "~/components/ui/button";
import { WebviewEvent } from "~/constants/webview";
import { useWebView } from "~/hooks/use-webview";
import { useAccessTokenStore, useRefreshTokenStore } from "~/lib/zustand/user";
import AlarmItem from "~/routes/alarm/alarm-item";
import AlarmRecommendItem from "~/routes/alarm/alarm-recommend-item";
import AlarmReviewItem from "~/routes/alarm/alarm-review-item";

const mockData = [
  {
    type: "review" as const,
    createAt: "2025-10-08T09:00:00",
    isRead: true,
    reviewId: 1,
    counselDateTime: "2025-10-08T09:00:00",
  },
  {
    type: "recommend" as const,
    createAt: "2025-10-07T08:00:00",
    isRead: false,
    title: "서울 역세권 30평 아파트",
    counselorName: "이정훈",
    recommendId: "2024타경12345",
    thumbnail:
      "https://i.namu.wiki/i/8mcZn4QTDZNSyG5LCLIltEOwSsrMoAG9TKsurgtD2zMPJWqQCYvZUsL_66BkJy3JmN4lhegQHg_A2iGdD-AWLw.webp",
  },
];

export default function AlarmPage() {
  const [isAlarmEnabled, setIsAlarmEnabled] = useState<boolean | null>(null);
  const accessToken = useAccessTokenStore((state) => state.accessToken);
  const refreshToken = useRefreshTokenStore((state) => state.refreshToken);

  const navigate = useNavigate();

  const onMessage = (event: { type: string; data: unknown }) => {
    const { type, data } = event;
    if (type === WebviewEvent.GET_ALARM_STATUS) {
      const { alarmEnabled } = data as { alarmEnabled: boolean };
      setIsAlarmEnabled(alarmEnabled);
    }
  };

  const { postMessage } = useWebView(onMessage);

  const onNavigateSetting = () => {
    navigate("/mypage/alarm");
  };

  const onOpenSetting = () => {
    postMessage(WebviewEvent.OPEN_SETTING);
  };

  useEffect(() => {
    postMessage(WebviewEvent.GET_ALARM_STATUS, { accessToken, refreshToken });
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
      {mockData.length > 0 ? (
        mockData.map((item) => (
          <AlarmItem key={item.createAt} {...item}>
            {item.type === "review" ? (
              <AlarmReviewItem reviewId={item.reviewId} counselDateTime={item.counselDateTime} />
            ) : (
              <AlarmRecommendItem
                recommendId={item.recommendId}
                title={item.title}
                counselorName={item.counselorName}
                thumbnail={item.thumbnail}
              />
            )}
          </AlarmItem>
        ))
      ) : (
        <div className="flex h-full flex-col items-center justify-center">
          <p className="font-body2-normal-regular text-label-neutral">알림이 없어요.</p>
        </div>
      )}
    </PageLayout>
  );
}
