import { useRef, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import FloatingContainer from "~/components/container/floating-container";
import { Button } from "~/components/ui/button";
import { Textfield } from "~/components/ui/textfield";
import { cn } from "~/lib/utils";
import { STATUS } from "~/routes/signup._index/constant";
import { type SignupForm, signupFormSchema } from "~/routes/signup._index/schema";
import { formatRemainingTime } from "~/routes/signup._index/util";
import { errorToast } from "~/utils/toast";

const DEFAULT_VALUES: SignupForm = {
  name: "",
  birth: "",
  phone: "",
  code: "",
};

export default function SignupPage() {
  // 추후 휴대번호 인증번호 요청 API의 상태로 수정
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  // 추후 인증번호 인증 API의 상태로 수정
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [successText, setSuccessText] = useState("");
  const [errorText, setErrorText] = useState("");
  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const { formState, watch, register, handleSubmit, setValue } = useForm<SignupForm>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const name = watch("name");
  const birth = watch("birth");
  const phone = watch("phone");
  const code = watch("code");

  const isCodeVerifyDisabled = !isPhoneVerified || !code;
  const isCheckCodeDisabled = !isPhoneVerified || !remainingTime;
  const isSubmitDisabled =
    !name || !birth || !phone || !code || !isCodeVerified || formState.isSubmitting;

  const onRequestCode = () => {
    // TODO: true인 경우는 재전송, false인 경우는 확인
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

  const onChangeNumber = (e: React.ChangeEvent<HTMLInputElement>, id: keyof SignupForm) => {
    const value = e.target.value;

    const regex = /^\d+$/;

    // 빈 문자열이라면 공백으로 설정
    if (value.trim() === "") {
      setValue(id, "");
      return;
    }

    // 숫자가 아니라면 return
    if (!regex.test(value)) return;

    setValue(id, value);
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

    // 성공했을 때만 clearInterval
    clearInterval(intervalRef.current as NodeJS.Timeout);
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <main className="space-y-6 px-4 py-6">
      <header className="font-title3-bold text-label-strong">
        <span className="text-primary-normal">연락 가능한 정보를 입력</span>하고
        <br />
        회원가입을 완료하세요!
      </header>
      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <Textfield label="이름" required placeholder="이름을 입력해주세요." {...register("name")} />
        <Textfield
          label="생년월일"
          required
          placeholder="텍스트를 입력해주세요.(ex.900123)"
          maxLength={6}
          value={birth}
          onChange={(e) => onChangeNumber(e, "birth")}
        />
        <div className="flex">
          <div className="flex-1">
            <Textfield
              label="휴대폰 번호"
              required
              placeholder="번호를 입력해주세요.(ex.01012345678)"
              className="rounded-r-none"
              maxLength={11}
              value={phone}
              onChange={(e) => onChangeNumber(e, "phone")}
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
            {/* 
              인증번호 입력 대기할 때
              additionalText 필드에 남은 시간 넣기
             */}
            <Textfield
              required
              label="인증번호"
              placeholder="인증번호를 입력해주세요."
              className={cn(!successText && "rounded-r-none")}
              disabled={isCheckCodeDisabled}
              {...register("code")}
              successText={successText}
              errorText={errorText}
              value={code}
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
        <FloatingContainer>
          <Button type="submit" className="w-full" disabled={isSubmitDisabled}>
            완료
          </Button>
        </FloatingContainer>
      </form>
    </main>
  );
}
