import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "../../lib/cn";

export type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

export const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "flex size-4 shrink-0 items-center justify-center rounded border border-[color:var(--color-ink)]/30",
      "bg-white transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2",
      "data-[state=checked]:border-[color:var(--color-primary)] data-[state=checked]:bg-[color:var(--color-primary)] data-[state=checked]:text-white",
      "data-[state=indeterminate]:border-[color:var(--color-primary)] data-[state=indeterminate]:bg-[color:var(--color-primary)]",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="flex items-center justify-center">
      <Check className="size-3 stroke-[3]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = "Checkbox";
