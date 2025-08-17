import { ArrowLeftIcon, ArrowRightIcon, Plus } from "lucide-react";

import { Button } from ".";

interface ButtonExampleProps {
  size?: "default" | "md" | "sm";
}

export const SolidButton = ({ size }: ButtonExampleProps) => {
  return (
    <section className="space-y-5">
      <h1 className="text-2xl font-bold">Solid Button (size만 조절 가능)</h1>
      <div className="grid grid-cols-2 gap-5">
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Default Theme</h2>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Normal</h3>
            <Button size={size}>Normal</Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Disabled</h3>
            <Button size={size} disabled>
              Disabled
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Loading</h3>
            <Button size={size} loading>
              Loading
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Left Ico n</h3>
            <Button size={size} LeftIcon={ArrowLeftIcon}>
              Left Icon
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Right Icon</h3>
            <Button size={size} RightIcon={ArrowRightIcon}>
              Right Icon
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Left and Right Icon</h3>
            <Button size={size} LeftIcon={ArrowLeftIcon} RightIcon={ArrowRightIcon}>
              Left and Right Icons
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Icon Only</h3>
            <Button size={size} iconOnly>
              <Plus />
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Assistive Theme</h2>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Normal</h3>
            <Button size={size} theme="assistive">
              Normal
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Disabled</h3>
            <Button size={size} theme="assistive" disabled>
              Disabled
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Loading</h3>
            <Button size={size} theme="assistive" loading>
              Loading
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Left Icon</h3>
            <Button size={size} theme="assistive" LeftIcon={ArrowLeftIcon}>
              Left Icon
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Right Icon</h3>
            <Button size={size} theme="assistive" RightIcon={ArrowRightIcon}>
              Right Icon
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Left and Right Icon</h3>
            <Button
              size={size}
              theme="assistive"
              LeftIcon={ArrowLeftIcon}
              RightIcon={ArrowRightIcon}
            >
              Left and Right Icons
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Icon Only</h3>
            <Button size={size} theme="assistive" iconOnly>
              <Plus />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const OutlinedButton = ({ size }: ButtonExampleProps) => {
  return (
    <section className="space-y-5">
      <h1 className="text-2xl font-bold">Outlined Button (size만 조절 가능)</h1>
      <div className="grid grid-cols-2 gap-5">
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Default Theme</h2>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Normal</h3>
            <Button size={size} variant="outlined">
              Default
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Disabled</h3>
            <Button size={size} variant="outlined" disabled>
              Disabled
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Loading</h3>
            <Button size={size} variant="outlined" loading>
              Loading
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Left Icon</h3>
            <Button size={size} variant="outlined" LeftIcon={ArrowLeftIcon}>
              Left Icon
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Right Icon</h3>
            <Button size={size} variant="outlined" RightIcon={ArrowRightIcon}>
              Right Icon
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Left and Right Icon</h3>
            <Button
              size={size}
              variant="outlined"
              LeftIcon={ArrowLeftIcon}
              RightIcon={ArrowRightIcon}
            >
              Left and Right Icons
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Icon Only</h3>
            <Button size={size} variant="outlined" iconOnly>
              <Plus />
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Secondary Theme</h2>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Normal</h3>
            <Button size={size} variant="outlined" theme="secondary">
              Secondary
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Disabled</h3>
            <Button size={size} variant="outlined" theme="secondary" disabled>
              Disabled
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Loading</h3>
            <Button size={size} variant="outlined" theme="secondary" loading>
              Loading
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Left Icon</h3>
            <Button size={size} variant="outlined" theme="secondary" LeftIcon={ArrowLeftIcon}>
              Left Icon
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Right Icon</h3>
            <Button size={size} variant="outlined" theme="secondary" RightIcon={ArrowRightIcon}>
              Right Icon
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Left and Right Icon</h3>
            <Button
              size={size}
              variant="outlined"
              theme="secondary"
              LeftIcon={ArrowLeftIcon}
              RightIcon={ArrowRightIcon}
            >
              Left and Right Icons
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Icon Only</h3>
            <Button size={size} variant="outlined" theme="secondary" iconOnly>
              <Plus />
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Assistive Theme</h2>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Normal</h3>
            <Button size={size} variant="outlined" theme="assistive">
              Assistive
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Disabled</h3>
            <Button size={size} variant="outlined" theme="assistive" disabled>
              Disabled
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Loading</h3>
            <Button size={size} variant="outlined" theme="assistive" loading>
              Loading
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Left Icon</h3>
            <Button size={size} variant="outlined" theme="assistive" LeftIcon={ArrowLeftIcon}>
              Left Icon
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Right Icon</h3>
            <Button size={size} variant="outlined" theme="assistive" RightIcon={ArrowRightIcon}>
              Right Icon
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Left and Right Icon</h3>
            <Button
              size={size}
              variant="outlined"
              theme="assistive"
              LeftIcon={ArrowLeftIcon}
              RightIcon={ArrowRightIcon}
            >
              Left and Right Icons
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Icon Only</h3>
            <Button size={size} variant="outlined" theme="assistive" iconOnly>
              <Plus />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TextButton = ({ size }: ButtonExampleProps) => {
  return (
    <section className="space-y-5">
      <h1 className="text-2xl font-bold">Text Button (size만 조절 가능)</h1>
      <div className="grid grid-cols-2 gap-5">
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Default Theme</h2>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Normal</h3>
            <Button size={size} variant="text">
              Default
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Disabled</h3>
            <Button size={size} variant="text" disabled>
              Disabled
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Loading</h3>
            <Button size={size} variant="text" loading>
              Loading
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Left Icon</h3>
            <Button size={size} variant="text" LeftIcon={ArrowLeftIcon}>
              Left Icon
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Right Icon</h3>
            <Button size={size} variant="text" RightIcon={ArrowRightIcon}>
              Right Icon
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Left and Right Icon</h3>
            <Button size={size} variant="text" LeftIcon={ArrowLeftIcon} RightIcon={ArrowRightIcon}>
              Left and Right Icons
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Icon Only</h3>
            <Button size={size} variant="text" iconOnly>
              <Plus />
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Assistive Theme</h2>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Normal</h3>
            <Button size={size} variant="text" theme="assistive">
              Assistive
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Disabled</h3>
            <Button size={size} variant="text" theme="assistive" disabled>
              Disabled
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Loading</h3>
            <Button size={size} variant="text" theme="assistive" loading>
              Loading
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Left Icon</h3>
            <Button size={size} variant="text" theme="assistive" LeftIcon={ArrowLeftIcon}>
              Left Icon
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Right Icon</h3>
            <Button size={size} variant="text" theme="assistive" RightIcon={ArrowRightIcon}>
              Right Icon
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Left and Right Icon</h3>
            <Button
              size={size}
              variant="text"
              theme="assistive"
              LeftIcon={ArrowLeftIcon}
              RightIcon={ArrowRightIcon}
            >
              Left and Right Icons
            </Button>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm text-gray-500">Icon Only</h3>
            <Button size={size} variant="text" theme="assistive" iconOnly>
              <Plus />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
