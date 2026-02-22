import * as React from "react";
import { cn } from "../../lib/cn";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  compact?: boolean;
};

export function Card({ className, compact, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-[color:var(--color-ink)]/15 bg-white",
        compact ? "p-3" : "p-4",
        className
      )}
      {...props}
    />
  );
}

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  compact?: boolean;
};

export function CardHeader({ className, compact, ...props }: CardHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-1",
        compact ? "mb-2" : "mb-4",
        className
      )}
      {...props}
    />
  );
}

export type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn("text-lg font-semibold text-[color:var(--color-ink)]", className)}
      {...props}
    />
  );
}

export type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <p
      className={cn("text-sm text-[color:var(--color-ink)]/70", className)}
      {...props}
    />
  );
}

export type CardContentProps = React.HTMLAttributes<HTMLDivElement> & {
  compact?: boolean;
};

export function CardContent({ className, compact, ...props }: CardContentProps) {
  return (
    <div
      className={cn(
        "text-sm text-[color:var(--color-ink)]",
        compact ? "mb-2" : "mb-4",
        "last:mb-0",
        className
      )}
      {...props}
    />
  );
}

export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

export function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-end gap-2 pt-2 border-t border-[color:var(--color-ink)]/15",
        className
      )}
      {...props}
    />
  );
}
