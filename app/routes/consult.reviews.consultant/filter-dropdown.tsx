import { useState } from "react";

import { useNavigate } from "react-router";

import { ArrowDown } from "~/components/icons";
import { useOutsideClick } from "~/hooks/use-outside-click";
import { cn } from "~/lib/utils";

const FILTER_OPTIONS = [
  {
    label: "최신순",
    value: "",
  },
  {
    label: "오래된순",
    value: "oldest",
  },
  {
    label: "별점 높은 순",
    value: "highest",
  },
  {
    label: "별점 낮은 순",
    value: "lowest",
  },
];

interface FilterDropdownProps {
  consultantId: string;
  sort: string;
}

const FilterDropdown = ({ consultantId, sort }: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [menuRef] = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));

  const navigate = useNavigate();

  const currentLabel = FILTER_OPTIONS.find((option) => option.value === sort)?.label;

  const onClickFilter = (value: string) => {
    navigate(`?sort=${value}&consultantId=${consultantId}`, {
      replace: true,
    });
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="border-cool-neutral-50/16 font-caption1-medium flex items-center gap-0.5 rounded-sm border py-1 pr-1 pl-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {currentLabel}
        <ArrowDown />
      </button>
      {isOpen && (
        <div className="font-body1-normal-regular border-cool-neutral-97 shadow-input absolute top-full right-0 z-100 mt-2 flex w-[140px] flex-col rounded-[12px] border bg-white p-2">
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option.value}
              className={cn(
                "active:bg-cool-neutral-97 rounded-[12px] px-3 py-2 text-start",
                option.value === sort && "text-primary-normal"
              )}
              onClick={() => onClickFilter(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
