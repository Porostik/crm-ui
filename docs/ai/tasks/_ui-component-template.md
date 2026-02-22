# UI Component Task Template

## Context to follow

- CLAUDE.md
- docs/ai/ui-system.md

## Global constraints

- Radix-only UI kit
- Tailwind v4 tokens via CSS variables (var(--color-\*))
- CVA for variants/sizes, cn() helper
- forwardRef where relevant, asChild via Radix Slot for interactive primitives
- Folder structure:
  src/shared/ui/<component>/index.tsx
  src/shared/ui/<component>/<component>.stories.tsx
- Update src/shared/ui/index.ts barrel exports
- No new libraries, no unrelated changes

## Required Storybook shape

- title format: UI/<ComponentName>
- include Default + Variants/Sizes/Disabled (+ Loading/WithIcon when relevant)
- args/controls for variant/size/disabled (+ loading when relevant)
