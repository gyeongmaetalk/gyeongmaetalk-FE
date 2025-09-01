import { Link } from "react-router";

import { cn } from "~/lib/utils";

interface StatusNavProps {
  status: string;
}

const STATUS_LIST = [
  {
    label: "전체",
    value: "",
  },
  {
    label: "구매",
    value: "buy",
  },
  {
    label: "미구매",
    value: "not-buy",
  },
];

export default function StatusNav({ status }: StatusNavProps) {
  const getParms = (value: string) => {
    if (value) {
      return `?status=${value}`;
    }
    return "?";
  };

  return (
    <div className="font-headline2-bold text-label-assistive border-b-label-disable mx-5 flex items-center gap-2 gap-6 border-b">
      {STATUS_LIST.map((item) => (
        <Link
          key={item.value}
          to={getParms(item.value)}
          className={cn(
            "py-3",
            status === item.value && "text-label-strong border-b-label-normal border-b-2"
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
