import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "../../lib/cn";
import { Button } from "../button";

const DrawerOpenContext = React.createContext<boolean>(false);

function useDrawerOpen() {
  return React.useContext(DrawerOpenContext);
}

export function Drawer({
  open: openProp,
  onOpenChange,
  defaultOpen,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  const [internalOpen, setInternalOpen] = React.useState(Boolean(defaultOpen));
  const isControlled = openProp !== undefined;
  const open = isControlled ? openProp : internalOpen;
  const handleOpenChange = React.useCallback(
    (value: boolean) => {
      if (!isControlled) setInternalOpen(value);
      onOpenChange?.(value);
    },
    [isControlled, onOpenChange]
  );
  return (
    <DrawerOpenContext.Provider value={!!open}>
      <DialogPrimitive.Root
        open={isControlled ? openProp : open}
        onOpenChange={handleOpenChange}
        defaultOpen={defaultOpen}
        {...props}
      />
    </DrawerOpenContext.Provider>
  );
}

export const DrawerTrigger = DialogPrimitive.Trigger;
export const DrawerClose = DialogPrimitive.Close;
export const DrawerPortal = DialogPrimitive.Portal;

export type DrawerOverlayProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
>;

export const DrawerOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  DrawerOverlayProps
>(({ className }, ref) => {
  const open = useDrawerOpen();
  return (
    <DialogPrimitive.Overlay forceMount asChild>
      <motion.div
        ref={ref as React.Ref<HTMLDivElement>}
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed inset-0 z-50 bg-[color:var(--color-ink)]/50",
          !open && "pointer-events-none",
          className
        )}
      />
    </DialogPrimitive.Overlay>
  );
});

DrawerOverlay.displayName = "DrawerOverlay";

export type DrawerContentProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
> & {
  side?: "left" | "right";
  showClose?: boolean;
};

export const DrawerContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  DrawerContentProps
>(
  (
    { className, children, side = "right", showClose = true, ...contentProps },
    ref
  ) => {
    const open = useDrawerOpen();
    const x = side === "right" ? "100%" : "-100%";
    return (
      <DrawerPortal>
        <DrawerOverlay />
        <DialogPrimitive.Content forceMount asChild ref={ref} {...contentProps}>
          <motion.div
            initial={{ x: side === "right" ? "100%" : "-100%" }}
            animate={{ x: open ? 0 : x }}
            transition={{
              type: "tween",
              duration: 0.25,
              ease: "easeInOut",
            }}
            className={cn(
              "fixed top-0 z-50 flex h-full w-full max-w-sm flex-col border-[color:var(--color-ink)]/15 bg-white shadow-lg",
              side === "right" && "right-0 border-l",
              side === "left" && "left-0 border-r",
              !open && "pointer-events-none",
              className
            )}
          >
            {children}
            {showClose && (
              <DialogPrimitive.Close asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 h-8 w-8"
                  aria-label="Close"
                >
                  <X className="size-4" />
                </Button>
              </DialogPrimitive.Close>
            )}
          </motion.div>
        </DialogPrimitive.Content>
      </DrawerPortal>
    );
  }
);

DrawerContent.displayName = "DrawerContent";

export type DrawerHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const DrawerHeader = ({ className, ...props }: DrawerHeaderProps) => (
  <div
    className={cn("flex flex-col space-y-1.5 p-4 pb-2", className)}
    {...props}
  />
);

export type DrawerTitleProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Title
>;

export const DrawerTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  DrawerTitleProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold text-[color:var(--color-ink)]",
      className
    )}
    {...props}
  />
));

DrawerTitle.displayName = "DrawerTitle";

export type DrawerDescriptionProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
>;

export const DrawerDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  DrawerDescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-[color:var(--color-ink)]/70", className)}
    {...props}
  />
));

DrawerDescription.displayName = "DrawerDescription";

export type DrawerFooterProps = React.HTMLAttributes<HTMLDivElement>;

export const DrawerFooter = ({ className, ...props }: DrawerFooterProps) => (
  <div
    className={cn(
      "mt-auto flex gap-2 border-t border-[color:var(--color-ink)]/15 p-4",
      className
    )}
    {...props}
  />
);
