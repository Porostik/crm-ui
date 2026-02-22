# Batch: UI primitives v2

Generate the following components following the template rules:

1. Select

Create select UI component using radix-ui. It should take list of item on entry and should handle change event on click.

- variants: default, disabled
- sizes: sm, md, lg, icon
- props: loading?, asChild?
- includes spinner for loading

2. Combobox

Create combobox UI component using radix-ui.
It should take list of item on entry and should handle change event on click and should have function of searching by items.
For Select Component use existed select component, for input use existed input component.

- variants: default, disabled
- sizes: sm, md, lg, icon
- props: loading?, asChild?
- includes spinner for loading

3. Avatar

Create avatar component. Just small box with background and letters inside. Color of background my by from main color scheme and based on "avatar letter".

- sizes: sm, md, lg, icon

4. Spinner (utility)

- simple spinner component
- stories: sizes sm/md/lg

Allowed files:

- src/shared/ui/select/\*
- src/shared/ui/combobox/\*
- src/shared/ui/avatar/\*
- src/shared/ui/index.ts
