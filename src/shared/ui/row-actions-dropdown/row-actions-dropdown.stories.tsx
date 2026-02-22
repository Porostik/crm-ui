import type { Meta, StoryObj } from "@storybook/react-vite";
import { RowActionsDropdown } from "./index";

const meta: Meta<typeof RowActionsDropdown> = {
  title: "UI/RowActionsDropdown",
  component: RowActionsDropdown,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RowActionsDropdown>;

export const Default: Story = {
  args: {
    actions: [
      { label: "Edit", onSelect: () => {} },
      { label: "Duplicate", onSelect: () => {} },
      { label: "View details", onSelect: () => {} },
    ],
  },
};

export const WithDestructiveAction: Story = {
  args: {
    actions: [
      { label: "Edit", onSelect: () => {} },
      { label: "Duplicate", onSelect: () => {} },
      { label: "Delete", onSelect: () => {}, destructive: true },
    ],
  },
};

export const WithDisabledAction: Story = {
  args: {
    actions: [
      { label: "Edit", onSelect: () => {} },
      { label: "Archive", onSelect: () => {}, disabled: true },
      { label: "Delete", onSelect: () => {}, destructive: true },
    ],
  },
};
