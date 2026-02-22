import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./index";
import { Button } from "../button";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    compact: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardContent>
        <p>Card content only.</p>
      </CardContent>
    </Card>
  ),
};

export const WithHeaderAndFooterActions: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>
          Optional description for the card.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Main content of the card.</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">Cancel</Button>
        <Button size="sm">Save</Button>
      </CardFooter>
    </Card>
  ),
};

export const Compact: Story = {
  render: () => (
    <Card compact>
      <CardHeader compact>
        <CardTitle>Compact card</CardTitle>
      </CardHeader>
      <CardContent compact>
        <p>Denser spacing for compact layouts.</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm">View</Button>
      </CardFooter>
    </Card>
  ),
};
