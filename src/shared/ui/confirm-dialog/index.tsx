import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "../dialog";
import { Button } from "../button";
import { Spinner } from "../spinner";

export type ConfirmDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  destructive?: boolean;
  loading?: boolean;
  onConfirm: () => void | Promise<void>;
  onCancel?: () => void;
};

export function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  destructive = false,
  loading = false,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  const [internalLoading, setInternalLoading] = React.useState(false);
  const isBusy = loading ?? internalLoading;

  const handleConfirm = React.useCallback(async () => {
    try {
      setInternalLoading(true);
      await Promise.resolve(onConfirm());
      onOpenChange(false);
    } finally {
      setInternalLoading(false);
    }
  }, [onConfirm, onOpenChange]);

  const handleCancel = React.useCallback(() => {
    onCancel?.();
    onOpenChange(false);
  }, [onCancel, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showClose={!isBusy}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" onClick={handleCancel} disabled={isBusy}>
              {cancelLabel}
            </Button>
          </DialogClose>
          <Button
            variant={destructive ? "destructive" : "default"}
            onClick={handleConfirm}
            disabled={isBusy}
          >
            {isBusy ? (
              <>
                <Spinner size="sm" className="shrink-0" />
                {confirmLabel}
              </>
            ) : (
              confirmLabel
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
