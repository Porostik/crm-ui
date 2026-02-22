import * as React from "react";
import {
  Controller,
  type Control,
  type ControllerFieldState,
  type ControllerRenderProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import { cn } from "../../lib/cn";
import { Label } from "../label";
import { FormMessage } from "../form-message";

export type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  disabled?: boolean;
  /** Control to render. If a single React element, receives id, aria-invalid, aria-describedby, disabled. */
  children: React.ReactNode;
  className?: string;
};

const messageId = (id: string) => `${id}-message`;

export function FormField({
  id,
  label,
  required,
  hint,
  error,
  disabled,
  children,
  className,
}: FormFieldProps) {
  const message = error ?? hint;
  const describedBy = message ? messageId(id) : undefined;

  const control = React.isValidElement(children)
    ? React.cloneElement(
        children as React.ReactElement<Record<string, unknown>>,
        {
          id,
          "aria-invalid": error ? true : undefined,
          "aria-describedby": describedBy,
          disabled,
        }
      )
    : children;

  return (
    <div className={cn("space-y-1", className)}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      {control}
      {message && (
        <FormMessage id={messageId(id)} variant={error ? "error" : "helper"}>
          {message}
        </FormMessage>
      )}
    </div>
  );
}

/**
 * Generic form field wired to react-hook-form Controller.
 * Use with useForm() and pass control + name; render receives field and fieldState.
 */
export type ControlledFormFieldProps<
  TFieldValues extends FieldValues,
  TPath extends FieldPath<TFieldValues>
> = {
  control: Control<TFieldValues>;
  name: TPath;
  label: string;
  required?: boolean;
  hint?: string;
  render: (props: {
    field: ControllerRenderProps<TFieldValues, TPath>;
    fieldState: ControllerFieldState;
  }) => React.ReactNode;
  className?: string;
};

export function ControlledFormField<
  TFieldValues extends FieldValues,
  TPath extends FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  required,
  hint,
  render,
  className,
}: ControlledFormFieldProps<TFieldValues, TPath>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormField
          id={field.name}
          label={label}
          required={required}
          hint={hint}
          error={fieldState.error?.message}
          disabled={field.disabled}
          className={className}
        >
          {render({ field, fieldState })}
        </FormField>
      )}
    />
  );
}
