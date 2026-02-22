import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./index";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "icon"] },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    name: "John Doe",
  },
};

export const ByLetter: Story = {
  args: {
    letter: "A",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="Alice" size="sm" />
      <Avatar name="Bob Smith" size="md" />
      <Avatar name="Carol" size="lg" />
      <Avatar letter="Z" size="icon" />
    </div>
  ),
};

export const ColorByLetter: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Avatar letter="A" />
      <Avatar letter="B" />
      <Avatar letter="C" />
      <Avatar letter="D" />
      <Avatar name="John Doe" />
      <Avatar name="Jane" />
    </div>
  ),
};
