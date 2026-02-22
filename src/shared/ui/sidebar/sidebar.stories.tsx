import type { Meta, StoryObj } from "@storybook/react";
import { Home, Settings, Users } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "./index";
import { NavLink } from "../nav-link";
import { Button } from "../button";

const meta: Meta<typeof Sidebar> = {
  title: "UI/Sidebar",
  component: Sidebar,
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

function SidebarDemo({ collapsed }: { collapsed?: boolean }) {
  return (
    <div className="flex h-[320px]">
      <Sidebar collapsed={collapsed}>
        <SidebarHeader>
          <span className="font-semibold text-[color:var(--color-ink)]">CRM</span>
        </SidebarHeader>
        <SidebarContent>
          <nav className="flex flex-col gap-0.5" aria-label="Main">
            <NavLink href="#" icon={<Home className="size-4" />} active>
              Dashboard
            </NavLink>
            <NavLink href="#" icon={<Users className="size-4" />}>
              Contacts
            </NavLink>
            <NavLink href="#" icon={<Settings className="size-4" />}>
              Settings
            </NavLink>
          </nav>
        </SidebarContent>
        <SidebarFooter>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            Collapse
          </Button>
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1 bg-[color:var(--color-ink)]/5 p-4">
        <p className="text-sm text-[color:var(--color-ink)]/70">Main content area</p>
      </main>
    </div>
  );
}

export const DefaultExpanded: Story = {
  render: () => <SidebarDemo />,
};

export const Collapsed: Story = {
  render: () => <SidebarDemo collapsed />,
};
