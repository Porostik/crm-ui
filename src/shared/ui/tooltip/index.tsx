import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";

const TooltipOpenContext = React.createContext<boolean>(false);

function useTooltipOpen() {
  return React.useContext(TooltipOpenContext);
}

export const TooltipProvider = TooltipPrimitive.Provider;

export function Tooltip({
  open: openProp,
  onOpenChange,
  defaultOpen,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
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
    <TooltipOpenContext.Provider value={!!open}>
      <TooltipPrimitive.Root
        open={isControlled ? openProp : open}
        onOpenChange={handleOpenChange}
        defaultOpen={defaultOpen}
        {...props}
      />
    </TooltipOpenContext.Provider>
  );
}

export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipPortal = TooltipPrimitive.Portal;

export type TooltipContentProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>;

export const TooltipContent = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 4, children, ...props }, ref) => {
  const open = useTooltipOpen();
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content forceMount asChild sideOffset={sideOffset} ref={ref} {...props}>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: open ? 1 : 0, scale: open ? 1 : 0.98 }}
          transition={{ duration: 0.12 }}
          className={cn(
            "z-50 max-w-xs rounded-md border border-[color:var(--color-ink)]/15 bg-[color:var(--color-ink)] px-3 py-2 text-sm text-white shadow-md",
            !open && "pointer-events-none",
            className
          )}
        >
          {children}
        </motion.div>
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
});

TooltipContent.displayName = "TooltipContent";
