import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "./index";

const meta: Meta<typeof Stack> = {
  title: "UI/Stack",
  component: Stack,
  tags: ["autodocs"],
  argTypes: {
    gap: { control: "select", options: ["sm", "md", "lg"] },
    direction: { control: "select", options: ["vertical", "horizontal"] },
    align: { control: "select", options: ["start", "center", "end", "stretch"] },
    wrap: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Stack>;

const Block = ({ label }: { label: string }) => (
  <div className="rounded border border-[color:var(--color-ink)]/15 bg-[color:var(--color-ink)]/5 px-2 py-1 text-sm text-[color:var(--color-ink)]">
    {label}
  </div>
);

export const VerticalGaps: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-xs font-medium text-[color:var(--color-ink)]/70">gap sm</p>
        <Stack gap="sm">
          <Block label="A" />
          <Block label="B" />
          <Block label="C" />
        </Stack>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium text-[color:var(--color-ink)]/70">gap md</p>
        <Stack gap="md">
          <Block label="A" />
          <Block label="B" />
          <Block label="C" />
        </Stack>
      </div>
      <div>
        <p className="mb-2 text-xs font-medium text-[color:var(--color-ink)]/70">gap lg</p>
        <Stack gap="lg">
          <Block label="A" />
          <Block label="B" />
          <Block label="C" />
        </Stack>
      </div>
    </div>
  ),
};

export const HorizontalWithWrap: Story = {
  render: () => (
    <Stack direction="horizontal" gap="md" wrap className="max-w-xs">
      <Block label="One" />
      <Block label="Two" />
      <Block label="Three" />
      <Block label="Four" />
      <Block label="Five" />
    </Stack>
  ),
};
