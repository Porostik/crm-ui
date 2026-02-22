import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { TableToolbar } from "./index";
import { Input } from "../input";
import { Button } from "../button";
import { ColumnVisibilityDropdown } from "../column-visibility-dropdown";

const meta: Meta<typeof TableToolbar> = {
  title: "UI/TableToolbar",
  component: TableToolbar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TableToolbar>;

function ColumnVisibilityDemo() {
  const [vis, setVis] = React.useState({
    name: true,
    email: true,
    role: true,
  });
  const columns = [
    { id: "name", label: "Name", isVisible: vis.name, toggle: () => setVis((v) => ({ ...v, name: !v.name })) },
    { id: "email", label: "Email", isVisible: vis.email, toggle: () => setVis((v) => ({ ...v, email: !v.email })) },
    { id: "role", label: "Role", isVisible: vis.role, toggle: () => setVis((v) => ({ ...v, role: !v.role })) },
  ];
  return <ColumnVisibilityDropdown columns={columns} />;
}

export const Default: Story = {
  render: () => (
    <TableToolbar
      left={
        <Input placeholder="Search…" className="max-w-xs" />
      }
      right={
        <>
          <ColumnVisibilityDemo />
          <Button size="sm">Add</Button>
        </>
      }
    />
  ),
};

export const Minimal: Story = {
  render: () => (
    <TableToolbar
      right={
        <>
          <Button variant="outline" size="sm">Filter</Button>
          <Button size="sm">Export</Button>
        </>
      }
    />
  ),
};
