# Batch: UI primitives v1

Generate the following components following the template rules:

1. Button

- variants: default, secondary, outline, ghost, link, destructive
- sizes: sm, md, lg, icon
- props: loading?, asChild?
- includes spinner for loading

2. Input

- supports: disabled, error state (via `aria-invalid` + `data-invalid`), with left/right slot (optional)
- stories: default, disabled, invalid, with placeholder, with helper text example

3. Badge

- variants: default, secondary, outline, success, warning, error, info
- stories: all variants

4. Spinner (utility)

- simple spinner component
- stories: sizes sm/md/lg

Allowed files:

- src/shared/ui/button/\*
- src/shared/ui/input/\*
- src/shared/ui/badge/\*
- src/shared/ui/spinner/\*
- src/shared/ui/index.ts
- src/shared/lib/cn.ts (only if missing)
