import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormField } from "./index";
import { Input } from "../input";
import { Select } from "../select";

const meta: Meta<typeof FormField> = {
  title: "UI/FormField",
  component: FormField,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const WithInput: Story = {
  render: () => (
    <FormField id="email" label="Email" required>
      <Input type="email" placeholder="you@example.com" />
    </FormField>
  ),
};

export const WithError: Story = {
  render: () => (
    <FormField
      id="email-err"
      label="Email"
      required
      error="Please enter a valid email address."
    >
      <Input type="email" placeholder="you@example.com" defaultValue="invalid" />
    </FormField>
  ),
};

export const WithHint: Story = {
  render: () => (
    <FormField
      id="password"
      label="Password"
      hint="At least 8 characters."
    >
      <Input type="password" placeholder="••••••••" />
    </FormField>
  ),
};

export const DisabledControl: Story = {
  render: () => (
    <FormField id="disabled" label="Disabled field" disabled>
      <Input placeholder="Disabled" />
    </FormField>
  ),
};

const selectItems = [
  { value: "a", label: "Option A" },
  { value: "b", label: "Option B" },
  { value: "c", label: "Option C" },
];

export const WithSelect: Story = {
  render: () => (
    <FormField id="country" label="Country" hint="Choose your country.">
      <Select items={selectItems} placeholder="Select…" aria-label="Country" />
    </FormField>
  ),
};
