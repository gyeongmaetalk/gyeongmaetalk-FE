import * as React from "react";

import { cn } from "~/lib/utils";

import Navigation from "./navigation/navigation";

export type PageLayoutProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  showNav?: boolean;
  bgGradient?: boolean;
};

export default function PageLayout({
  children,
  header,
  showNav = false,
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
        <main className={cn("mt-[calc(2.75rem+var(--spacing-ios-top))] flex-1 overflow-y-auto")}>
          {children}
        </main>
        {showNav && <Navigation />}
      </div>
    </div>
  );
}
