import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "./index";

const meta: Meta<typeof Pagination> = {
  title: "UI/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Pagination>;

const defaultProps = {
  pageSize: 10,
  pageCount: 5,
  canPreviousPage: true,
  canNextPage: true,
  onPageChange: () => {},
};

export const Default: Story = {
  args: {
    ...defaultProps,
    pageIndex: 1,
  },
};

export const FirstPage: Story = {
  args: {
    ...defaultProps,
    pageIndex: 0,
    canPreviousPage: false,
  },
};

export const LastPage: Story = {
  args: {
    ...defaultProps,
    pageIndex: 4,
    canNextPage: false,
  },
};

export const WithPageSizeSelector: Story = {
  args: {
    ...defaultProps,
    pageIndex: 1,
    onPageSizeChange: () => {},
  },
};
