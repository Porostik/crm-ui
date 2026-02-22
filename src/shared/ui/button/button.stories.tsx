import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "ghost", "link", "destructive"],
    },
    size: { control: "select", options: ["sm", "md", "lg", "icon"] },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    asChild: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Icon only">
        <span className="text-lg">⊕</span>
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading",
    loading: true,
  },
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button>
        <span aria-hidden>→</span>
        Next
      </Button>
      <Button variant="outline">
        <span aria-hidden>←</span>
        Back
      </Button>
    </div>
  ),
};
