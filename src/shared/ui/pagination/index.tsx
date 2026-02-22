import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/cn";
import { Button } from "../button";
import { Select } from "../select";

export type PaginationProps = {
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  totalCount?: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
  onPageChange: (pageIndex: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  className?: string;
};

const PAGE_SIZES = [10, 20, 50, 100];

export function Pagination({
  pageIndex,
  pageSize,
  pageCount,
  canPreviousPage,
  canNextPage,
  onPageChange,
  onPageSizeChange,
  className,
  totalCount,
}: PaginationProps) {
  const total = totalCount ?? pageCount * pageSize;
  const from = total === 0 ? 0 : pageIndex * pageSize + 1;
  const to = Math.min((pageIndex + 1) * pageSize, total);

  return (
    <div
      className={cn(
        "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
        className
      )}
    >
      <div className="flex items-center gap-2 text-sm text-[color:var(--color-ink)]/70">
        {onPageSizeChange && (
          <>
            <span>Rows per page</span>
            <Select
              size="sm"
              items={PAGE_SIZES.map((n) => ({ value: String(n), label: String(n) }))}
              value={String(pageSize)}
              onValueChange={(v) => onPageSizeChange(Number(v))}
              aria-label="Page size"
            />
          </>
        )}
        <span>
          {from}–{to} of {total}
        </span>
      </div>
      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="icon"
          aria-label="Previous page"
          disabled={!canPreviousPage}
          onClick={() => onPageChange(pageIndex - 1)}
        >
          <ChevronLeft className="size-4" />
        </Button>
        <span className="min-w-[6rem] px-2 text-center text-sm text-[color:var(--color-ink)]/70">
          Page {pageIndex + 1} of {pageCount || 1}
        </span>
        <Button
          variant="outline"
          size="icon"
          aria-label="Next page"
          disabled={!canNextPage}
          onClick={() => onPageChange(pageIndex + 1)}
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
