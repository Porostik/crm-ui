import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./index";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    "aria-invalid": { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "Disabled value",
  },
};

export const Invalid: Story = {
  args: {
    "aria-invalid": true,
    defaultValue: "Invalid value",
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: "Enter text…",
  },
};

export const WithHelperText: Story = {
  render: () => (
    <div className="space-y-1">
      <label htmlFor="input-helper" className="block text-sm font-medium text-[color:var(--color-ink)]">
        Email
      </label>
      <Input id="input-helper" type="email" placeholder="you@example.com" />
      <p className="text-xs text-[color:var(--color-ink)]/70">
        We will never share your email.
      </p>
    </div>
  ),
};

export const WithLeftAndRightAddon: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-xs">
      <Input leftAddon="https://" placeholder="example.com" />
      <Input rightAddon=".bg" placeholder="company" />
    </div>
  ),
};
