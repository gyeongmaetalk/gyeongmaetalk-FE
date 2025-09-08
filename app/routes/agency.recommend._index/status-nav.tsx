import { Link } from "react-router";

import { cn } from "~/lib/utils";

interface StatusNavProps {
  statusList: {
    label: string;
    value: string;
  }[];
  status: string;
}

export default function StatusNav({ statusList, status }: StatusNavProps) {
  const getParms = (value: string) => {
    if (value) {
      return `?status=${value}`;
    }
    return "?";
  };

  return (
    <div className="font-headline2-bold text-label-assistive border-b-label-disable mx-5 flex items-center gap-2 gap-6 border-b">
      {statusList.map((item) => (
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
