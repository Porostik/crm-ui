# Task 004 — Dialogs & overlays (CRM)

## Read first

- CLAUDE.md
- docs/ai/ui-system.md (if exists)
- AI_CONTEXT.md (if exists)

## Goal

Implement dialog and overlay primitives used across CRM:

- Dialog
- ConfirmDialog
- Drawer/Sheet (optional but recommended)
- Popover
- Tooltip
- Toast/Toaster (if you already have a toast lib; if not, STOP and ask)

## Preconditions (must verify before coding)

Check if Radix packages are installed (preferred):

- @radix-ui/react-dialog
- @radix-ui/react-popover
- @radix-ui/react-tooltip
  If missing → STOP and ask before adding.

## Hard rules

- Do NOT refactor unrelated files.
- Do NOT touch routes/pages/business logic.
- Named exports only.
- Tailwind v4 tokens via CSS vars, no inline styles.
- Accessibility: focus trap in dialogs, keyboard close, aria labels.

## File structure (required)

Each component:
src/shared/ui/<component>/
index.tsx
<component>.stories.tsx

Update barrel:
src/shared/ui/index.ts

## Components to implement

### 1) dialog

Radix Dialog-based.
API:

- Dialog
- DialogTrigger
- DialogContent
- DialogHeader
- DialogTitle
- DialogDescription
- DialogFooter
- DialogClose
  Requirements:
- Overlay + centered content
- Support scroll for long content
- Close button (optional, but nice)
  Stories:
- Default (title + text + actions)
- Long content (scroll)
- With form layout in content (uses FormField + Input)

### 2) confirm-dialog

Thin wrapper built on dialog.
Props:

- open
- onOpenChange
- title
- description?
- confirmLabel (default "Confirm")
- cancelLabel (default "Cancel")
- destructive?
- loading?
- onConfirm
- onCancel?
  Behavior:
- confirm button shows loading/disabled
- destructive style when destructive=true
  Stories:
- Default
- Destructive
- Loading

### 3) drawer (sheet)

Optional but recommended. Use Radix Dialog with different animation/position OR Radix Sheet if available.
API:

- Drawer
- DrawerTrigger
- DrawerContent (side: right default)
- DrawerHeader/Title/Description/Footer
  Stories:
- Default right drawer
- Mobile-friendly narrow viewport

### 4) popover

Radix Popover-based.
API:

- Popover
- PopoverTrigger
- PopoverContent
  Stories:
- Default (small content)
- With form controls (e.g. filter mini form)

### 5) tooltip

Radix Tooltip-based.
API:

- Tooltip
- TooltipTrigger
- TooltipContent
  Stories:
- Default
- On icon button

### 6) toast (only if already present)

If there is an existing toast system in repo:

- wrap it as `Toast` / `Toaster` primitives with consistent styling
  If not present → STOP and ask before adding any library.

## Storybook rules

- Story title: `UI/<ComponentName>`
- Include default + state variants (open/long/disabled/loading)
- No app imports

## Allowed files

- src/shared/ui/\*_/_
- src/shared/ui/index.ts
- src/shared/lib/cn.ts (ONLY if missing)

## Definition of Done

- Components compile
- Dialog focus/keyboard behavior works
- Stories render without runtime errors
