import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { cn } from "../../lib/cn";
import { Button } from "../button";

export type RowAction = {
  label: string;
  onSelect: () => void;
  destructive?: boolean;
  disabled?: boolean;
};

export type RowActionsDropdownProps = {
  actions: RowAction[];
  trigger?: React.ReactNode;
  className?: string;
};

export function RowActionsDropdown({
  actions,
  trigger,
  className,
}: RowActionsDropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {trigger ?? (
          <Button
            variant="ghost"
            size="icon"
            className={cn("h-8 w-8", className)}
            aria-label="Row actions"
          >
            <MoreHorizontal className="size-4" />
          </Button>
        )}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={4}
          className={cn(
            "z-50 min-w-[8rem] overflow-hidden rounded-md border border-[color:var(--color-ink)]/15 bg-white p-1 shadow-md"
          )}
        >
          {actions.map((action, i) => (
            <DropdownMenu.Item
              key={i}
              disabled={action.disabled}
              onSelect={(e) => {
                e.preventDefault();
                action.onSelect();
              }}
              className={cn(
                "relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-sm outline-none",
                "text-[color:var(--color-ink)] focus:bg-[color:var(--color-ink)]/10",
                "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                action.destructive && "text-red-600 focus:bg-red-50"
              )}
            >
              {action.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
