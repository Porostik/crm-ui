import * as React from "react";
import {
  type ColumnDef,
  type SortingState,
  type Updater,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { cn } from "../../lib/cn";
import type { RowAction } from "../row-actions-dropdown";
import { RowActionsDropdown } from "../row-actions-dropdown";
import { EmptyState } from "../empty-state";
import { TableSkeleton } from "../table-skeleton";

export type DataTableEmptyState = {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export type DataTableProps<T> = {
  columns: ColumnDef<T, unknown>[];
  data: T[];
  state?: {
    isLoading?: boolean;
  };
  empty?: DataTableEmptyState;
  renderRowActions?: (row: T) => RowAction[];
  sorting?: SortingState;
  onSortingChange?: (updater: Updater<SortingState>) => void;
  footer?: React.ReactNode;
  className?: string;
};

export function DataTable<T>({
  columns,
  data,
  state = {},
  empty,
  renderRowActions,
  sorting,
  onSortingChange,
  footer,
  className,
}: DataTableProps<T>) {
  const { isLoading = false } = state;

  const [internalSorting, setInternalSorting] = React.useState<SortingState>([]);
  const sortingState = sorting ?? internalSorting;
  const setSorting = onSortingChange ?? setInternalSorting;

  const tableColumns = React.useMemo(() => {
    if (!renderRowActions) return columns;
    const actionsColumn: ColumnDef<T, unknown> = {
      id: "actions",
      header: "",
      size: 48,
      cell: ({ row }) => (
        <div className="flex justify-end">
          <RowActionsDropdown actions={renderRowActions(row.original)} />
        </div>
      ),
    };
    return [...columns, actionsColumn];
  }, [columns, renderRowActions]);

  const table = useReactTable({
    data,
    columns: tableColumns,
    state: { sorting: sortingState },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (isLoading) {
    return (
      <div className={cn("overflow-hidden rounded-lg border border-[color:var(--color-ink)]/15", className)}>
        <TableSkeleton rows={8} columns={tableColumns.length} />
      </div>
    );
  }

  if (data.length === 0 && empty) {
    return (
      <EmptyState
        title={empty.title}
        description={empty.description}
        actionLabel={empty.actionLabel}
        onAction={empty.onAction}
        className={className}
      />
    );
  }

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="overflow-x-auto rounded-lg border border-[color:var(--color-ink)]/15">
        <table className="w-full border-collapse text-sm">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-[color:var(--color-ink)]/15 bg-[color:var(--color-ink)]/5">
                {headerGroup.headers.map((header) => {
                  const canSort = header.column.getCanSort();
                  const isSorted = header.column.getIsSorted();
                  return (
                    <th
                      key={header.id}
                      className={cn(
                        "px-3 py-2 text-left font-medium text-[color:var(--color-ink)]",
                        canSort && "cursor-pointer select-none hover:bg-[color:var(--color-ink)]/10"
                      )}
                      style={{ width: header.getSize() !== 150 ? header.getSize() : undefined }}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <div className="flex items-center gap-1">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {canSort && (
                          <span className="shrink-0 text-[color:var(--color-ink)]/50">
                            {isSorted === "asc" && <ArrowUp className="size-3.5" />}
                            {isSorted === "desc" && <ArrowDown className="size-3.5" />}
                            {!isSorted && <ArrowUpDown className="size-3.5" />}
                          </span>
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-[color:var(--color-ink)]/10 hover:bg-[color:var(--color-ink)]/5"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-3 py-2 text-[color:var(--color-ink)]">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footer && <div className="mt-2">{footer}</div>}
    </div>
  );
}
