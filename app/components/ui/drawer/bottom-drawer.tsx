import { Drawer } from "vaul";

import { Close } from "~/components/icons";

export default function BottomDrawer({
  children,
  trigger,
  title,
}: {
  children: React.ReactNode;
  trigger: React.ReactNode;
  title: string;
}) {
  return (
    <Drawer.Root shouldScaleBackground={false}>
      <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="max-w-mobile fixed inset-0 mx-auto bg-black/40" />
        <Drawer.Content className="max-w-mobile fixed right-0 bottom-0 left-0 mx-auto mt-24 flex h-fit flex-col rounded-t-[10px] bg-gray-100 outline-none">
          <div className="flex-1 rounded-t-[10px] bg-white p-5">
            <div className="grid grid-cols-[1fr_auto_1fr]">
              <div />
              <Drawer.Title className="font-headline2-bold text-label-strong text-center">
                {title}
              </Drawer.Title>
              <Drawer.Close asChild>
                <div className="flex items-center justify-self-end">
                  <Close width={14.8} height={14.8} />
                </div>
              </Drawer.Close>
            </div>
          </div>
          <div className="bg-white p-5" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
