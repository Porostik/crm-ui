import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "../../lib/cn";
import { Button } from "../button";

const DialogOpenContext = React.createContext<boolean>(false);

function useDialogOpen() {
  const context = React.useContext(DialogOpenContext);
  return context;
}

export function Dialog({
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
    <DialogOpenContext.Provider value={!!open}>
      <DialogPrimitive.Root
        open={isControlled ? openProp : open}
        onOpenChange={handleOpenChange}
        defaultOpen={defaultOpen}
        {...props}
      />
    </DialogOpenContext.Provider>
  );
}

export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export const DialogPortal = DialogPrimitive.Portal;

export type DialogOverlayProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>;

export const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  DialogOverlayProps
>(({ className }, ref) => {
  const open = useDialogOpen();
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

DialogOverlay.displayName = "DialogOverlay";

export type DialogContentProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  showClose?: boolean;
};

const contentVariants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: 0.95 },
};

export const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, children, showClose = true, ...contentProps }, ref) => {
  const open = useDialogOpen();
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content forceMount asChild ref={ref} {...contentProps}>
        <motion.div
          initial="closed"
          animate={open ? "open" : "closed"}
          variants={contentVariants}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border border-[color:var(--color-ink)]/15 bg-white p-4 shadow-lg",
            "max-h-[85vh] overflow-y-auto",
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
    </DialogPortal>
  );
});

DialogContent.displayName = "DialogContent";

export type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const DialogHeader = ({ className, ...props }: DialogHeaderProps) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);

export type DialogTitleProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;

export const DialogTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  DialogTitleProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-[color:var(--color-ink)]", className)}
    {...props}
  />
));

DialogTitle.displayName = "DialogTitle";

export type DialogDescriptionProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;

export const DialogDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  DialogDescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-[color:var(--color-ink)]/70", className)}
    {...props}
  />
));

DialogDescription.displayName = "DialogDescription";

export type DialogFooterProps = React.HTMLAttributes<HTMLDivElement>;

export const DialogFooter = ({ className, ...props }: DialogFooterProps) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2", className)}
    {...props}
  />
);
