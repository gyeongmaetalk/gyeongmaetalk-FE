import { cn } from "~/lib/utils";

export default function FloatingContainer({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "max-w-mobile fixed bottom-10 left-1/2 w-full -translate-x-1/2 px-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
