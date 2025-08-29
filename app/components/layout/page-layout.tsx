import * as React from "react";

import { cn } from "~/lib/utils";

import Navigation from "./navigation/navigation";

export interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  showNav?: boolean;
  withFloating?: boolean;
}

export default function PageLayout({
  header,
  showNav = false,
  withFloating = false,
  children,
  className,
  ...props
}: PageLayoutProps) {
  return (
    <div className={cn("flex min-h-dvh w-full justify-center bg-white", className)} {...props}>
      <div className="relative flex w-full flex-col">
        {header && header}
        <main
          className={cn(
            "mt-[calc(2.75rem+var(--spacing-ios-top))] flex-1 overflow-y-auto",
            withFloating && "pb-[90px]",
            showNav && "pb-12"
          )}
        >
          {children}
        </main>
        {showNav && <Navigation />}
      </div>
    </div>
  );
}
