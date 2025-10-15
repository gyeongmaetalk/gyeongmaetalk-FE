import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { Textfield } from "~/components/ui/textfield";
import { useCreateMyQna } from "~/lib/tanstack/mutation/qna";
import { errorToast, infoToast } from "~/utils/toast";

export default function InquiryTab() {
  const { mutate: createMyQna } = useCreateMyQna();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const { title, content, isAgree } = Object.fromEntries(formData) as unknown as {
      title: string;
      content: string;
      isAgree: boolean;
    };

    if (!title || !content) {
      return infoToast("모든 필수 항목을 입력해주세요.");
    }
    if (!isAgree) {
      return infoToast("개인정보 수집 및 이용 동의를 동의해주세요.");
    }

    createMyQna(
      {
        title,
        content,
        isAgree,
      },
      {
        onSuccess: () => {
          infoToast("문의가 등록되었습니다.");
        },
        onError: (error) => {
          errorToast("문의 등록에 실패했습니다.");
          console.error(error);
        },
      }
    );
  };

  return (
    <form className="flex h-full flex-col justify-between px-4 py-6" onSubmit={onSubmit}>
      <div className="space-y-6">
        <Textfield
          name="title"
          required
          label="문의 제목"
          placeholder="문의 제목을 입력해 주세요."
        />
        <Textarea
          name="content"
          required
          label="문의 내용"
          placeholder="문의 사항을 입력해 주세요."
          maxLength={250}
          className="h-40"
        />
      </div>
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center gap-2">
          <Checkbox name="isAgree" id="isAgree" />
          <Label htmlFor="isAgree" className="font-body2-normal-regular text-label-alternative">
            <p>개인정보 수집 및 이용 동의 (필수)</p>
          </Label>
        </div>
        <Button type="submit" className="self-stretch">
          문의하기
        </Button>
      </div>
    </form>
  );
}
