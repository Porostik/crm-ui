import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/cn";
import { Button } from "../button";

export type ColumnVisibilityItem = {
  id: string;
  label: string;
  isVisible: boolean;
  toggle: () => void;
};

export type ColumnVisibilityDropdownProps = {
  columns: ColumnVisibilityItem[];
  trigger?: React.ReactNode;
  className?: string;
};

export function ColumnVisibilityDropdown({
  columns,
  trigger,
  className,
}: ColumnVisibilityDropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {trigger ?? (
          <Button
            variant="outline"
            size="sm"
            className={cn(className)}
            aria-label="Toggle columns"
          >
            Columns
            <ChevronDown className="size-4 opacity-50" />
          </Button>
        )}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={4}
          className={cn(
            "z-50 min-w-[10rem] overflow-hidden rounded-md border border-[color:var(--color-ink)]/15 bg-white p-1 shadow-md"
          )}
        >
          {columns.map((col) => (
            <DropdownMenu.CheckboxItem
              key={col.id}
              checked={col.isVisible}
              onCheckedChange={() => col.toggle()}
              onSelect={(e) => e.preventDefault()}
              className={cn(
                "relative flex cursor-default select-none items-center rounded py-1.5 pl-6 pr-2 text-sm outline-none",
                "text-[color:var(--color-ink)] focus:bg-[color:var(--color-ink)]/10"
              )}
            >
              <DropdownMenu.ItemIndicator className="absolute left-2">
                <span className="size-3.5 rounded-sm border border-[color:var(--color-primary)] bg-[color:var(--color-primary)]" />
              </DropdownMenu.ItemIndicator>
              {col.label}
            </DropdownMenu.CheckboxItem>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
