# AI Context — CRM (Bulgaria)

## Product

We are building a CRM for small and mid businesses in Bulgaria.
The UI should feel professional and trustworthy, medium density, not “government style” and not “playful consumer app”.

## Current focus (next 2–4 weeks)

- Establish a consistent UI kit (tokens + base components)
- Storybook components with all variants of UI state.

## Tech stack

- React
- TypeScript
- TansTack Router
- Tailwind CSS
- Radix-based
- React Hook Form + Zod (for forms/validation) // if not used yet, ask before adding
- TanStack Table (for data tables) // if not used yet, ask before adding
- Storybook
- Lucide-react - form icons
- Framer-motion - animations

## Codebase conventions

- Components:
  - `src/shared/ui/*` for base UI primitives (button, input, badge, dialog, dropdown, etc.)
- Pages:
  - `src/view/*` (TansTack Router)
- Prefer named exports for all components.
- Prefer composition over large monolithic components.
- Keep UI components presentational; business logic goes into hooks/services.

## UI principles

- Medium density: compact but not cramped.
- Clear hierarchy: headings, sections, spacing scale.
- Tables are first-class: sorting, filters, pagination, row actions.
- Strong status visibility: badges, subtle highlights.
- Minimal decoration: no heavy gradients, no glassmorphism, no “rounded toy” look.
- Accessibility: keyboard navigable, focus styles, readable contrast.

## Required UI states (always include)

For every screen/component that loads data:

- Loading state (skeleton or spinner)
- Empty state (with clear CTA)
- Error state (message + retry action if applicable)

## Workflow rules for AI

1. Before implementing large changes, produce a plan:
   - Files to create/modify
   - Component tree
   - Props/types
   - UI states
2. Only after approval or when explicitly asked, generate code.
3. Do not refactor unrelated files.
4. If a library is not already in the project, ask before adding it.
5. When modifying files, keep changes minimal and consistent with existing patterns.

## Definition of Done (DoD)

- TypeScript: no type errors
- ESLint passes
- Components are reusable and consistent with the UI principles
- All required states implemented (loading/empty/error)
- No inline styles (use Tailwind / existing utilities)
