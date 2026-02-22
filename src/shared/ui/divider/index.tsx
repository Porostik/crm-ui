import * as React from "react";
import { cn } from "../../lib/cn";

export type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: "horizontal" | "vertical";
};

export function Divider({
  className,
  orientation = "horizontal",
  ...props
}: DividerProps) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "shrink-0 border-[color:var(--color-ink)]/15",
        orientation === "horizontal" && "w-full border-t",
        orientation === "vertical" && "h-full border-l self-stretch",
        className
      )}
      {...props}
    />
  );
}
