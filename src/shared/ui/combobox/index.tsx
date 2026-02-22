import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import { ChevronDown } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { Input } from "../input";
import { Spinner } from "../spinner";

const comboboxTriggerVariants = cva(
  "inline-flex items-center justify-between gap-2 rounded-md border border-[color:var(--color-ink)]/15 bg-transparent font-medium text-[color:var(--color-ink)] transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[placeholder]:text-[color:var(--color-ink)]/50",
  {
    variants: {
      size: {
        sm: "h-8 px-2 text-xs min-w-[6rem]",
        md: "h-9 px-3 text-sm min-w-[8rem]",
        lg: "h-10 px-4 text-sm min-w-[10rem]",
        icon: "h-9 w-9 p-0 min-w-0 justify-center",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export type ComboboxItem = { value: string; label: string };

export type ComboboxProps = VariantProps<typeof comboboxTriggerVariants> & {
  items: ComboboxItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  disabled?: boolean;
  loading?: boolean;
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
  className?: string;
  "aria-label"?: string;
  children?: React.ReactNode;
};

function getItemByValue(items: ComboboxItem[], value: string): ComboboxItem | undefined {
  return items.find((item) => item.value === value);
}

export const Combobox = React.forwardRef<HTMLButtonElement, ComboboxProps>(
  (
    {
      items,
      value: controlledValue,
      defaultValue,
      onValueChange,
      placeholder = "Choose…",
      searchPlaceholder = "Search…",
      disabled,
      loading = false,
      size = "md",
      asChild = false,
      className,
      "aria-label": ariaLabel,
      children,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue ?? "");
    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : uncontrolledValue;
    const setValue = React.useCallback(
      (v: string) => {
        if (!isControlled) setUncontrolledValue(v);
        onValueChange?.(v);
      },
      [isControlled, onValueChange]
    );

    const selectedItem = value ? getItemByValue(items, value) : undefined;
    const [search, setSearch] = React.useState("");

    React.useEffect(() => {
      if (!open) setSearch("");
    }, [open]);

    const filteredItems = React.useMemo(() => {
      const q = search.trim().toLowerCase();
      if (!q) return items;
      return items.filter((item) => item.label.toLowerCase().includes(q));
    }, [items, search]);

    const handleSelect = (item: ComboboxItem) => {
      setValue(item.value);
      setOpen(false);
    };

    const isDisabled = disabled ?? loading;
    const searchInputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
      if (open) {
        const t = setTimeout(() => searchInputRef.current?.focus(), 0);
        return () => clearTimeout(t);
      }
    }, [open]);

    const triggerLabel = selectedItem ? selectedItem.label : placeholder;
    const triggerContent = (
      <button
        type="button"
        disabled={isDisabled}
        aria-label={ariaLabel ?? placeholder}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={cn(comboboxTriggerVariants({ size }), className)}
      >
        {size === "icon" ? (
          loading ? (
            <Spinner size="sm" />
          ) : (
            <ChevronDown className="size-4 shrink-0 opacity-50" aria-hidden />
          )
        ) : (
          <>
            <span className="truncate">{triggerLabel}</span>
            {loading ? (
              <Spinner size="sm" className="shrink-0" />
            ) : (
              <ChevronDown className="size-4 shrink-0 opacity-50" aria-hidden />
            )}
          </>
        )}
      </button>
    );

    const listContent = (
      <div className="flex flex-col gap-1 p-1">
        <div className="sticky top-0 z-10 bg-white pb-1">
          <Input
            ref={searchInputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
            className="h-8 text-sm"
          />
        </div>
        <div
          className="max-h-52 overflow-auto"
          role="listbox"
          aria-label={searchPlaceholder}
        >
          {filteredItems.length === 0 ? (
            <div className="py-2 px-2 text-sm text-[color:var(--color-ink)]/70">
              No results
            </div>
          ) : (
            filteredItems.map((item) => (
              <button
                key={item.value}
                type="button"
                role="option"
                aria-selected={value === item.value}
                onClick={() => handleSelect(item)}
                className={cn(
                  "w-full cursor-pointer rounded py-1.5 px-2 text-left text-sm text-[color:var(--color-ink)]",
                  "hover:bg-[color:var(--color-ink)]/10 focus:bg-[color:var(--color-ink)]/10 focus:outline-none",
                  value === item.value && "bg-[color:var(--color-primary)]/10 font-medium"
                )}
              >
                {item.label}
              </button>
            ))
          )}
        </div>
      </div>
    );

    return (
      <Popover.Root open={open} onOpenChange={setOpen}>
        {asChild && children ? (
          <Popover.Trigger asChild ref={ref}>{children}</Popover.Trigger>
        ) : (
          <Popover.Trigger asChild ref={ref}>{triggerContent}</Popover.Trigger>
        )}
        <Popover.Portal>
          <Popover.Content
            sideOffset={4}
            align="start"
            className={cn(
              "z-50 min-w-[var(--radix-popover-trigger-width)] max-w-[min(20rem,100vw)] rounded-md border border-[color:var(--color-ink)]/15 bg-white shadow-md",
              className
            )}
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            {listContent}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
  }
);

Combobox.displayName = "Combobox";
