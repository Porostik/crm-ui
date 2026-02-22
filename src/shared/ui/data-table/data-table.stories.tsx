import * as React from "react";
import type { ColumnDef } from "@tanstack/react-table";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataTable } from "./index";
import { TableToolbar } from "../table-toolbar";
import { Input } from "../input";
import { Pagination } from "../pagination";
import { ColumnVisibilityDropdown } from "../column-visibility-dropdown";
import { Button } from "../button";

type Person = {
  id: string;
  name: string;
  email: string;
  role: string;
};

const mockData: Person[] = Array.from({ length: 10 }, (_, i) => ({
  id: `id-${i + 1}`,
  name: `Person ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 3 === 0 ? "Admin" : i % 3 === 1 ? "Editor" : "Viewer",
}));

const columns: ColumnDef<Person, unknown>[] = [
  { id: "name", accessorKey: "name", header: "Name", enableSorting: true },
  { id: "email", accessorKey: "email", header: "Email", enableSorting: true },
  { id: "role", accessorKey: "role", header: "Role", enableSorting: true },
];

const meta: Meta<typeof DataTable<Person>> = {
  title: "UI/DataTable",
  component: DataTable as React.ComponentType<React.ComponentProps<typeof DataTable<Person>>>,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DataTable<Person>>;

export const Default: Story = {
  args: {
    columns,
    data: mockData,
  },
};

export const Loading: Story = {
  args: {
    columns,
    data: [],
    state: { isLoading: true },
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    empty: {
      title: "No people yet",
      description: "Add your first team member to get started.",
      actionLabel: "Add person",
      onAction: () => {},
    },
  },
};

export const WithSorting: Story = {
  args: {
    columns,
    data: [...mockData],
  },
};

export const WithRowActions: Story = {
  args: {
    columns,
    data: mockData,
    renderRowActions: () => [
      { label: "Edit", onSelect: () => {} },
      { label: "Duplicate", onSelect: () => {} },
      { label: "Delete", onSelect: () => {}, destructive: true },
    ],
  },
};

export const WithToolbarAndPagination: Story = {
  render: function WithToolbarAndPaginationStory() {
    const [pageIndex, setPageIndex] = React.useState(0);
    const pageSize = 5;
    const pageCount = Math.ceil(mockData.length / pageSize) || 1;
    const paginatedData = mockData.slice(
      pageIndex * pageSize,
      (pageIndex + 1) * pageSize
    );

    const [colVis, setColVis] = React.useState({ name: true, email: true, role: true });
    const columnItems = [
      { id: "name", label: "Name", isVisible: colVis.name, toggle: () => setColVis((v) => ({ ...v, name: !v.name })) },
      { id: "email", label: "Email", isVisible: colVis.email, toggle: () => setColVis((v) => ({ ...v, email: !v.email })) },
      { id: "role", label: "Role", isVisible: colVis.role, toggle: () => setColVis((v) => ({ ...v, role: !v.role })) },
    ];

    return (
      <div className="space-y-2">
        <TableToolbar
          left={<Input placeholder="Search…" className="max-w-xs" />}
          right={
            <>
              <ColumnVisibilityDropdown columns={columnItems} />
              <Button size="sm">Add</Button>
            </>
          }
        />
        <DataTable<Person>
          columns={columns}
          data={paginatedData}
          footer={
            <Pagination
              pageIndex={pageIndex}
              pageSize={pageSize}
              pageCount={pageCount}
              canPreviousPage={pageIndex > 0}
              canNextPage={pageIndex < pageCount - 1}
              onPageChange={setPageIndex}
              onPageSizeChange={() => {}}
            />
          }
        />
      </div>
    );
  },
};
