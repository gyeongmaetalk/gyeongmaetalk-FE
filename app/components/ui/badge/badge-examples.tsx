import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { Badge } from ".";

interface BadgeExampleProps {
  size?: "default" | "md" | "xs";
}

export const SolidBadge = ({ size }: BadgeExampleProps) => {
  return (
    <section className="space-y-5">
      <h1 className="text-2xl font-bold">Solid Button (size만 조절 가능)</h1>
      <div className="grid grid-cols-2 gap-5">
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Default Theme</h2>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Normal</h3>
            <Badge size={size}>Normal</Badge>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Left Ico n</h3>
            <Badge size={size} LeftIcon={ArrowLeftIcon}>
              Left Icon
            </Badge>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Right Icon</h3>
            <Badge size={size} RightIcon={ArrowRightIcon}>
              Right Icon
            </Badge>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Left and Right Icon</h3>
            <Badge size={size} LeftIcon={ArrowLeftIcon} RightIcon={ArrowRightIcon}>
              Left and Right Icons
            </Badge>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Assistive Theme</h2>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Normal</h3>
            <Badge size={size} theme="accent">
              Normal
            </Badge>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Left Icon</h3>
            <Badge size={size} theme="accent" LeftIcon={ArrowLeftIcon}>
              Left Icon
            </Badge>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Right Icon</h3>
            <Badge size={size} theme="accent" RightIcon={ArrowRightIcon}>
              Right Icon
            </Badge>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Left and Right Icon</h3>
            <Badge size={size} theme="accent" LeftIcon={ArrowLeftIcon} RightIcon={ArrowRightIcon}>
              Left and Right Icons
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export const OutlinedBadge = ({ size }: BadgeExampleProps) => {
  return (
    <section className="space-y-5">
      <h1 className="text-2xl font-bold">Outlined Button (size만 조절 가능)</h1>
      <div className="grid grid-cols-2 gap-5">
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Default Theme</h2>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Normal</h3>
            <Badge size={size} variant="outlined">
              Default
            </Badge>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Left Icon</h3>
            <Badge size={size} variant="outlined" LeftIcon={ArrowLeftIcon}>
              Left Icon
            </Badge>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Right Icon</h3>
            <Badge size={size} variant="outlined" RightIcon={ArrowRightIcon}>
              Right Icon
            </Badge>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Left and Right Icon</h3>
            <Badge
              size={size}
              variant="outlined"
              LeftIcon={ArrowLeftIcon}
              RightIcon={ArrowRightIcon}
            >
              Left and Right Icons
            </Badge>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Accent Theme</h2>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Normal</h3>
            <Badge size={size} variant="outlined" theme="accent">
              Accent
            </Badge>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Left Icon</h3>
            <Badge size={size} variant="outlined" theme="accent" LeftIcon={ArrowLeftIcon}>
              Left Icon
            </Badge>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Right Icon</h3>
            <Badge size={size} variant="outlined" theme="accent" RightIcon={ArrowRightIcon}>
              Right Icon
            </Badge>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Left and Right Icon</h3>
            <Badge
              size={size}
              variant="outlined"
              theme="accent"
              LeftIcon={ArrowLeftIcon}
              RightIcon={ArrowRightIcon}
            >
              Left and Right Icons
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};
