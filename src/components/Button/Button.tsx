import React from "react";
import styles from "./Button.module.css";

// Defines the allowed visual styles for the Button.
// Using a union type prevents invalid values at compile time.
export type ButtonVariant = "primary" | "secondary";

// Defines the allowed size options for the Button.
// Sizes are mapped to CSS classes, not raw values.
export type ButtonSize = "sm" | "md";

// ButtonProps extends the native HTML button attributes.
// This allows the component to accept standard props like:
// onClick, disabled, aria-label, etc.
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Controls the visual appearance of the button
  variant?: ButtonVariant;
  // Controls spacing and font size
  size?: ButtonSize;
}

// Button is a reusable design-system component.
// It wraps the native <button> element to ensure consistency.
export function Button({
  // Default variant if none is provided
  variant = "primary",

  // Default size if none is provided
  size = "md",

  // Default type avoids accidental form submissions
  type = "button",

  // Content placed between <Button>...</Button>
  children,

  // Collects all remaining native button props
  ...rest
}: ButtonProps) {
  return (
    <button
      // Native button type (button | submit | reset)
      type={type}
      // Combines base, variant and size styles using CSS Modules
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      // Spreads native HTML attributes (onClick, disabled, aria-*)
      {...rest}
    >
      {children}
    </button>
  );
}
