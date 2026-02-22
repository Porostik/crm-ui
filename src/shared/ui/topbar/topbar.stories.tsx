import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "lucide-react";
import { Topbar, TopbarLeft, TopbarCenter, TopbarRight } from "./index";
import { Button } from "../button";
import { Input } from "../input";
import { UserMenu } from "../user-menu";

const meta: Meta<typeof Topbar> = {
  title: "UI/Topbar",
  component: Topbar,
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<typeof Topbar>;

export const DefaultWithTitleAndActions: Story = {
  render: () => (
    <Topbar>
      <TopbarLeft>
        <h1 className="text-lg font-semibold text-[color:var(--color-ink)]">Contacts</h1>
      </TopbarLeft>
      <TopbarRight>
        <Button variant="outline" size="sm">
          Export
        </Button>
        <UserMenu name="Alex Ivanov" email="alex@example.com" />
      </TopbarRight>
    </Topbar>
  ),
};

export const WithSearchSlotInCenter: Story = {
  render: () => (
    <Topbar>
      <TopbarLeft>
        <span className="text-sm font-medium text-[color:var(--color-ink)]">CRM</span>
      </TopbarLeft>
      <TopbarCenter>
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[color:var(--color-ink)]/50" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-9"
            aria-label="Search"
          />
        </div>
      </TopbarCenter>
      <TopbarRight>
        <UserMenu name="Maria Petrova" email="maria@company.bg" />
      </TopbarRight>
    </Topbar>
  ),
};
