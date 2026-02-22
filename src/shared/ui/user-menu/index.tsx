import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import { cn } from "../../lib/cn";
import { Avatar } from "../avatar";
import { Button } from "../button";

export type UserMenuProps = {
  name: string;
  email?: string;
  avatarFallback?: string;
};

export function UserMenu({ name, email, avatarFallback }: UserMenuProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 pl-2 pr-2"
          aria-label="Open user menu"
        >
          <Avatar name={name} letter={avatarFallback} size="sm" className="shrink-0" />
          <span className="max-w-[8rem] truncate text-left text-sm font-medium text-[color:var(--color-ink)]">
            {name}
          </span>
          <ChevronDown className="size-4 shrink-0 text-[color:var(--color-ink)]/60" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={4}
          className={cn(
            "z-50 w-56 overflow-hidden rounded-md border border-[color:var(--color-ink)]/15 bg-white p-1 shadow-md"
          )}
        >
          <div className="flex items-center gap-2 px-2 py-2">
            <Avatar name={name} letter={avatarFallback} size="sm" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-[color:var(--color-ink)]">{name}</p>
              {email && (
                <p className="truncate text-xs text-[color:var(--color-ink)]/70">{email}</p>
              )}
            </div>
          </div>
          <DropdownMenu.Separator className="my-1 h-px bg-[color:var(--color-ink)]/15" />
          <DropdownMenu.Item
            className={cn(
              "relative flex cursor-default select-none items-center gap-2 rounded px-2 py-1.5 text-sm outline-none",
              "text-[color:var(--color-ink)] focus:bg-[color:var(--color-ink)]/10",
              "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            )}
          >
            <User className="size-4 shrink-0" />
            Profile
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className={cn(
              "relative flex cursor-default select-none items-center gap-2 rounded px-2 py-1.5 text-sm outline-none",
              "text-[color:var(--color-ink)] focus:bg-[color:var(--color-ink)]/10",
              "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            )}
          >
            <Settings className="size-4 shrink-0" />
            Settings
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-[color:var(--color-ink)]/15" />
          <DropdownMenu.Item
            className={cn(
              "relative flex cursor-default select-none items-center gap-2 rounded px-2 py-1.5 text-sm outline-none",
              "text-[color:var(--color-ink)] focus:bg-[color:var(--color-ink)]/10",
              "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            )}
          >
            <LogOut className="size-4 shrink-0" />
            Sign out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
