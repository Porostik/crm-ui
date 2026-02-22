import * as React from "react";
import { cn } from "../../lib/cn";

export type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  "data-invalid"?: boolean;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      disabled,
      leftAddon,
      rightAddon,
      "aria-invalid": ariaInvalid,
      "data-invalid": dataInvalid,
      ...props
    },
    ref
  ) => {
    const isInvalid = ariaInvalid === true || dataInvalid === true;

    const hasAddons = Boolean(leftAddon || rightAddon);

    const inputClassName = cn(
      "flex h-9 w-full bg-transparent px-3 py-1 text-sm transition-colors",
      "text-[color:var(--color-ink)] placeholder:text-[color:var(--color-ink)]/50",
      "focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:ring-offset-0",
      "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[color:var(--color-ink)]/5",
      !hasAddons && "rounded-md border border-[color:var(--color-ink)]/15 focus:border-[color:var(--color-primary)]",
      isInvalid && !hasAddons && "border-red-500 focus:ring-red-500 focus:border-red-500",
      isInvalid && hasAddons && "focus:ring-red-500",
      hasAddons && "border-0 rounded-none",
      className
    );

    const inputEl = (
      <input
        ref={ref}
        disabled={disabled}
        aria-invalid={ariaInvalid}
        {...(isInvalid ? { "data-invalid": "" } : {})}
        className={inputClassName}
        {...props}
      />
    );

    if (hasAddons) {
      return (
        <div
          className={cn(
            "flex w-full overflow-hidden rounded-md border border-[color:var(--color-ink)]/15 focus-within:ring-2 focus-within:ring-[color:var(--color-primary)] focus-within:ring-offset-0",
            isInvalid && "border-red-500 focus-within:ring-red-500"
          )}
        >
          {leftAddon && (
            <div className="flex items-center border-r border-[color:var(--color-ink)]/15 bg-[color:var(--color-ink)]/5 px-3 text-sm text-[color:var(--color-ink)]/70">
              {leftAddon}
            </div>
          )}
          {inputEl}
          {rightAddon && (
            <div className="flex items-center border-l border-[color:var(--color-ink)]/15 bg-[color:var(--color-ink)]/5 px-3 text-sm text-[color:var(--color-ink)]/70">
              {rightAddon}
            </div>
          )}
        </div>
      );
    }

    return inputEl;
  }
);

Input.displayName = "Input";
