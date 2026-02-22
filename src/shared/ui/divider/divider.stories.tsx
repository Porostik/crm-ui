import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "./index";

const meta: Meta<typeof Divider> = {
  title: "UI/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    orientation: { control: "select", options: ["horizontal", "vertical"] },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
  render: (args) => (
    <div className="w-full space-y-2">
      <p className="text-sm text-[color:var(--color-ink)]">Above</p>
      <Divider {...args} />
      <p className="text-sm text-[color:var(--color-ink)]">Below</p>
    </div>
  ),
};

export const VerticalInFlex: Story = {
  render: () => (
    <div className="flex h-8 items-center gap-2">
      <span className="text-sm text-[color:var(--color-ink)]">One</span>
      <Divider orientation="vertical" />
      <span className="text-sm text-[color:var(--color-ink)]">Two</span>
      <Divider orientation="vertical" />
      <span className="text-sm text-[color:var(--color-ink)]">Three</span>
    </div>
  ),
};
