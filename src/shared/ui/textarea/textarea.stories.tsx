import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./index";
import { Label } from "../label";

const meta: Meta<typeof Textarea> = {
  title: "UI/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    "aria-invalid": { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Enter description…",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled",
    disabled: true,
    defaultValue: "Cannot edit",
  },
};

export const Invalid: Story = {
  args: {
    placeholder: "Required",
    "aria-invalid": true,
    defaultValue: "",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-1">
      <Label htmlFor="textarea-label">Description</Label>
      <Textarea
        id="textarea-label"
        placeholder="Enter description…"
        aria-describedby="textarea-label-hint"
      />
      <p id="textarea-label-hint" className="mt-1 text-sm text-[color:var(--color-ink)]/70">
        Optional helper text below the textarea.
      </p>
    </div>
  ),
};
