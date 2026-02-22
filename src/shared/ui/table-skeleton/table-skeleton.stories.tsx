import type { Meta, StoryObj } from "@storybook/react-vite";
import { TableSkeleton } from "./index";

const meta: Meta<typeof TableSkeleton> = {
  title: "UI/TableSkeleton",
  component: TableSkeleton,
  tags: ["autodocs"],
  argTypes: {
    rows: { control: "number" },
    columns: { control: "number" },
    dense: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof TableSkeleton>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div className="overflow-hidden rounded-lg border border-[color:var(--color-ink)]/15">
      <TableSkeleton {...args} />
    </div>
  ),
};

export const DenseVsNormal: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-xs font-medium text-[color:var(--color-ink)]/70">Normal</p>
        <div className="overflow-hidden rounded-lg border border-[color:var(--color-ink)]/15">
          <TableSkeleton rows={4} columns={4} />
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium text-[color:var(--color-ink)]/70">Dense</p>
        <div className="overflow-hidden rounded-lg border border-[color:var(--color-ink)]/15">
          <TableSkeleton rows={4} columns={4} dense />
        </div>
      </div>
    </div>
  ),
};
