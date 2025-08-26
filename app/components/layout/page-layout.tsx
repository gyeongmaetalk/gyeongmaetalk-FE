import * as React from "react";

import { cn } from "~/lib/utils";

import Navigation from "./navigation/navigation";

export type PageLayoutProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  showNav?: boolean;
  safeArea?: { top?: boolean; bottom?: boolean };
};

export default function PageLayout({
  children,
  header,
  showNav = false,
  safeArea = { top: true, bottom: true },
}: PageLayoutProps) {
  return (
    <div className="flex min-h-dvh w-full justify-center bg-white">
      <div className={cn("relative flex w-full flex-col")}>
        {header && header}
        <main
          className={cn(
            "mt-11 flex-1 overflow-y-auto bg-gray-200",
            safeArea.top && "mt-22",
            safeArea.bottom && "mb-[34px]"
          )}
        >
          {children}
        </main>
        {showNav && <Navigation safeArea={safeArea.bottom} />}
      </div>
    </div>
  );
}
