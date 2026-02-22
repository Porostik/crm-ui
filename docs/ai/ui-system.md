# UI System — CRM

## Design Tokens

### Border radius

- small: rounded-md
- medium: rounded-lg
- large: rounded-xl (use rarely)

### Spacing scale

Use Tailwind spacing scale consistently:

- xs: 1
- sm: 2
- md: 4
- lg: 6
- xl: 8

Avoid arbitrary values unless necessary.

### Typography

- Page title: text-2xl font-semibold
- Section title: text-lg font-semibold
- Body text: text-sm
- Secondary text: text-sm text-[color:var(--color-ink)]/70

### Colors

Use neutral base + brand accents.
Primary color: #3D5B81
Secondary color: #EE6B4D
Additional colors: #9BC0D9, #DFFBFC, #293241

Destructive: use semantic red (e.g. text-red-600 / bg-red-50 / border-red-200).
Statuses:

- success → green
- warning → amber/yellow
- error → red
- info → blue

No gradients.

---

## Tailwind v4 tokens usage

Brand colors are available as CSS theme tokens:

- `--color-primary`, `--color-secondary`, `--color-sky`, `--color-surface`, `--color-ink`

Use them via Tailwind arbitrary values:

- `bg-[color:var(--color-primary)]`
- `text-[color:var(--color-ink)]`
- `ring-[color:var(--color-primary)]`
- `border-[color:var(--color-ink)]/15`

---

## Color Roles (how to use the palette)

Palette:

- primary: #3D5B81
- secondary: #EE6B4D
- sky: #9BC0D9
- surface: #DFFBFC
- ink: #293241

Rules:

- Use `primary` for main actions (primary buttons, active navigation item, links, focus ring).
- Use `secondary` for highlights / secondary actions (optional), small accents, promotional CTA (use sparingly).
- Use `surface` as subtle backgrounds for sections/cards when a "tinted" surface is needed.
- Use `sky` for soft accents (info backgrounds / subtle highlights), never for main text.
- Use `ink` for headings / strong text on light backgrounds.

Neutrals (no shadcn):

- Most UI must be neutral, brand colors are accents.
- Default background: white / near-white.
- Primary text: `ink`.
- Muted text: `ink` with opacity (e.g. `text-[color:var(--color-ink)]/70`).
- Borders: neutral with opacity (e.g. `border-[color:var(--color-ink)]/15`).
- Subtle surfaces: `surface` (tinted section background).

Status colors (semantic):

- success: `text-green-700 bg-green-50 border-green-200`
- warning: `text-amber-700 bg-amber-50 border-amber-200`
- error: `text-red-700 bg-red-50 border-red-200`
- info: `text-blue-700 bg-blue-50 border-blue-200`

Do not:

- create gradients
- invent unrelated “brand” colors
- use brand colors for large background areas unless explicitly requested

---

## Color extension rules

- AI may extend the neutral scale (gray-50..gray-900) if needed for borders/hover/disabled.
- AI may add shades of existing brand colors using naming like `--color-primary-600`, `--color-primary-700`.
- All new colors must follow existing naming conventions and be justified by a UI need (hover/active/disabled/border).

---

## Implementation rules (Radix-only UI kit)

- Use Radix UI primitives.
- Use `class-variance-authority` (CVA) for variants and sizes.
- Use `cn()` helper (clsx + tailwind-merge) for className composition.
- Components must use `forwardRef` where relevant.
- Support `asChild` via `@radix-ui/react-slot` for interactive primitives (Button, etc.).
- No inline styles. Tailwind only.
- Named exports only.
- Do not add new libraries unless explicitly requested.

---

## Component API rules

- Keep props consistent across primitives:
  - `variant`, `size`, `className`, `disabled`
- For async-like UI states: use `loading?: boolean` (disables + shows spinner).
- Don’t invent new variants unless requested.

---

## File structure rules (UI components)

For each UI component, use a folder structure:
src/shared/ui/<component>

- index.tsx
- <component>.stories.tsx

Rules:

- The component implementation lives in `index.tsx`.
- Storybook stories live in `<component>.stories.tsx`.
- Export the component from `src/shared/ui/index.ts` (barrel) for stable imports.

Example:
src/shared/ui/button/

- index.tsx
- button.stories.tsx

---

## Storybook rules

- Every UI component must have a Storybook story.
- Stories must include:
  - Default
  - Variants (if component has variants)
  - Sizes (if component has sizes)
  - Disabled state
  - With icon (when relevant)
- Use args/controls for `variant`, `size`, `disabled`, etc.
- Story titles use format: `UI/<ComponentName>`
- Stories should be visual and compact (no huge pages).
- Do not import app routes or business logic.

---

## Layout Rules

### Page Layout

Structure:

- PageHeader (title + actions)
- Content section (cards or table)
- Optional filter panel above table

Use consistent vertical spacing between sections (space-y-4).

---

## Table Pattern

Tables must:

- Support sorting
- Have hover state
- Include row actions dropdown
- Have empty state component
- Have loading skeleton
- Have pagination footer

---

## Form Pattern

Forms must:

- Use React Hook Form + Zod
- Have label above input
- Show validation message below input
- Submit button aligned right
- Disabled state while submitting
