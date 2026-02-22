import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./index";

const meta: Meta<typeof Tabs> = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

function TabsDemo({
  defaultValue = "tab1",
  dense,
}: {
  defaultValue?: string;
  dense?: boolean;
}) {
  const [value, setValue] = useState(defaultValue);
  return (
    <Tabs value={value} onValueChange={setValue}>
      <TabsList dense={dense}>
        <TabsTrigger value="tab1">Overview</TabsTrigger>
        <TabsTrigger value="tab2">Details</TabsTrigger>
        <TabsTrigger value="tab3">Activity</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-sm text-[color:var(--color-ink)]/70">Overview content</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-sm text-[color:var(--color-ink)]/70">Details content</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-sm text-[color:var(--color-ink)]/70">Activity content</p>
      </TabsContent>
    </Tabs>
  );
}

export const Default: Story = {
  render: () => <TabsDemo />,
};

export const WithDisabledTab: Story = {
  render: () => {
    const [value, setValue] = useState("tab1");
    return (
      <Tabs value={value} onValueChange={setValue}>
        <TabsList>
          <TabsTrigger value="tab1">Active</TabsTrigger>
          <TabsTrigger value="tab2" disabled>
            Disabled
          </TabsTrigger>
          <TabsTrigger value="tab3">Third</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">First panel</TabsContent>
        <TabsContent value="tab2">Disabled panel</TabsContent>
        <TabsContent value="tab3">Third panel</TabsContent>
      </Tabs>
    );
  },
};

export const CompactDensity: Story = {
  render: () => <TabsDemo dense />,
};
