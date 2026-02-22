import * as React from "react";
import { cn } from "../../lib/cn";

const TabsContext = React.createContext<{
  value: string;
  onValueChange: (value: string) => void;
}>({ value: "", onValueChange: () => {} });

export type TabsProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
  onValueChange: (value: string) => void;
};

export function Tabs({ value, onValueChange, className, ...props }: TabsProps) {
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <div className={cn("w-full", className)} data-value={value} {...props} />
    </TabsContext.Provider>
  );
}

export type TabsListProps = React.HTMLAttributes<HTMLDivElement> & {
  dense?: boolean;
};

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, dense, ...props }, ref) => (
    <div
      ref={ref}
      role="tablist"
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-md bg-[color:var(--color-ink)]/5 p-0.5",
        dense && "h-8",
        className
      )}
      {...props}
    />
  )
);

TabsList.displayName = "TabsList";

export type TabsTriggerProps = React.HTMLAttributes<HTMLButtonElement> & {
  value: string;
  disabled?: boolean;
};

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, disabled, children, ...props }, ref) => {
    const { value: selectedValue, onValueChange } = React.useContext(TabsContext);
    const isSelected = selectedValue === value;

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        aria-selected={isSelected}
        aria-disabled={disabled}
        disabled={disabled}
        tabIndex={isSelected ? 0 : -1}
        data-state={isSelected ? "active" : "inactive"}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded px-3 py-1.5 text-sm font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          isSelected
            ? "bg-white text-[color:var(--color-ink)] shadow-sm"
            : "text-[color:var(--color-ink)]/70 hover:text-[color:var(--color-ink)]",
          className
        )}
        onClick={() => onValueChange(value)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

TabsTrigger.displayName = "TabsTrigger";

export type TabsContentProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
};

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, ...props }, ref) => {
    const { value: selectedValue } = React.useContext(TabsContext);
    if (selectedValue !== value) return null;

    return (
      <div
        ref={ref}
        role="tabpanel"
        aria-hidden={false}
        className={cn("mt-2 focus-visible:outline-none", className)}
        {...props}
      />
    );
  }
);

TabsContent.displayName = "TabsContent";
