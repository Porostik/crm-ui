import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popover, PopoverTrigger, PopoverContent } from "./index";
import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";

const meta: Meta<typeof Popover> = {
  title: "UI/Popover",
  component: Popover,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className="text-sm text-[color:var(--color-ink)]">
          Small content or menu items go here.
        </p>
      </PopoverContent>
    </Popover>
  ),
};

export const WithFormControls: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Filter</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-3">
          <div className="space-y-1">
            <Label htmlFor="filter-name">Name</Label>
            <Input id="filter-name" placeholder="Search…" className="h-8" />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" size="sm">Reset</Button>
            <Button size="sm">Apply</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
