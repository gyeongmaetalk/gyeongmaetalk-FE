import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import FloatingContainer from "~/components/container/floating-container";
import PhoneVerification from "~/components/phone-verification";
import { Button } from "~/components/ui/button";
import { Textfield } from "~/components/ui/textfield";
import { type SignupForm, signupFormSchema } from "~/routes/signup._index/schema";

const DEFAULT_VALUES: SignupForm = {
  name: "",
  birth: "",
  phone: "",
  code: "",
};

export default function SignupPage() {
  const [isCodeVerified, setIsCodeVerified] = useState(false);

  const { formState, watch, register, handleSubmit, setValue } = useForm<SignupForm>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const name = watch("name");
  const birth = watch("birth");
  const phone = watch("phone");
  const code = watch("code");

  const isSubmitDisabled =
    !name || !birth || !phone || !code || !isCodeVerified || formState.isSubmitting;

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

  const onPhoneChange = (value: string) => {
    setValue("phone", value);
  };

  const onCodeChange = (value: string) => {
    setValue("code", value);
  };

  const onVerificationComplete = (isVerified: boolean) => {
    setIsCodeVerified(isVerified);
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
        <PhoneVerification
          phone={phone}
          code={code}
          onPhoneChange={onPhoneChange}
          onCodeChange={onCodeChange}
          onVerificationComplete={onVerificationComplete}
        />
        <FloatingContainer>
          <Button type="submit" className="w-full" disabled={isSubmitDisabled}>
            완료
          </Button>
        </FloatingContainer>
      </form>
    </main>
  );
}
