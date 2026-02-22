import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const avatarBgColors = [
  "bg-[color:var(--color-primary)]",
  "bg-[color:var(--color-secondary)]",
  "bg-[color:var(--color-sky)]",
  "bg-[color:var(--color-ink)]",
] as const;

function getAvatarColorClass(letter: string): string {
  const code = letter.toUpperCase().charCodeAt(0);
  const index = code % avatarBgColors.length;
  return avatarBgColors[index] ?? avatarBgColors[0];
}

const avatarVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-md font-medium text-white",
  {
    variants: {
      size: {
        sm: "h-8 w-8 text-xs",
        md: "h-9 w-9 text-sm",
        lg: "h-10 w-10 text-sm",
        icon: "h-9 w-9 text-sm",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export type AvatarProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof avatarVariants> & {
    /** Name to derive initials from (e.g. "John Doe" → "JD"). */
    name?: string;
    /** Single letter to show and use for background color. Overrides name. */
    letter?: string;
  };

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0]!.charAt(0) + parts[parts.length - 1]!.charAt(0)).toUpperCase();
  }
  if (parts.length === 1 && parts[0]) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return "?";
}

export function Avatar({
  name,
  letter,
  size = "md",
  className,
  ...props
}: AvatarProps) {
  const displayLetter = letter ?? (name ? getInitials(name).charAt(0) : "?");
  const initials = letter ?? (name ? getInitials(name) : "?");
  const bgClass = getAvatarColorClass(displayLetter);

  return (
    <span
      role="img"
      aria-label={name ?? undefined}
      className={cn(avatarVariants({ size }), bgClass, className)}
      {...props}
    >
      {initials}
    </span>
  );
}
