import { useState } from "react";

import { Button } from "../ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio";
import { Radio } from "../ui/radio";
import { Textarea } from "../ui/textarea";

interface ReviewReportProps {
  disabled: boolean;
}

const ReviewReport = ({ disabled }: ReviewReportProps) => {
  const [selectedValue, setSelectedValue] = useState("1");
  const [showTextarea, setShowTextarea] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");

  return (
    <Drawer>
      <DrawerTrigger
        className="active:bg-cool-neutral-97 rounded-[12px] px-3 py-2 text-start disabled:opacity-50"
        disabled={disabled}
      >
        신고
      </DrawerTrigger>
      <DrawerContent className="typo-semibold flex flex-col">
        <div className="flex flex-col space-y-4">
          <RadioGroup
            value={selectedValue}
            onValueChange={(value) => {
              setSelectedValue(value);
              if (value === "4") {
                setShowTextarea(true);
              } else {
                setShowTextarea(false);
              }
            }}
            className="space-y-1"
          >
            <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
              <Radio value="1" size="default" id="1" />
              <Label htmlFor="1">욕설 및 비방</Label>
            </div>
            <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
              <Radio value="2" size="default" id="2" />
              <Label htmlFor="2">허위/광고성 게시물</Label>
            </div>
            <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
              <Radio value="3" size="default" id="3" />
              <Label htmlFor="3">개인정보 노출</Label>
            </div>
            <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
              <Radio value="4" size="default" id="4" />
              <Label htmlFor="4">기타</Label>
            </div>
            {showTextarea && (
              <Textarea
                maxLength={100}
                additionalText="최대 100자"
                id="textarea"
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
                placeholder="메세지를 입력해주세요"
              />
            )}
          </RadioGroup>
          <Button
            variant="default"
            theme="default"
            className="w-full"
            disabled={!selectedValue || (showTextarea && textareaValue.length === 0)}
          >
            신고하기
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ReviewReport;
