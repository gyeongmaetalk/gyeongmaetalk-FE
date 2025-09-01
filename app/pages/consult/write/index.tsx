import { useRef, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { Camera, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { Navigate, useSearchParams } from "react-router";

import ConsultantReviewCard from "~/components/card/consultant-review-card";
import FloatingContainer from "~/components/container/floating-container";
import Divider from "~/components/divider";
import { Close } from "~/components/icons";
import { WithBackHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import StarRating from "~/components/star-rating";
import { Button } from "~/components/ui/button";
import { DragCarousel, DragCarouselItem } from "~/components/ui/carousel/drag-carousel";
import { Checkbox } from "~/components/ui/checkbox";
import { Textarea } from "~/components/ui/textarea";
import {
  type WriteConsultReviewForm,
  writeConsultReviewFormSchema,
} from "~/routes/consult.write/schema";
import { infoToast } from "~/utils/toast";

const DEFAULT_VALUES = {
  rating: 0,
  content: "",
  images: [],
  isAgree: false,
};

const MAX_IMAGES = 5;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const getRatingText = (rating: number) => {
  if (rating === 1) return "별로에요";
  if (rating === 2) return "그럭저럭 괜찮았어요";
  if (rating === 3) return "보통이에요";
  if (rating === 4) return "아주 만족해요";
  return "훌륭한 경험이었어요!";
};

export default function ConsultWriteReviewPage() {
  const [searchParams] = useSearchParams();
  const consultantId = searchParams.get("consultantId");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);

  const form = useForm<WriteConsultReviewForm>({
    resolver: zodResolver(writeConsultReviewFormSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const rating = form.watch("rating");
  const images = form.watch("images");
  const isAgree = form.watch("isAgree");
  const content = form.watch("content");

  const submitDisabled =
    rating === 0 || content.length < 20 || !isAgree || form.formState.isSubmitting;

  const onRatingChange = (rating: number) => {
    form.setValue("rating", rating);
  };

  const onFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);

    if (files.length === 0) return;

    const currentImageCount = images?.length || 0;
    const remainingSlots = MAX_IMAGES - currentImageCount;

    if (files.length > remainingSlots) {
      infoToast(`이미지는 최대 ${MAX_IMAGES}개까지 업로드 가능합니다.`);
      return;
    }

    form.setValue("images", [...(images || []), ...files]);

    const newPreviewUrls = files.map((file) => URL.createObjectURL(file));
    setImagePreviewUrls((prev) => [...prev, ...newPreviewUrls]);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onRemoveImage = (index: number) => {
    const newImages = [...(images || [])];
    const newPreviewUrls = [...imagePreviewUrls];

    URL.revokeObjectURL(newPreviewUrls[index]);

    newImages.splice(index, 1);
    newPreviewUrls.splice(index, 1);

    form.setValue("images", newImages);
    setImagePreviewUrls(newPreviewUrls);
  };

  const onUploadButtonClick = () => {
    fileInputRef.current?.click();
  };

  if (!consultantId) {
    return <Navigate to="/consult" />;
  }

  const onSubmit = form.handleSubmit(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );

  return (
    <PageLayout header={<WithBackHeader title="상담후기 작성" />} withFloating>
      <form className="space-y-5 px-4 py-6" onSubmit={onSubmit}>
        <ConsultantReviewCard date="25.6.23 18:00" />
        <p className="font-body1-normal-bold">이정훈 상담사와 상담 경험은 어땠나요?</p>
        <div className="flex items-center gap-2">
          <StarRating rating={form.watch("rating")} size="lg" setRating={onRatingChange} />
          {rating > 0 && (
            <p className="text-label-neutral font-label2-regular">{getRatingText(rating)}</p>
          )}
        </div>
        <Divider className="bg-cool-neutral-98" />
        <Textarea
          {...form.register("content")}
          label="후기작성"
          placeholder="진행하신 상담 경험을 20자 이상 공유해 주시면, 다른 분들에게 도움이 됩니다."
          minLength={20}
          additionalText="최소 20자"
        />
        <div className="flex flex-wrap gap-2">
          {imagePreviewUrls.length < MAX_IMAGES && (
            <button
              type="button"
              onClick={onUploadButtonClick}
              className="border-cool-neutral-50/16 flex size-20 flex-col items-center justify-center gap-1 rounded-lg border"
              aria-label="이미지 업로드"
            >
              <Camera />
              <p className="font-label2-medium text-label-alternative">
                {imagePreviewUrls.length}/{MAX_IMAGES}
              </p>
            </button>
          )}
          <DragCarousel>
            {imagePreviewUrls.map((url, index) => (
              <DragCarouselItem key={`${url}-${index}`}>
                <div className="relative">
                  <img
                    src={url}
                    alt={`업로드된 이미지 ${index + 1}`}
                    className="size-20 rounded-lg object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => onRemoveImage(index)}
                    className="bg-label-neutral absolute top-1 right-1 flex items-center justify-center rounded-full p-1"
                    aria-label={`이미지 ${index + 1} 삭제`}
                  >
                    <Close className="size-4 text-white" />
                  </button>
                </div>
              </DragCarouselItem>
            ))}
          </DragCarousel>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept={ACCEPTED_IMAGE_TYPES.join(",")}
            onChange={onFileSelect}
            className="hidden"
          />
        </div>
        <Divider className="bg-cool-neutral-98" />
        <div className="flex items-center gap-1">
          <Checkbox {...form.register("isAgree")} />
          <p className="font-body2-normal-regular text-label-alternative">
            작성된 후기는 경매톡의 홍보 및 서비스 개선에 활용될 수 있습니다. (필수)
          </p>
        </div>
        <FloatingContainer>
          <Button type="submit" className="w-full" disabled={submitDisabled}>
            작성완료
          </Button>
        </FloatingContainer>
      </form>
    </PageLayout>
  );
}
