import * as React from "react";
import { cn } from "../../lib/cn";

export type TopbarProps = React.HTMLAttributes<HTMLDivElement>;

export const Topbar = React.forwardRef<HTMLDivElement, TopbarProps>(
  ({ className, ...props }, ref) => (
    <header
      ref={ref}
      role="banner"
      className={cn(
        "flex h-12 shrink-0 items-center gap-4 border-b border-[color:var(--color-ink)]/15 bg-white px-4",
        className
      )}
      {...props}
    />
  )
);

Topbar.displayName = "Topbar";

export type TopbarLeftProps = React.HTMLAttributes<HTMLDivElement>;

export const TopbarLeft = React.forwardRef<HTMLDivElement, TopbarLeftProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex shrink-0 items-center gap-2", className)} {...props} />
  )
);

TopbarLeft.displayName = "TopbarLeft";

export type TopbarCenterProps = React.HTMLAttributes<HTMLDivElement>;

export const TopbarCenter = React.forwardRef<HTMLDivElement, TopbarCenterProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-1 items-center justify-center", className)} {...props} />
  )
);

TopbarCenter.displayName = "TopbarCenter";

export type TopbarRightProps = React.HTMLAttributes<HTMLDivElement>;

export const TopbarRight = React.forwardRef<HTMLDivElement, TopbarRightProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex shrink-0 items-center justify-end gap-2", className)} {...props} />
  )
);

TopbarRight.displayName = "TopbarRight";
