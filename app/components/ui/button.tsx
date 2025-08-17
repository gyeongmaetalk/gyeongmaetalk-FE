import * as React from "react";

import { Slot } from "@radix-ui/react-slot";

import { cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "~/lib/utils";

interface ButtonProps extends React.ComponentProps<"button"> {
  /**
   * 버튼 종류
   * default(solid): 기본 버튼
   * outlined: 테두리 버튼
   * text: 텍스트 버튼
   */
  variant?: "default" | "outlined" | "text";

  /**
   * 버튼 테마
   * default(primary): 기본 버튼
   * secondary: 보조 버튼
   * assistive: 부정적 의미의 버튼
   */
  theme?: "default" | "secondary" | "assistive";

  /**
   * 버튼 크기
   * default(lg): 기본 버튼
   * md: 중간 버튼
   * sm: 작은 버튼
   */
  size?: "default" | "md" | "sm";

  /**
   * 버튼 로딩 상태
   */
  loading?: boolean;

  /**
   * 버튼 아이콘 위치
   * size를 이용해서 크기 조절
   */
  LeftIcon?: React.ElementType;
  RightIcon?: React.ElementType;

  /**
   * 아이콘 전용 버튼
   * size를 이용해서 크기 조절
   */
  iconOnly?: boolean;

  asChild?: boolean;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "",
        outlined:
          "border border-primary-normal bg-transparent text-primary-normal hover:bg-primary-normal/10 active:bg-primary-normal/20",
        text: "bg-transparent text-primary-normal hover:bg-primary-normal/10 active:bg-primary-normal/20",
      },
      theme: {
        default: "",
        secondary: "",
        assistive: "",
      },
      size: {
        default: "px-7 py-3 rounded-[0.75rem] gap-1.5",
        md: "px-5 py-[0.5625rem] rounded-[0.625rem] gap-[0.3125rem]",
        sm: "px-3.5 py-[0.4375rem] rounded-[0.5rem] gap-1",
      },
    },
    compoundVariants: [
      // default variant + theme combinations (outlined 제외)
      {
        variant: "default",
        theme: "default",
        class: "bg-primary-normal text-white hover:bg-primary-strong active:bg-primary-heavy",
      },
      {
        variant: "default",
        theme: "assistive",
        class:
          "bg-label-assistive/12 text-label-neutral/88 hover:bg-label-assistive/60 active:bg-label-assistive/80",
      },
    ],
    defaultVariants: {
      variant: "default",
      theme: "default",
      size: "default",
    },
  }
);

const iconSize = {
  default: "size-5",
  md: "size-4.5",
  sm: "size-4",
};

const iconOnlySize = {
  default: "size-12 rounded-[0.75rem] [&_svg:not([class*='size-'])]:size-6",
  md: "size-10 rounded-[0.625rem] [&_svg:not([class*='size-'])]:size-5",
  sm: "size-8 rounded-[0.5rem] [&_svg:not([class*='size-'])]:size-4.5",
};

function Button({
  className,
  variant,
  size,
  theme,
  loading = false,
  asChild = false,
  LeftIcon,
  RightIcon,
  iconOnly,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  const { disabled, children, ...restProps } = props;
  const isDisabled = disabled || loading;

  const childrenWithLoader = loading ? (
    <Loader2 className={cn(iconSize[size ?? "default"], "animate-spin")} />
  ) : (
    <>
      {LeftIcon && !iconOnly && <LeftIcon className={cn(iconSize[size ?? "default"])} />}
      {children}
      {RightIcon && !iconOnly && <RightIcon className={cn(iconSize[size ?? "default"])} />}
    </>
  );

  const isOnlyTextContent =
    !iconOnly && React.Children.toArray(children).every((ch) => typeof ch === "string");
  const isOnlyIconContent =
    iconOnly && React.Children.toArray(children).every((ch) => typeof ch === "object");
  const isValidChildren = isOnlyTextContent || isOnlyIconContent;

  // 아이콘 전용 버튼에서는 텍스트 컨텐츠를 사용할 수 없음
  if (!isValidChildren) {
    if (iconOnly) {
      throw new Error("Button이 iconOnly 모드일 때 텍스트 컨텐츠는 사용할 수 없습니다.");
    } else {
      throw new Error("Button이 iconOnly 모드가 아닐 때는 텍스트만 사용할 수 있습니다.");
    }
  }

  return (
    <Comp
      className={cn(
        buttonVariants({ variant, size, theme, className }),
        iconOnly && `${iconOnlySize[size ?? "default"]} p-0`
      )}
      data-slot="button"
      disabled={isDisabled}
      {...restProps}
    >
      {childrenWithLoader}
    </Comp>
  );
}

export { Button, buttonVariants };
