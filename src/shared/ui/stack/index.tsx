import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const stackVariants = cva("flex", {
  variants: {
    direction: {
      vertical: "flex-col",
      horizontal: "flex-row",
    },
    gap: {
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
    wrap: {
      true: "flex-wrap",
      false: "flex-nowrap",
    },
  },
  defaultVariants: {
    direction: "vertical",
    gap: "md",
    align: "stretch",
    wrap: false,
  },
});

export type StackProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof stackVariants>;

export function Stack({
  className,
  direction = "vertical",
  gap = "md",
  align,
  wrap = false,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(stackVariants({ direction, gap, align, wrap }), className)}
      {...props}
    />
  );
}
