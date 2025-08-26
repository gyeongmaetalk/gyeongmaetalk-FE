import * as React from "react";

import { cn } from "~/lib/utils";

import Navigation from "./navigation/navigation";

export type PageLayoutProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  showNav?: boolean;
};

export default function PageLayout({ children, header, showNav = false }: PageLayoutProps) {
  return (
    <div className="flex min-h-dvh w-full justify-center bg-white">
      <div className={cn("relative flex w-full flex-col")}>
        {header && header}
        <main className="flex-1 overflow-y-auto bg-gray-200 pt-11">{children}</main>
        {showNav && <Navigation />}
      </div>
    </div>
  );
}
