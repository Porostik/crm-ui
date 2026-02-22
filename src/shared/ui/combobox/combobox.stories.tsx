import type { Meta, StoryObj } from "@storybook/react-vite";
import { Combobox } from "./index";

const items = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "angular", label: "Angular" },
  { value: "solid", label: "Solid" },
];

const meta: Meta<typeof Combobox> = {
  title: "UI/Combobox",
  component: Combobox,
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

type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  args: {
    placeholder: "Search frameworks…",
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: "react",
    placeholder: "Search…",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-xs">
      <Combobox items={items} size="sm" placeholder="Small" />
      <Combobox items={items} size="md" placeholder="Medium" />
      <Combobox items={items} size="lg" placeholder="Large" />
      <Combobox items={items} size="icon" placeholder="Choose" aria-label="Choose framework" />
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
