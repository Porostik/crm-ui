import * as React from "react";
import { cn } from "../../lib/cn";

export type SectionProps = React.ComponentPropsWithoutRef<"section">;

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn("space-y-4", className)}
      {...props}
    />
  );
}

export type SectionHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export function SectionHeader({ className, ...props }: SectionHeaderProps) {
  return (
    <div
      className={cn("space-y-1", className)}
      {...props}
    />
  );
}

export type SectionTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export function SectionTitle({ className, ...props }: SectionTitleProps) {
  return (
    <h2
      className={cn("text-lg font-semibold text-[color:var(--color-ink)]", className)}
      {...props}
    />
  );
}

export type SectionDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export function SectionDescription({
  className,
  ...props
}: SectionDescriptionProps) {
  return (
    <p
      className={cn("text-sm text-[color:var(--color-ink)]/70", className)}
      {...props}
    />
  );
}

export type SectionContentProps = React.HTMLAttributes<HTMLDivElement>;

export function SectionContent({ className, ...props }: SectionContentProps) {
  return <div className={cn(className)} {...props} />;
}
