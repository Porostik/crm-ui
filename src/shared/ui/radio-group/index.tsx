import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "../../lib/cn";

export type RadioGroupProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>;
export type RadioItemProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;

const RadioGroupRoot = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn("flex flex-col gap-2", className)}
    {...props}
  />
));

RadioGroupRoot.displayName = "RadioGroup";

export const RadioGroup = RadioGroupRoot;

export const RadioItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  RadioItemProps & { label?: string }
>(({ className, label, children, ...props }, ref) => {
  const id = React.useId();
  const itemId = props.id ?? `${id}-${props.value}`;
  return (
    <div className="flex items-center gap-2">
      <RadioGroupPrimitive.Item
        ref={ref}
        id={itemId}
        className={cn(
          "size-4 shrink-0 rounded-full border-2 border-[color:var(--color-ink)]/30 bg-white transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2",
          "data-[state=checked]:border-[color:var(--color-primary)] data-[state=checked]:border-[4] data-[state=checked]:bg-white",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <span className="size-2 rounded-full bg-[color:var(--color-primary)]" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <label
        htmlFor={itemId}
        className="cursor-pointer text-sm text-[color:var(--color-ink)]"
      >
        {children ?? label}
      </label>
    </div>
  );
});

RadioItem.displayName = "RadioItem";
