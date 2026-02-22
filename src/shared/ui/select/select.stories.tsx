import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./index";

const items = [
  { value: "a", label: "Option A" },
  { value: "b", label: "Option B" },
  { value: "c", label: "Option C" },
];

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "icon"] },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
  args: {
    items,
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    placeholder: "Choose one…",
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: "b",
    placeholder: "Choose one…",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Select items={items} size="sm" placeholder="Small" />
      <Select items={items} size="md" placeholder="Medium" />
      <Select items={items} size="lg" placeholder="Large" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    placeholder: "Loading…",
    loading: true,
  },
};
