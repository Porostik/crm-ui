import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/cn";

export type NavLinkProps = React.ComponentPropsWithoutRef<"a"> & {
  active?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  asChild?: boolean;
};

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, active, disabled, icon, children, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        ref={ref}
        aria-current={active ? "page" : undefined}
        aria-disabled={disabled}
        className={cn(
          "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2",
          active && "text-[color:var(--color-primary)] bg-[color:var(--color-primary)]/10",
          !active && "text-[color:var(--color-ink)] hover:bg-[color:var(--color-ink)]/10",
          disabled && "pointer-events-none opacity-50",
          className
        )}
        {...(disabled && { tabIndex: -1 })}
        {...props}
      >
        {icon && <span className="size-4 shrink-0 [&>svg]:size-4" aria-hidden>{icon}</span>}
        {children}
      </Comp>
    );
  }
);

NavLink.displayName = "NavLink";
