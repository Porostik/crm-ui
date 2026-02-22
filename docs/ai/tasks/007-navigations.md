# Task 005 — Navigation & App Shell (CRM)

## Read first

- CLAUDE.md
- docs/ai/ui-system.md (if exists)
- AI_CONTEXT.md (if exists)

## Goal

Implement navigation primitives and app shell building blocks for CRM:

- Sidebar (+ items, collapsed)
- Topbar
- Breadcrumbs
- Tabs
- UserMenu
- NavLink (active state)

No routing integration in this task (pure UI). Stories should demonstrate states.

## Hard rules

- Do NOT touch app routing/pages/business logic.
- Do NOT refactor unrelated files.
- Named exports only.
- Tailwind v4 tokens via CSS vars, no inline styles.
- Accessibility: keyboard nav, focus styles, aria labels.

## File structure (required)

Each component:
src/shared/ui/<component>/
index.tsx
<component>.stories.tsx

Update barrel:
src/shared/ui/index.ts

## Components spec

### 1) nav-link

Purpose: consistent link styling with active state (for sidebar/topbar links).
API:

- NavLink (props: active?: boolean, disabled?: boolean, icon?: ReactNode, children)
  Rules:
- Active uses primary accent (but not full background fill)
  Stories:
- Default
- Active
- With icon
- Disabled

### 2) sidebar

Purpose: primary navigation container.
API:

- Sidebar (props: collapsed?: boolean)
- SidebarHeader (slot)
- SidebarContent
- SidebarFooter
  Behavior:
- Collapsed mode reduces width and hides text (icons only)
- Items remain keyboard focusable
  Stories:
- Default expanded
- Collapsed

### 3) sidebar-item

Purpose: one navigation item, uses NavLink styles.
API:

- SidebarItem (props: label, icon, active?, badge?: string|number, onClick? or href?)
  Note:
- Do not bind to router. Support `asChild` or `href` optional; if unclear, implement as button + optional `asChild`.
  Stories:
- Default
- Active
- With badge
- Collapsed sidebar showcase (compose with Sidebar)

### 4) topbar

Purpose: top area for global actions/search/user menu.
API:

- Topbar
- TopbarLeft
- TopbarCenter
- TopbarRight
  Stories:
- Default with title + actions
- With search slot in center

### 5) breadcrumbs

Purpose: show current location.
API:

- Breadcrumbs (items: { label: string; active?: boolean; onClick?: () => void }[])
  Stories:
- 2 levels
- 3 levels
- Long label wrapping

### 6) tabs

Purpose: tabs navigation for sub-sections.
API:

- Tabs (value, onValueChange)
- TabsList
- TabsTrigger
- TabsContent (optional; can be presentational)
  Stories:
- Default (3 tabs)
- With disabled tab
- Compact density

### 7) user-menu

Purpose: avatar/button that opens dropdown with actions.
Precondition:

- If Radix dropdown/menu is not available, STOP and ask before adding.
  API:
- UserMenu (props: name, email?, avatarFallback?)
  Stories:
- Default
- Long name/email

## Storybook rules

- Story title: `UI/<ComponentName>`
- Keep stories compact and visual
- Show states: active/hover/focus, collapsed, long labels

## Allowed files

- src/shared/ui/\*_/_
- src/shared/ui/index.ts
- src/shared/lib/cn.ts (ONLY if missing)

## Definition of Done

- Components compile with TS
- Stories render without errors
- Visual style matches "professional, medium density"
