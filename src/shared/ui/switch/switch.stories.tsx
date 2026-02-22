import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./index";

const meta: Meta<typeof Switch> = {
  title: "UI/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithLabelLeft: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <label htmlFor="switch-left" className="cursor-pointer text-sm font-medium text-[color:var(--color-ink)]">
        Enable notifications
      </label>
      <Switch id="switch-left" />
    </div>
  ),
};

export const WithLabelRight: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="switch-right" />
      <label htmlFor="switch-right" className="cursor-pointer text-sm font-medium text-[color:var(--color-ink)]">
        Dark mode
      </label>
    </div>
  ),
};
