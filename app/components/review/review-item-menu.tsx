import { useState } from "react";

import { useOutsideClick } from "~/hooks/use-outside-click";

import { Menu } from "../icons";

const OTHER_ITEM_OPTIONS = [
  {
    label: "차단",
    value: "block",
  },
  {
    label: "신고",
    value: "report",
  },
];

const MY_ITEM_OPTIONS = [
  {
    label: "수정",
    value: "edit",
  },
  {
    label: "삭제",
    value: "delete",
  },
];

interface ReviewItemMenuProps {
  reviewId: number;
  isMyReview: boolean;
}

const ReviewItemMenu = ({ reviewId, isMyReview }: ReviewItemMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [menuRef] = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));

  const menuOptions = isMyReview ? MY_ITEM_OPTIONS : OTHER_ITEM_OPTIONS;

  const onClickMenu = (value: string) => {
    if (value === "block") {
      // TODO: 차단 API 호출
    }

    if (value === "report") {
      // TODO: 신고 API 호출
    }

    if (value === "edit") {
      // TODO: 수정 페이지로 이동
    }

    if (value === "delete") {
      // TODO: 삭제 API 호출
    }

    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <Menu />
      </button>
      {isOpen && (
        <div className="font-body1-normal-regular border-cool-neutral-97 shadow-input absolute top-full right-0 mt-2 flex w-[140px] flex-col rounded-[12px] border bg-white p-2">
          {menuOptions.map((option) => (
            <button
              key={option.value}
              className="active:bg-cool-neutral-97 rounded-[12px] px-3 py-2 text-start"
              onClick={() => onClickMenu(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewItemMenu;
