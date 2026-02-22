import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmptyState } from "./index";

const meta: Meta<typeof EmptyState> = {
  title: "UI/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    actionLabel: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: "No items yet",
  },
};

export const WithActionButton: Story = {
  args: {
    title: "No items yet",
    description: "Get started by creating your first item.",
    actionLabel: "Add item",
    onAction: () => {},
  },
};
