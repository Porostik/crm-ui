import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormMessage } from "./index";

const meta: Meta<typeof FormMessage> = {
  title: "UI/FormMessage",
  component: FormMessage,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["helper", "error"] },
  },
};

export default meta;

type Story = StoryObj<typeof FormMessage>;

export const Helper: Story = {
  args: {
    variant: "helper",
    children: "This is helper text below the control.",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "This field is required.",
  },
};
