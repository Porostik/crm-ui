import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { Spinner } from "../spinner";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[color:var(--color-primary)] text-white hover:opacity-90 active:opacity-95",
        secondary:
          "bg-[color:var(--color-secondary)] text-white hover:opacity-90 active:opacity-95",
        outline:
          "border border-[color:var(--color-ink)]/20 bg-transparent text-[color:var(--color-ink)] hover:bg-[color:var(--color-ink)]/5",
        ghost:
          "text-[color:var(--color-ink)] hover:bg-[color:var(--color-ink)]/10",
        link:
          "text-[color:var(--color-primary)] underline-offset-4 hover:underline",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
      },
      size: {
        sm: "h-8 px-2 text-xs",
        md: "h-9 px-4 text-sm",
        lg: "h-10 px-6 text-sm",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
  };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={disabled ?? loading}
        {...props}
      >
        {loading ? (
          <>
            <Spinner size="sm" className="shrink-0" />
            {children}
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";
