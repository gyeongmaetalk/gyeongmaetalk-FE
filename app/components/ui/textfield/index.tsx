import { useState } from "react";

import { X } from "lucide-react";

import { Check } from "~/components/icons";
import { useOutsideClick } from "~/hooks/use-outside-click";
import { cn } from "~/lib/utils";

interface TextfieldProps extends React.ComponentProps<"input"> {
  label?: string;
  errorText?: string;
  successText?: string;
  helperText?: string;
  additionalText?: string;
}

function Textfield({
  label,
  errorText,
  successText,
  helperText,
  additionalText,
  ...props
}: TextfieldProps) {
  const {
    className,
    value: controlledValue,
    onChange: controlledOnChange,
    required,
    ...restProps
  } = props;
  const [internalValue, setInternalValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const [inputContainerRef] = useOutsideClick<HTMLDivElement>(() => {
    setIsFocused(false);
  });

  // controlled 또는 uncontrolled 상태에 따라 value 결정
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const isHelperTextRender = errorText || successText || helperText;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
      return;
    }
    controlledOnChange?.(e);
  };

  const onClear = () => {
    if (!isControlled) {
      setInternalValue("");
    }
    // controlled 상태일 때는 onChange를 통해 부모 컴포넌트에서 처리하도록 함
    if (controlledOnChange) {
      const syntheticEvent = {
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>;
      controlledOnChange(syntheticEvent);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={props.id} className="font-label1-normal-bold">
          {label} {required && <span className="text-status-negative">*</span>}
        </label>
      )}
      <div
        ref={inputContainerRef}
        className={cn(
          "placeholder:text-label-assistive focus-within:border-primary font-body1-normal-regular border-cool-neutral-50/16 shadow-input flex flex-1 items-center gap-2 rounded-[12px] border p-3 transition-colors outline-none focus-within:border-2",
          errorText && "focus-within:border-status-negative/43 border-status-negative/28",
          restProps.disabled && "bg-cool-neutral-50/8",
          className
        )}
      >
        <input
          className="peer disabled:placeholder:text-label-disable disabled:text-label-alternative flex-1 outline-none"
          value={currentValue}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          {...restProps}
        />
        <button
          className={cn(
            "size-5 shrink-0 rounded-full",
            isFocused ? "hidden" : "block",
            errorText ? "bg-status-negative" : successText ? "bg-primary" : null
          )}
        >
          {errorText ? (
            <p className="mx-auto text-xs font-bold text-white">!</p>
          ) : successText ? (
            <Check className="mx-auto text-white" />
          ) : null}
        </button>
        <button
          className={cn(
            "bg-label-assistive size-5 shrink-0 rounded-full",
            isFocused ? "block" : "hidden"
          )}
          onClick={onClear}
          type="button"
        >
          <X className="mx-auto font-bold text-white" size={16} />
        </button>
        {additionalText && (
          <p className="text-label-assistive font-body1-normal-medium">{additionalText}</p>
        )}
      </div>
      {isHelperTextRender && (
        <p
          className={cn(
            "font-caption1-regular",
            errorText
              ? "text-status-negative"
              : successText
                ? "text-primary-normal"
                : "text-label-alternative"
          )}
        >
          {errorText || successText || helperText}
        </p>
      )}
    </div>
  );
}

export { Textfield };
