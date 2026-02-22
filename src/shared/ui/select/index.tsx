import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { Spinner } from "../spinner";

const selectTriggerVariants = cva(
  "inline-flex items-center justify-between gap-2 rounded-md border border-[color:var(--color-ink)]/15 bg-transparent font-medium text-[color:var(--color-ink)] transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[placeholder]:text-[color:var(--color-ink)]/50",
  {
    variants: {
      size: {
        sm: "h-8 px-2 text-xs min-w-[6rem]",
        md: "h-9 px-3 text-sm min-w-[8rem]",
        lg: "h-10 px-4 text-sm min-w-[10rem]",
        icon: "h-9 w-9 p-0 min-w-0",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export type SelectItem = { value: string; label: string };

export type SelectProps = Omit<
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>,
  "children"
> &
  VariantProps<typeof selectTriggerVariants> & {
    items: SelectItem[];
    placeholder?: string;
    loading?: boolean;
    asChild?: boolean;
    className?: string;
    "aria-label"?: string;
    children?: React.ReactNode;
  };

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      items,
      value,
      defaultValue,
      onValueChange,
      placeholder = "Select…",
      disabled,
      loading = false,
      size = "md",
      asChild = false,
      className,
      "aria-label": ariaLabel,
      children,
      ...rootProps
    },
    ref
  ) => {
    const isDisabled = disabled ?? loading;

    return (
      <SelectPrimitive.Root
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        disabled={isDisabled}
        {...rootProps}
      >
        <SelectPrimitive.Trigger
          ref={ref}
          asChild={asChild}
          aria-label={ariaLabel}
          className={cn(selectTriggerVariants({ size }), className)}
        >
          {asChild ? (
            children
          ) : (
            <>
              <SelectPrimitive.Value placeholder={placeholder} />
              {loading ? (
                <Spinner size="sm" className="shrink-0" />
              ) : (
                <SelectPrimitive.Icon asChild>
                  <ChevronDown className="size-4 shrink-0 opacity-50" aria-hidden />
                </SelectPrimitive.Icon>
              )}
            </>
          )}
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            position="popper"
            sideOffset={4}
            className={cn(
              "relative z-50 max-h-[var(--radix-select-content-available-height)] min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-md border border-[color:var(--color-ink)]/15 bg-white shadow-md",
              ""
            )}
          >
            <SelectPrimitive.Viewport className="p-1">
              {items.map((item) => (
                <SelectPrimitive.Item
                  key={item.value}
                  value={item.value}
                  className={cn(
                    "relative flex cursor-default select-none items-center rounded py-1.5 pl-2 pr-8 text-sm outline-none",
                    "text-[color:var(--color-ink)]",
                    "focus:bg-[color:var(--color-ink)]/10 focus:text-[color:var(--color-ink)]",
                    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                  )}
                >
                  <SelectPrimitive.ItemText>{item.label}</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    );
  }
);

Select.displayName = "Select";
