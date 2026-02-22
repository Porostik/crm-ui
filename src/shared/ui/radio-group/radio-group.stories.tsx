import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup, RadioItem } from "./index";

const meta: Meta<typeof RadioGroup> = {
  title: "UI/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const DefaultGroup: Story = {
  render: () => (
    <RadioGroup name="option" defaultValue="a">
      <RadioItem value="a" label="Option A" />
      <RadioItem value="b" label="Option B" />
      <RadioItem value="c" label="Option C" />
    </RadioGroup>
  ),
};

export const DisabledItem: Story = {
  render: () => (
    <RadioGroup name="option2" defaultValue="x">
      <RadioItem value="x" label="Enabled" />
      <RadioItem value="y" label="Disabled" disabled />
      <RadioItem value="z" label="Another" />
    </RadioGroup>
  ),
};
