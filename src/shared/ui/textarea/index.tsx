import * as React from "react";
import { cn } from "../../lib/cn";

export type TextareaProps = React.ComponentPropsWithoutRef<"textarea"> & {
  "data-invalid"?: boolean;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      disabled,
      "aria-invalid": ariaInvalid,
      "data-invalid": dataInvalid,
      ...props
    },
    ref
  ) => {
    const isInvalid = ariaInvalid === true || dataInvalid === true;

    return (
      <textarea
        ref={ref}
        disabled={disabled}
        aria-invalid={ariaInvalid}
        {...(isInvalid ? { "data-invalid": "" } : {})}
        className={cn(
          "flex min-h-[5rem] w-full resize-y rounded-md border border-[color:var(--color-ink)]/15 bg-transparent px-3 py-2 text-sm transition-colors",
          "text-[color:var(--color-ink)] placeholder:text-[color:var(--color-ink)]/50",
          "focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:ring-offset-0 focus:border-[color:var(--color-primary)]",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[color:var(--color-ink)]/5",
          isInvalid && "border-red-500 focus:ring-red-500 focus:border-red-500",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
