import * as React from "react";
import { cn } from "../../lib/cn";

export type TableSkeletonProps = React.HTMLAttributes<HTMLTableElement> & {
  rows?: number;
  columns?: number;
  dense?: boolean;
};

export function TableSkeleton({
  rows = 8,
  columns = 5,
  dense = false,
  className,
  ...props
}: TableSkeletonProps) {
  return (
    <table
      className={cn("w-full border-collapse table-fixed", className)}
      {...props}
    >
      <thead>
        <tr className="border-b border-[color:var(--color-ink)]/15">
          {Array.from({ length: columns }).map((_, i) => (
            <th
              key={i}
              className={cn(
                "px-3 py-2 text-left text-sm font-medium text-[color:var(--color-ink)]",
                dense ? "py-1.5" : "py-2"
              )}
            >
              <span className="inline-block h-4 w-20 animate-pulse rounded bg-[color:var(--color-ink)]/15" />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <tr
            key={rowIndex}
            className="border-b border-[color:var(--color-ink)]/10"
          >
            {Array.from({ length: columns }).map((_, colIndex) => (
              <td
                key={colIndex}
                className={cn(
                  "px-3 py-2",
                  dense ? "py-1.5" : "py-2"
                )}
              >
                <span
                  className={cn(
                    "inline-block animate-pulse rounded bg-[color:var(--color-ink)]/10",
                    colIndex === 0 ? "h-4 w-24" : "h-4 w-full max-w-[8rem]"
                  )}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
