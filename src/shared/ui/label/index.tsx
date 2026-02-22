import * as React from "react";
import { cn } from "../../lib/cn";

export type LabelProps = React.ComponentPropsWithoutRef<"label"> & {
  required?: boolean;
};

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, required, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "block text-sm font-medium text-[color:var(--color-ink)]",
        className
      )}
      {...props}
    >
      {children}
      {required && (
        <span className="ml-0.5 text-red-600" aria-hidden>
          *
        </span>
      )}
    </label>
  )
);

Label.displayName = "Label";
