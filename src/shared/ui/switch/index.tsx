import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "../../lib/cn";

export type SwitchProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>;

export const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(
      "inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2",
      "data-[state=unchecked]:bg-[color:var(--color-ink)]/20",
      "data-[state=checked]:bg-[color:var(--color-primary)]",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        "pointer-events-none block size-4 rounded-full bg-white shadow-sm transition-transform",
        "data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0.5"
      )}
    />
  </SwitchPrimitive.Root>
));

Switch.displayName = "Switch";
