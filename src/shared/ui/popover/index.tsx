import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";

const PopoverOpenContext = React.createContext<boolean>(false);

function usePopoverOpen() {
  return React.useContext(PopoverOpenContext);
}

export function Popover({
  open: openProp,
  onOpenChange,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  const [internalOpen, setInternalOpen] = React.useState(false);
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
    <PopoverOpenContext.Provider value={!!open}>
      <PopoverPrimitive.Root
        open={isControlled ? openProp : open}
        onOpenChange={handleOpenChange}
        {...props}
      />
    </PopoverOpenContext.Provider>
  );
}

export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverAnchor = PopoverPrimitive.Anchor;
export const PopoverClose = PopoverPrimitive.Close;
export const PopoverPortal = PopoverPrimitive.Portal;

export type PopoverContentProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>;

export const PopoverContent = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(({ className, align = "center", sideOffset = 4, children, ...props }, ref) => {
  const open = usePopoverOpen();
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content forceMount asChild align={align} sideOffset={sideOffset} ref={ref} {...props}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: open ? 1 : 0, scale: open ? 1 : 0.96 }}
          transition={{ duration: 0.15 }}
          className={cn(
            "z-50 min-w-[8rem] rounded-md border border-[color:var(--color-ink)]/15 bg-white p-2 shadow-md",
            "outline-none",
            !open && "pointer-events-none",
            className
          )}
        >
          {children}
        </motion.div>
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
});

PopoverContent.displayName = "PopoverContent";
