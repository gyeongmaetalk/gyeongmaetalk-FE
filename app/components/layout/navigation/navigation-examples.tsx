import { useState } from "react";

import { cn } from "~/lib/utils";

import { NavAgency, NavConsult, NavHome, NavMypage } from "../../icons";

// Router 없이 작동하는 Mock Navigation 컴포넌트 (클릭시 색상 변경)
function MockNavigation() {
  const [activeTab, setActiveTab] = useState("/");

  const isActive = (path: string) => activeTab === path;

  const handleTabClick = (path: string) => {
    setActiveTab(path);
  };

  return (
    <nav className="fixed right-0 bottom-0 left-0 h-12 border-t bg-white">
      <ul className="grid h-full grid-cols-4 py-1">
        <li
          className={cn(
            "text-cool-neutral-70 flex flex-1 items-center justify-center gap-2",
            isActive("/") && "text-primary-normal"
          )}
        >
          <div
            className="flex cursor-pointer flex-col items-center"
            onClick={() => handleTabClick("/")}
          >
            <NavHome width={24} height={24} />
            <div className="text-center text-[11px] font-medium">홈</div>
          </div>
        </li>
        <li
          className={cn(
            "text-cool-neutral-70 flex flex-1 items-center justify-center gap-2",
            isActive("/consult") && "text-primary-normal"
          )}
        >
          <div
            className="flex cursor-pointer flex-col items-center"
            onClick={() => handleTabClick("/consult")}
          >
            <NavConsult width={20} height={20} />
            <div className="text-center text-[11px] font-medium">무료 상담</div>
          </div>
        </li>
        <li
          className={cn(
            "text-cool-neutral-70 flex flex-1 items-center justify-center gap-2",
            isActive("/agency") && "text-primary-normal"
          )}
        >
          <div
            className="flex cursor-pointer flex-col items-center"
            onClick={() => handleTabClick("/agency")}
          >
            <NavAgency width={24} height={24} />
            <div className="text-center text-[11px] font-medium">경매 대행</div>
          </div>
        </li>
        <li
          className={cn(
            "text-cool-neutral-70 flex flex-1 items-center justify-center gap-2",
            isActive("/mypage") && "text-primary-normal"
          )}
        >
          <div
            className="flex cursor-pointer flex-col items-center"
            onClick={() => handleTabClick("/mypage")}
          >
            <NavMypage width={24} height={24} />
            <div className="text-center text-[11px] font-medium">마이 페이지</div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

// 기본 네비게이션
export function DefaultNavigationExample() {
  return <MockNavigation />;
}
