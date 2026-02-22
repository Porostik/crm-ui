import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  PageHeader,
  PageHeaderTitle,
  PageHeaderDescription,
  PageHeaderActions,
} from "./index";
import { Button } from "../button";

const meta: Meta<typeof PageHeader> = {
  title: "UI/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  render: () => (
    <PageHeader>
      <PageHeaderTitle>Page title</PageHeaderTitle>
    </PageHeader>
  ),
};

export const WithDescriptionAndActions: Story = {
  render: () => (
    <PageHeader>
      <div className="space-y-1">
        <PageHeaderTitle>Dashboard</PageHeaderTitle>
        <PageHeaderDescription>
          Overview of your team and recent activity.
        </PageHeaderDescription>
      </div>
      <PageHeaderActions>
        <Button size="sm">Export</Button>
        <Button>Add item</Button>
      </PageHeaderActions>
    </PageHeader>
  ),
};

export const LongTitle: Story = {
  render: () => (
    <PageHeader>
      <PageHeaderTitle className="break-words">
        Projects and deliverables for Q1 2025 — planning and tracking
      </PageHeaderTitle>
      <PageHeaderActions>
        <Button size="sm">Edit</Button>
      </PageHeaderActions>
    </PageHeader>
  ),
};

export const Responsive: Story = {
  render: () => (
    <div className="max-w-md rounded border border-[color:var(--color-ink)]/15 p-4">
      <PageHeader>
        <div className="space-y-1 min-w-0">
          <PageHeaderTitle>Narrow viewport</PageHeaderTitle>
          <PageHeaderDescription>
            Actions stack below on small screens.
          </PageHeaderDescription>
        </div>
        <PageHeaderActions>
          <Button variant="outline" size="sm">Cancel</Button>
          <Button size="sm">Save</Button>
        </PageHeaderActions>
      </PageHeader>
    </div>
  ),
};
