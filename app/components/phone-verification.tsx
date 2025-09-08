import { useRef, useState } from "react";

import { Button } from "~/components/ui/button";
import { Textfield } from "~/components/ui/textfield";
import { cn } from "~/lib/utils";
import { STATUS } from "~/routes/signup._index/constant";
import { formatRemainingTime } from "~/routes/signup._index/util";
import { errorToast } from "~/utils/toast";

interface PhoneVerificationProps {
  phone: string;
  code: string;
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onVerificationComplete: (isVerified: boolean) => void;
}

export default function PhoneVerification({
  phone,
  code,
  onPhoneChange,
  onCodeChange,
  onVerificationComplete,
}: PhoneVerificationProps) {
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [successText, setSuccessText] = useState("");
  const [errorText, setErrorText] = useState("");
  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const isCodeVerifyDisabled = !isPhoneVerified || !code;
  const isCheckCodeDisabled = !isPhoneVerified || !remainingTime;

  const onRequestCode = () => {
    // 기존 interval이 있다면 정리
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setIsPhoneVerified(true);
    setRemainingTime(5);

    intervalRef.current = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev && prev > 1) {
          return prev - 1;
        }
        if (intervalRef.current) {
          errorToast("전화번호와 인증 번호가 초기화 되었습니다.\n다시 시도해주세요.");
          clearInterval(intervalRef.current as NodeJS.Timeout);
          intervalRef.current = null;
          setErrorText(STATUS.CODE_EXPIRED);
        }
        return null;
      });
    }, 1000);
  };

  const onRequestCodeVerify = () => {
    /**
     * 인증번호가 올바르지 않다면
     * STATUS.INVALID_CODE
     * 인증번호가 만료되었다면
     * STATUS.CODE_EXPIRED
     * 인증번호가 올바르다면
     * STATUS.VALID_CODE
     * 로 설정
     */
    setIsCodeVerified(true);
    setSuccessText(STATUS.VALID_CODE);
    onVerificationComplete(true);

    // 성공했을 때만 clearInterval
    if (intervalRef.current) {
      clearInterval(intervalRef.current as NodeJS.Timeout);
      intervalRef.current = null;
    }
  };

  return (
    <>
      <div className="flex">
        <div className="flex-1">
          <Textfield
            label="휴대폰 번호"
            required
            placeholder="번호를 입력해주세요.(ex.01012345678)"
            className="rounded-r-none"
            maxLength={11}
            value={phone}
            onChange={onPhoneChange}
          />
        </div>
        <Button
          type="button"
          variant="outlined"
          theme="secondary"
          className="self-end rounded-l-none border-l-0"
          onClick={onRequestCode}
        >
          {isPhoneVerified ? "재전송" : "확인"}
        </Button>
      </div>
      <div className="flex">
        <div className="flex-1">
          <Textfield
            required
            label="인증번호"
            placeholder="인증번호를 입력해주세요."
            className={cn(!successText && "rounded-r-none")}
            disabled={isCheckCodeDisabled}
            successText={successText}
            errorText={errorText}
            value={code}
            onChange={onCodeChange}
            additionalText={formatRemainingTime(remainingTime)}
          />
        </div>
        {!isCodeVerified && (
          <Button
            variant="outlined"
            theme="secondary"
            disabled={isCodeVerifyDisabled}
            className={cn(
              "disabled:bg-cool-neutral-50/8 self-end rounded-l-none border-l-0 disabled:opacity-100",
              errorText && "mt-1 self-center"
            )}
            onClick={onRequestCodeVerify}
          >
            인증
          </Button>
        )}
      </div>
    </>
  );
}
