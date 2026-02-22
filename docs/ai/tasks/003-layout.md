# Task 003 — Layout primitives (Foundation)

## Read first

- CLAUDE.md
- docs/ai/ui-system.md (if exists)
- AI_CONTEXT.md (if exists)

## Goal

Implement layout primitives that define page structure for the CRM UI kit:

- PageHeader
- Section
- Card
- Divider
- Stack

This is UI-only (presentational). No routing, no business logic.

## Hard rules

- Do NOT refactor unrelated files.
- Do NOT touch app routes/pages.
- Do NOT add new dependencies unless necessary. If missing, STOP and ask.
- Named exports only.
- Tailwind v4 tokens via CSS variables (var(--color-\*)), no inline styles.
- Keep components small and composable.

## File structure (required)

Each component:
src/shared/ui/<component>/
index.tsx
<component>.stories.tsx

Update barrel:
src/shared/ui/index.ts

## Components spec

### 1) PageHeader

Purpose: consistent page top section (title + optional description + actions).
API:

- PageHeader
- PageHeaderTitle
- PageHeaderDescription
- PageHeaderActions
  Behavior:
- Align actions to the right on desktop, stack on small screens.
  Stories:
- Default (title only)
- With description + actions
- Long title (wrap)
- Responsive (narrow viewport friendly)

### 2) Section

Purpose: consistent spacing for page sections.
API:

- Section (wrapper)
- SectionHeader (optional)
- SectionTitle
- SectionDescription
- SectionContent
  Stories:
- Default
- With header
- Multiple sections stacked (shows spacing rhythm)

### 3) Card

Purpose: neutral container for blocks.
API:

- Card
- CardHeader
- CardTitle
- CardDescription
- CardContent
- CardFooter
  Stories:
- Default
- With header/footer actions
- Compact (denser spacing)

### 4) Divider

Purpose: horizontal/vertical separator.
API:

- Divider (props: orientation?: "horizontal" | "vertical")
  Stories:
- Horizontal
- Vertical inside a small flex layout

### 5) Stack

Purpose: spacing wrapper to avoid ad-hoc `space-y-*` all over.
API:

- Stack (props: gap?: "sm" | "md" | "lg", direction?: "vertical" | "horizontal", align?, wrap?)
  Rules:
- Default vertical + gap md
- Uses Tailwind spacing scale (no arbitrary values)
  Stories:
- Vertical sm/md/lg
- Horizontal md with wrap

## Storybook rules

For each component:

- Story title: `UI/<ComponentName>`
- Keep stories compact and visual
- Use controls where relevant (gap, orientation, etc.)
- No imports from app routes or business logic

## Allowed files

- src/shared/ui/\*_/_
- src/shared/ui/index.ts
- src/shared/lib/cn.ts (ONLY if missing)

## Definition of Done

- Components compile with TypeScript
- Stories render without errors
- Styling matches "professional, medium density" CRM look
