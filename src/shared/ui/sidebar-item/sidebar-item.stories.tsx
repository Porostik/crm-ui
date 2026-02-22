import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Home, Settings, Users } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "../sidebar";
import { SidebarItem } from "./index";
import { Button } from "../button";

const meta: Meta<typeof SidebarItem> = {
  title: "UI/SidebarItem",
  component: SidebarItem,
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<typeof SidebarItem>;

export const Default: Story = {
  render: () => (
    <nav className="flex w-56 flex-col gap-0.5 rounded-md border border-[color:var(--color-ink)]/15 bg-white p-2">
      <SidebarItem label="Dashboard" icon={<Home className="size-4" />} href="#" />
      <SidebarItem label="Contacts" icon={<Users className="size-4" />} href="#" />
      <SidebarItem label="Settings" icon={<Settings className="size-4" />} href="#" />
    </nav>
  ),
};

export const Active: Story = {
  render: () => (
    <nav className="flex w-56 flex-col gap-0.5 rounded-md border border-[color:var(--color-ink)]/15 bg-white p-2">
      <SidebarItem label="Dashboard" icon={<Home className="size-4" />} active href="#" />
      <SidebarItem label="Contacts" icon={<Users className="size-4" />} href="#" />
    </nav>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <nav className="flex w-56 flex-col gap-0.5 rounded-md border border-[color:var(--color-ink)]/15 bg-white p-2">
      <SidebarItem label="Inbox" icon={<Home className="size-4" />} badge={12} href="#" />
      <SidebarItem label="Reports" icon={<Users className="size-4" />} badge="New" href="#" />
    </nav>
  ),
};

function CollapsedShowcase() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex h-[320px]">
      <Sidebar collapsed={collapsed}>
        <SidebarHeader>
          <span className="truncate font-semibold text-[color:var(--color-ink)]">CRM</span>
        </SidebarHeader>
        <SidebarContent>
          <nav className="flex flex-col gap-0.5" aria-label="Main">
            <SidebarItem label="Dashboard" icon={<Home className="size-4" />} active href="#" />
            <SidebarItem label="Contacts" icon={<Users className="size-4" />} badge={3} href="#" />
            <SidebarItem label="Settings" icon={<Settings className="size-4" />} href="#" />
          </nav>
        </SidebarContent>
        <SidebarFooter>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start"
            onClick={() => setCollapsed((c) => !c)}
          >
            {collapsed ? "Expand" : "Collapse"}
          </Button>
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1 bg-[color:var(--color-ink)]/5 p-4">
        <p className="text-sm text-[color:var(--color-ink)]/70">Collapsed sidebar showcase</p>
      </main>
    </div>
  );
}

export const CollapsedSidebarShowcase: Story = {
  render: () => <CollapsedShowcase />,
};
