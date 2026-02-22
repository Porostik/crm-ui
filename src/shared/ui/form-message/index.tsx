import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const formMessageVariants = cva("mt-1 block text-sm", {
  variants: {
    variant: {
      helper: "text-[color:var(--color-ink)]/70",
      error: "text-red-600",
    },
  },
  defaultVariants: {
    variant: "helper",
  },
});

export type FormMessageProps = React.HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof formMessageVariants> & {
    id?: string;
  };

export const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, variant = "helper", id, ...props }, ref) => {
    if (!props.children) return null;
    return (
      <p
        ref={ref}
        id={id}
        role={variant === "error" ? "alert" : undefined}
        className={cn(formMessageVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

FormMessage.displayName = "FormMessage";
