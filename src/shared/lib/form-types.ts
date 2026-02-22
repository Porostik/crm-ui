import * as React from "react";
import type {
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseFormReturn,
} from "react-hook-form";

/**
 * Re-export commonly used react-hook-form types for form infrastructure.
 */
export type {
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseFormReturn,
};

/**
 * State for a single form field (error, hint).
 * Aligns with ControllerFieldState.error and custom hint from schema/labels.
 */
export type FormFieldState = {
  error?: string;
  hint?: string;
};

/**
 * Props passed to a form control when used inside FormField (presentational).
 */
export type FormControlProps = {
  id?: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
  disabled?: boolean;
};

/**
 * Props for FormField wrapper (label + control + message).
 */
export type FormFieldLayoutProps = {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  disabled?: boolean;
  children: React.ReactNode;
};

/**
 * Extract field type from FieldValues by path (supports dotted paths).
 * Use with Controller: ControllerRenderProps<TFormValues, TPath>.
 */
export type FieldValueByPath<
  T extends FieldValues,
  P extends FieldPath<T>,
> = P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? T[K] extends Record<string, unknown>
      ? Rest extends FieldPath<T[K] & Record<string, unknown>>
        ? FieldValueByPath<T[K] & Record<string, unknown>, Rest>
        : T[K]
      : T[K]
    : never
  : P extends keyof T
    ? T[P]
    : never;

/**
 * Props for a generic form control component that works with RHF Controller.
 * T = field value type (string, number, boolean, etc.)
 */
export type FormControlComponentProps<T = string> = {
  value?: T;
  onChange?: (value: T) => void;
  onBlur?: () => void;
  disabled?: boolean;
  error?: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
};
