import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ConfirmDialog } from "./index";
import { Button } from "../button";

const meta: Meta<typeof ConfirmDialog> = {
  title: "UI/ConfirmDialog",
  component: ConfirmDialog,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ConfirmDialog>;

function ConfirmDialogDemo(props: Partial<React.ComponentProps<typeof ConfirmDialog>>) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        title="Confirm action"
        onConfirm={() => {}}
        {...props}
      />
    </>
  );
}

export const Default: Story = {
  render: () => (
    <ConfirmDialogDemo
      title="Confirm action"
      description="Are you sure you want to continue?"
      onConfirm={() => {}}
    />
  ),
};

export const Destructive: Story = {
  render: () => (
    <ConfirmDialogDemo
      title="Delete item"
      description="This action cannot be undone."
      confirmLabel="Delete"
      destructive
      onConfirm={() => {}}
    />
  ),
};

export const Loading: Story = {
  render: function LoadingStory() {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open (loading)</Button>
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          title="Save changes?"
          description="Your changes will be saved."
          confirmLabel="Save"
          onConfirm={async () => {
            await new Promise((r) => setTimeout(r, 2000));
          }}
        />
      </>
    );
  },
};
