import { useState } from "react";

import { Label } from "~/components/ui/label";

import { Radio, RadioGroup } from ".";

export const RadioExamples = ({ size }: { size: "default" | "sm" }) => {
  const [selectedValue, setSelectedValue] = useState<string>("option1");

  return (
    <section className="space-y-5">
      <h1 className="text-2xl font-bold">Radio (size만 조절 가능)</h1>
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-sm text-gray-500">Default</h3>
          <RadioGroup value={selectedValue} onValueChange={setSelectedValue} name="default">
            <div className="flex items-center gap-2">
              <Radio value="option1" size={size} id="option1" />
              <Label htmlFor="option1">옵션 1</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio value="option2" size={size} id="option2" />
              <Label htmlFor="option2">옵션 2</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio value="option3" size={size} id="option3" />
              <Label htmlFor="option3">옵션 3</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm text-gray-500">Disabled</h3>
          <RadioGroup value="option1" name="disabled">
            <div className="flex items-center gap-2">
              <Radio value="option1" size={size} id="disabled1" disabled />
              <Label htmlFor="disabled1">비활성화된 옵션 1</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio value="option2" size={size} id="disabled2" disabled />
              <Label htmlFor="disabled2">비활성화된 옵션 2</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm text-gray-500">Mixed (일부 비활성화)</h3>
          <RadioGroup value="active" name="mixed">
            <div className="flex items-center gap-2">
              <Radio value="active" size={size} id="active" />
              <Label htmlFor="active">활성화된 옵션</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio value="inactive" size={size} id="inactive" disabled />
              <Label htmlFor="inactive">비활성화된 옵션</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </section>
  );
};
