import type { Meta, StoryObj } from "@storybook/react";
import { UserMenu } from "./index";

const meta: Meta<typeof UserMenu> = {
  title: "UI/UserMenu",
  component: UserMenu,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof UserMenu>;

export const Default: Story = {
  args: {
    name: "Alex Ivanov",
    email: "alex@example.com",
  },
};

export const LongNameAndEmail: Story = {
  args: {
    name: "Maria Georgieva Petrova",
    email: "maria.georgieva.petrova@company-bulgaria.bg",
  },
};

export const WithAvatarFallback: Story = {
  args: {
    name: "John Doe",
    email: "john@example.com",
    avatarFallback: "J",
  },
};
