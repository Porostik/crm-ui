import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "./index";

const meta: Meta<typeof Label> = {
  title: "UI/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    required: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Field label",
    htmlFor: "input-id",
  },
};

export const Required: Story = {
  args: {
    children: "Required field",
    htmlFor: "required-id",
    required: true,
  },
};
