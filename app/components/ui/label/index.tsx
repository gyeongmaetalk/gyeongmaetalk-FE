"use client";

import { cn } from "~/lib/utils";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

function Label({ className, ...props }: LabelProps) {
  return <label className={cn("cursor-pointer select-none", className)} {...props} />;
}

export { Label };
