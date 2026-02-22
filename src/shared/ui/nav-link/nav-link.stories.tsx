import type { Meta, StoryObj } from "@storybook/react";
import { Home, Settings } from "lucide-react";
import { NavLink } from "./index";

const meta: Meta<typeof NavLink> = {
  title: "UI/NavLink",
  component: NavLink,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
  args: {
    children: "Dashboard",
    href: "#",
  },
};

export const Active: Story = {
  args: {
    children: "Dashboard",
    href: "#",
    active: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: "Dashboard",
    href: "#",
    icon: <Home className="size-4" />,
  },
};

export const ActiveWithIcon: Story = {
  args: {
    children: "Settings",
    href: "#",
    active: true,
    icon: <Settings className="size-4" />,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled link",
    href: "#",
    disabled: true,
  },
};

export const DisabledWithIcon: Story = {
  args: {
    children: "Disabled",
    href: "#",
    disabled: true,
    icon: <Home className="size-4" />,
  },
};
