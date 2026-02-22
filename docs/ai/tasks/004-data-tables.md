# Task 004 — Data Table ecosystem (CRM core)

## Read first

- CLAUDE.md
- docs/ai/ui-system.md (if exists)
- AI_CONTEXT.md (if exists)

## Goal

Build the core table ecosystem components:

- DataTable (TanStack Table wrapper)
- TableToolbar (search + filters slot)
- ColumnVisibilityDropdown
- Pagination
- RowActionsDropdown
- EmptyState
- TableSkeleton

These must be reusable primitives for multiple CRM lists.

## Preconditions (must verify before coding)

1. Check if `@tanstack/react-table` is installed.
2. Check if Radix dropdown/menu primitives are available OR implement menus without Radix (ask if missing).
   If any required dependency is missing → STOP and ask before adding.

## Hard rules

- Do NOT refactor unrelated files.
- Do NOT touch routes/pages/business logic.
- Keep DataTable presentational; table logic may live inside the component but no domain knowledge.
- Named exports only.
- Tailwind v4 tokens via CSS variables, no inline styles.

## File structure (required)

Each component:
src/shared/ui/<component>/
index.tsx
<component>.stories.tsx

Update barrel:
src/shared/ui/index.ts

## Component specs

### 1) EmptyState

Purpose: shared empty state for lists.
Props:

- title: string
- description?: string
- actionLabel?: string
- onAction?: () => void
  Stories:
- Default
- With action button

### 2) TableSkeleton

Purpose: loading state for tables.
Props:

- rows?: number (default 8)
- columns?: number (default 5)
  Stories:
- Default
- Dense vs normal (if you support density)

### 3) Pagination

Purpose: reusable pagination footer.
Props (minimal):

- pageIndex: number
- pageSize: number
- pageCount: number
- canPreviousPage: boolean
- canNextPage: boolean
- onPageChange: (pageIndex: number) => void
- onPageSizeChange?: (pageSize: number) => void
  Stories:
- Default
- First page / last page states
- With page size selector (if implemented)

### 4) RowActionsDropdown

Purpose: row actions menu.
Props:

- actions: { label: string; onSelect: () => void; destructive?: boolean; disabled?: boolean }[]
  Stories:
- Default (3 actions)
- With destructive action
- With disabled action

### 5) ColumnVisibilityDropdown

Purpose: toggle columns visibility (TanStack integration).
Props:

- columns: { id: string; label: string; isVisible: boolean; toggle: () => void }[]
  Stories:
- Default with 6 columns

### 6) TableToolbar

Purpose: consistent toolbar above tables.
Slots/props:

- left: search input area (optional)
- right: actions area (optional)
  Stories:
- Default (search + actions)
- Minimal (actions only)

### 7) DataTable

Purpose: wrapper around TanStack Table that provides:

- header row
- body rows with hover
- empty state
- loading skeleton
- pagination slot/footer
- row actions column integration (optional)

Requirements:

- Sorting support (at least via TanStack state + clickable headers)
- Hover row state
- Empty state shown when no rows
- Loading state uses TableSkeleton
- Row actions cell uses RowActionsDropdown when provided

API (suggested minimal):

- DataTable<T>
  - columns
  - data
  - state: { isLoading?: boolean }
  - empty: { title, description?, actionLabel?, onAction? }
  - renderRowActions?: (row: T) => actions[]
  - onSortingChange? / sortingState? (or internal)
    Stories:
- Default with mock data (10 rows)
- Loading
- Empty
- With sorting
- With row actions
- With column visibility dropdown + toolbar (compose existing components)

## Storybook rules

- Story title: `UI/<ComponentName>`
- Stories must be compact and focus on one concept
- Use local mock data inside stories (no app imports)
- Ensure all required UI states exist (loading/empty)

## Allowed files

- src/shared/ui/\*_/_
- src/shared/ui/index.ts
- src/shared/lib/cn.ts (ONLY if missing)

## Definition of Done

- TypeScript passes
- Stories render without runtime errors
- Components are reusable and match CRM medium-density style
