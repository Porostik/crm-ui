import * as React from "react";
import { cn } from "../../lib/cn";

export type TableToolbarProps = React.HTMLAttributes<HTMLDivElement> & {
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export function TableToolbar({
  left,
  right,
  className,
  children,
  ...props
}: TableToolbarProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
        className
      )}
      {...props}
    >
      {left != null && <div className="min-w-0 flex-1">{left}</div>}
      {right != null && <div className="flex shrink-0 items-center gap-2">{right}</div>}
      {children}
    </div>
  );
}
