import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "../../lib/cn";

export type BreadcrumbItem = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1 text-sm", className)}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const isActive = item.active ?? isLast;

        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <ChevronRight
                className="size-4 shrink-0 text-[color:var(--color-ink)]/40"
                aria-hidden
              />
            )}
            {item.onClick && !isActive ? (
              <button
                type="button"
                onClick={item.onClick}
                className={cn(
                  "rounded px-1 py-0.5 font-medium text-[color:var(--color-ink)]/70",
                  "hover:text-[color:var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-1"
                )}
              >
                {item.label}
              </button>
            ) : (
              <span
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "max-w-[12rem] truncate rounded px-1 py-0.5",
                  isActive
                    ? "font-medium text-[color:var(--color-ink)]"
                    : "text-[color:var(--color-ink)]/70"
                )}
              >
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
