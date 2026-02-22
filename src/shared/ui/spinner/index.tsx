import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const spinnerVariants = cva(
  "inline-block animate-spin rounded-full border-2 border-current border-t-transparent text-[color:var(--color-ink)]/60",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export type SpinnerProps = VariantProps<typeof spinnerVariants> & {
  className?: string;
};

export function Spinner({ size = "md", className }: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={cn(spinnerVariants({ size }), className)}
    />
  );
}
