import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "./index";
import { Button } from "../button";

const meta: Meta<typeof Drawer> = {
  title: "UI/Drawer",
  component: Drawer,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const DefaultRight: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open drawer</Button>
      </DrawerTrigger>
      <DrawerContent side="right">
        <DrawerHeader>
          <DrawerTitle>Drawer title</DrawerTitle>
          <DrawerDescription>
            Optional description for the drawer panel.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto p-4 text-sm text-[color:var(--color-ink)]">
          <p>Drawer body content. Use for filters, settings, or secondary actions.</p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
          <Button>Apply</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const MobileFriendly: Story = {
  render: () => (
    <div className="max-w-[360px] rounded border border-[color:var(--color-ink)]/15 p-4">
      <p className="mb-2 text-sm text-[color:var(--color-ink)]/70">Narrow viewport simulation</p>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="w-full">Open panel</Button>
        </DrawerTrigger>
        <DrawerContent side="right" className="max-w-[100vw] sm:max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Filters</DrawerTitle>
            <DrawerDescription>Adjust your search criteria.</DrawerDescription>
          </DrawerHeader>
          <div className="flex-1 overflow-y-auto p-4 text-sm text-[color:var(--color-ink)]">
            <p>Filter form or options go here. Full height on mobile.</p>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  ),
};
