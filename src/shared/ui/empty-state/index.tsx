import * as React from "react";
import { cn } from "../../lib/cn";
import { Button } from "../button";

export type EmptyStateProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border border-[color:var(--color-ink)]/15 bg-[color:var(--color-ink)]/5 py-12 px-6 text-center",
        className
      )}
      {...props}
    >
      <p className="text-sm font-medium text-[color:var(--color-ink)]">{title}</p>
      {description && (
        <p className="mt-1 max-w-sm text-sm text-[color:var(--color-ink)]/70">
          {description}
        </p>
      )}
      {actionLabel && onAction && (
        <Button className="mt-4" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
