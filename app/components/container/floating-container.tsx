import { cn } from "~/lib/utils";

export default function FloatingContainer({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        // 전체 너비에서 좌우 패딩 뺀 너비
        "max-w-mobile fixed bottom-10 left-1/2 w-full -translate-x-1/2 px-5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
