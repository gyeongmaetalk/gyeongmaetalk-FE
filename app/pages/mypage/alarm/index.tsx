import { useState } from "react";

import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";

const MyPageAlarmPage = () => {
  const [isRecommendProperty, setIsRecommendProperty] = useState(false);
  const [isReview, setIsReview] = useState(false);
  const handleRecommendPropertyChange = () => {
    setIsRecommendProperty(!isRecommendProperty);
    // TODO: 추천매물 알림 설정
  };
  const handleReviewChange = () => {
    setIsReview(!isReview);
    // TODO: 리뷰 알림 설정
  };

  return (
    <div className="px-4 py-6">
      <div className="flex flex-row items-center justify-between py-3">
        <Label className="font-body1-normal-regular text-label-normal">추천매물</Label>
        <Switch checked={isRecommendProperty} onCheckedChange={handleRecommendPropertyChange} />
      </div>
      <div className="flex flex-row items-center justify-between py-3">
        <Label className="font-body1-normal-regular text-label-normal">리뷰</Label>
        <Switch checked={isReview} onCheckedChange={handleReviewChange} />
      </div>
    </div>
  );
};

export default MyPageAlarmPage;
