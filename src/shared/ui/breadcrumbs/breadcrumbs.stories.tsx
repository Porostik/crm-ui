import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "./index";

const meta: Meta<typeof Breadcrumbs> = {
  title: "UI/Breadcrumbs",
  component: Breadcrumbs,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const TwoLevels: Story = {
  args: {
    items: [
      { label: "Home", onClick: () => {} },
      { label: "Contacts", active: true },
    ],
  },
};

export const ThreeLevels: Story = {
  args: {
    items: [
      { label: "Home", onClick: () => {} },
      { label: "Contacts", onClick: () => {} },
      { label: "John Doe", active: true },
    ],
  },
};

export const LongLabelWrapping: Story = {
  args: {
    items: [
      { label: "Home", onClick: () => {} },
      { label: "Deals", onClick: () => {} },
      {
        label: "Very long deal name that might wrap or truncate in narrow containers",
        active: true,
      },
    ],
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
};
