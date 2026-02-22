import * as React from "react";
import { cn } from "../../lib/cn";

export type PageHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export function PageHeader({ className, ...props }: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4",
        className
      )}
      {...props}
    />
  );
}

export type PageHeaderTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export function PageHeaderTitle({ className, ...props }: PageHeaderTitleProps) {
  return (
    <h1
      className={cn("text-2xl font-semibold text-[color:var(--color-ink)]", className)}
      {...props}
    />
  );
}

export type PageHeaderDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export function PageHeaderDescription({
  className,
  ...props
}: PageHeaderDescriptionProps) {
  return (
    <p
      className={cn("text-sm text-[color:var(--color-ink)]/70", className)}
      {...props}
    />
  );
}

export type PageHeaderActionsProps = React.HTMLAttributes<HTMLDivElement>;

export function PageHeaderActions({ className, ...props }: PageHeaderActionsProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 flex-wrap items-center gap-2 sm:flex-row",
        className
      )}
      {...props}
    />
  );
}
