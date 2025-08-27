import * as React from "react";

import { cn } from "~/lib/utils";

import Navigation from "./navigation/navigation";

export type PageLayoutProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  showNav?: boolean;
  safeArea?: { top?: boolean; bottom?: boolean };
  bgGradient?: boolean;
};

export default function PageLayout({
  children,
  header,
  showNav = false,
  safeArea = { top: true, bottom: true },
  bgGradient,
}: PageLayoutProps) {
  return (
    <div
      className="flex min-h-dvh w-full justify-center"
      style={{
        background: bgGradient
          ? "linear-gradient(225.28deg, #D8EAFF 22.13%, #F5F7FF 68.11%)"
          : "white",
      }}
    >
      <div className={cn("relative flex w-full flex-col")}>
        {header && header}
        <main
          className={cn(
            "mt-11 flex-1 overflow-y-auto",
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
