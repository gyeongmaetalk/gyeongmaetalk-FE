import { useState } from "react";

import { cn } from "~/lib/utils";

import { LogoIcon } from "./icons";

export default function Image(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [isError, setIsError] = useState(false);

  const onError = () => {
    setIsError(true);
  };

  if (!props.src || isError) {
    return <LogoIcon className={cn("size-full", props.className)} />;
  }

  return <img {...props} onError={onError} />;
}
