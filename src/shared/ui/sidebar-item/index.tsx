import * as React from "react";
import { cn } from "../../lib/cn";
import { NavLink } from "../nav-link";
import { Badge } from "../badge";
import { useSidebarCollapsed } from "../sidebar";

export type SidebarItemProps = {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  badge?: string | number;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export function SidebarItem({
  label,
  icon,
  active,
  badge,
  href,
  onClick,
  disabled,
}: SidebarItemProps) {
  const collapsed = useSidebarCollapsed();

  const content = (
    <>
      {icon && <span className="size-4 shrink-0 [&>svg]:size-4" aria-hidden>{icon}</span>}
      <span
        className={cn(
          "min-w-0 flex-1 truncate transition-[width,opacity] duration-200",
          collapsed && "w-0 overflow-hidden opacity-0"
        )}
      >
        {label}
      </span>
      {badge != null && (
        <Badge
          variant="secondary"
          className={cn(
            "shrink-0",
            collapsed ? "ml-0 h-5 min-w-5 px-1.5 justify-center" : "ml-auto"
          )}
        >
          {String(badge)}
        </Badge>
      )}
    </>
  );

  const linkClassName = cn(
    "w-full justify-start",
    collapsed && "justify-center px-2"
  );

  if (href != null) {
    return (
      <NavLink
        href={href}
        active={active}
        disabled={disabled}
        className={linkClassName}
      >
        {content}
      </NavLink>
    );
  }

  return (
    <NavLink asChild active={active} disabled={disabled} className={linkClassName}>
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className="w-full cursor-pointer border-0 bg-transparent p-0 text-left font-inherit"
      >
        {content}
      </button>
    </NavLink>
  );
}
