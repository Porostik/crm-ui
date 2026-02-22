import * as React from "react";
import { cn } from "../../lib/cn";

const SidebarCollapsedContext = React.createContext<boolean>(false);

export function useSidebarCollapsed() {
  return React.useContext(SidebarCollapsedContext);
}

export type SidebarProps = React.ComponentPropsWithoutRef<"aside"> & {
  collapsed?: boolean;
};

export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ className, collapsed = false, ...props }, ref) => (
    <SidebarCollapsedContext.Provider value={collapsed}>
      <aside
        ref={ref}
        aria-label="Primary navigation"
        data-collapsed={collapsed || undefined}
        className={cn(
          "flex flex-col border-r border-[color:var(--color-ink)]/15 bg-white transition-[width] duration-200",
          collapsed ? "w-[3.25rem]" : "w-56",
          className
        )}
        {...props}
      />
    </SidebarCollapsedContext.Provider>
  )
);

Sidebar.displayName = "Sidebar";

export type SidebarHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex shrink-0 items-center border-b border-[color:var(--color-ink)]/15 p-3", className)}
      {...props}
    />
  )
);

SidebarHeader.displayName = "SidebarHeader";

export type SidebarContentProps = React.HTMLAttributes<HTMLDivElement>;

export const SidebarContent = React.forwardRef<HTMLDivElement, SidebarContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex-1 overflow-y-auto p-2", className)} {...props} />
  )
);

SidebarContent.displayName = "SidebarContent";

export type SidebarFooterProps = React.HTMLAttributes<HTMLDivElement>;

export const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("shrink-0 border-t border-[color:var(--color-ink)]/15 p-2", className)}
      {...props}
    />
  )
);

SidebarFooter.displayName = "SidebarFooter";
