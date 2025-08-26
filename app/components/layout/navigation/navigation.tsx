import { Link, useLocation } from "react-router";

import { cn } from "~/lib/utils";

import { NavConsult, NavHome, NavMypage } from "../../icons";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    // 홈 경로는 정확히 일치할 때 isActive 스타일 적용
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed right-0 bottom-0 left-0 h-12 bg-white">
      <ul className="grid h-full grid-cols-3 py-1">
        <li
          className={cn(
            "text-cool-neutral-70 flex flex-1 items-center justify-center gap-2",
            isActive("/") && "text-primary-normal"
          )}
        >
          <Link to="/" className="flex flex-col items-center">
            <NavHome className="h-6 w-6" />
            <div className="text-center text-[11px] font-medium">홈</div>
          </Link>
        </li>
        <li
          className={cn(
            "text-cool-neutral-70 flex flex-1 items-center justify-center gap-2",
            isActive("/consult") && "text-primary-normal"
          )}
        >
          <Link to="/consult" className="flex flex-col items-center">
            <NavConsult className="h-6 w-6" />
            <div className="text-center text-[11px] font-medium">상담 내역</div>
          </Link>
        </li>
        <li
          className={cn(
            "text-cool-neutral-70 flex flex-1 items-center justify-center gap-2",
            isActive("/mypage") && "text-primary-normal"
          )}
        >
          <Link to="/mypage" className="flex flex-col items-center">
            <NavMypage className="h-6 w-6" />
            <div className="text-center text-[11px] font-medium">마이 페이지</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
