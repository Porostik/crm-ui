import type { Meta, StoryObj } from "@storybook/react-vite";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "./index";
import { Button } from "../button";

const meta: Meta<typeof Tooltip> = {
  title: "UI/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <TooltipProvider delayDuration={300}>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Tooltip content</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const OnIconButton: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Help">
          ?
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Get help</p>
      </TooltipContent>
    </Tooltip>
  ),
};
