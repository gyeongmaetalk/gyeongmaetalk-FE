import { cn } from "~/lib/utils";

interface SelectProps {
  label: string;
  isSelected: boolean;
  onChange: () => void;
}

const Select = ({ label, isSelected, onChange }: SelectProps) => {
  return (
    <button
      className={cn(
        "border-cool-neutral-95 flex h-20 flex-col justify-center gap-2 rounded-[12px] border px-4 transition-colors",
        isSelected && "border-primary-normal text-primary-normal"
      )}
      onClick={onChange}
    >
      {label}
    </button>
  );
};

export default Select;
