import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./index";
import { Button } from "../button";
import { FormField } from "../form-field";
import { Input } from "../input";

const meta: Meta<typeof Dialog> = {
  title: "UI/Dialog",
  component: Dialog,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogDescription>
            Optional description or body text for the dialog.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open (scroll)</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Long content</DialogTitle>
          <DialogDescription>This dialog body scrolls when content is long.</DialogDescription>
        </DialogHeader>
        <div className="space-y-2 py-2 text-sm text-[color:var(--color-ink)]">
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i}>
              Paragraph {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add item</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New item</DialogTitle>
          <DialogDescription>Fill in the details below.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <FormField id="name" label="Name" required>
            <Input placeholder="Item name" />
          </FormField>
          <FormField id="email" label="Email">
            <Input type="email" placeholder="you@example.com" />
          </FormField>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
