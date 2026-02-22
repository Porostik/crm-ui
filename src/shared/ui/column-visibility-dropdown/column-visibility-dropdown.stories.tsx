import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColumnVisibilityDropdown } from "./index";

const meta: Meta<typeof ColumnVisibilityDropdown> = {
  title: "UI/ColumnVisibilityDropdown",
  component: ColumnVisibilityDropdown,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ColumnVisibilityDropdown>;

function useColumnVisibility(initial: Record<string, boolean>) {
  const [vis, setVis] = React.useState(initial);
  return Object.keys(initial).map((id) => ({
    id,
    label: id.charAt(0).toUpperCase() + id.slice(1).replace(/([A-Z])/g, " $1"),
    isVisible: vis[id] ?? true,
    toggle: () => setVis((v) => ({ ...v, [id]: !v[id] })),
  }));
}

export const Default: Story = {
  render: function DefaultStory() {
    const columns = useColumnVisibility({
      name: true,
      email: true,
      role: true,
      status: true,
      createdAt: true,
      actions: true,
    });
    return <ColumnVisibilityDropdown columns={columns} />;
  },
};
