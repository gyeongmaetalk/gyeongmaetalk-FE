import { useState } from "react";

import { cn } from "~/lib/utils";

import { NavConsult, NavHome, NavMypage } from "../../icons";

// Router 없이 작동하는 Mock Navigation 컴포넌트 (클릭시 색상 변경)
function MockNavigation() {
  const [activeTab, setActiveTab] = useState("/");

  const isActive = (path: string) => activeTab === path;

  const handleTabClick = (path: string) => {
    setActiveTab(path);
    console.log(`${path} 탭 클릭됨`);
  };

  return (
    <nav className="fixed right-0 bottom-0 left-0 h-12 border-t bg-white">
      <ul className="grid h-full grid-cols-3 py-1">
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
            <NavHome className="h-6 w-6" />
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
            <NavConsult className="h-6 w-6" />
            <div className="text-center text-[11px] font-medium">상담 내역</div>
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
            <NavMypage className="h-6 w-6" />
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
