# Task 003 — Forms ecosystem (CRM)

## Read first

- CLAUDE.md
- docs/ai/ui-system.md (if exists)
- AI_CONTEXT.md (if exists)

## Goal

Create reusable form building blocks for CRM screens.
Focus on composition and consistent layout (label above input, message below).
No business logic, no pages.

## Preconditions (must verify before coding)

Check if these deps already exist:

- react-hook-form
- zod
  If missing → STOP and ask before adding.
  (We can still implement presentational primitives without RHF, but do not assume.)

## Hard rules

- Do NOT refactor unrelated files.
- Do NOT touch routes/pages/business logic.
- Named exports only.
- Tailwind v4 tokens via CSS vars, no inline styles.
- Accessibility: label association, aria-invalid, keyboard focus.

## File structure (required)

Each component:
src/shared/ui/<component>/
index.tsx
<component>.stories.tsx

Update barrel:
src/shared/ui/index.ts

## Components to implement

### 1) label

Purpose: unified label with optional "required" indicator.
API:

- Label (props: htmlFor?, required?)
  Stories:
- Default
- Required

### 2) form-message

Purpose: helper/error text below control.
API:

- FormMessage (props: variant?: "helper" | "error")
  Stories:
- Helper
- Error

### 3) form-field

Purpose: composition wrapper for field layout.
API (suggested):

- FormField
  - props: id, label, required?, hint?, error?, children (control slot)
    Behavior:
- label above
- message below (error takes priority over hint)
- sets aria-invalid on child control if possible (or via wrapper guidance)
  Stories:
- With Input (normal)
- With error
- With hint
- Disabled control example

### 4) textarea

API:

- Textarea (disabled + aria-invalid)
  Stories:
- Default
- Disabled
- Invalid

### 5) checkbox

API:

- Checkbox (Radix if available; if not, implement accessible native checkbox)
  Stories:
- Default
- Checked
- Disabled
- With label (composition example)

### 6) switch

API:

- Switch (Radix if available; if not, accessible button role switch)
  Stories:
- Default
- Checked
- Disabled

### 7) radio-group

API:

- RadioGroup + RadioItem (Radix if available)
  Stories:
- Default group
- Disabled item

### 8) select

API:

- Select (Radix Select preferred if available)
- Support: placeholder, disabled
  Stories:
- Default
- Disabled
- Long list

## Storybook rules

- Story title: `UI/<ComponentName>`
- Keep stories compact and visual
- Controls for disabled/required/variant where relevant
- No app imports; use local mock options/text

## Allowed files

- src/shared/ui/\*_/_
- src/shared/ui/index.ts
- src/shared/lib/cn.ts (ONLY if missing)

## Definition of Done

- Components compile with TS
- Stories render without runtime errors
- Consistent spacing and typography per UI system doc
