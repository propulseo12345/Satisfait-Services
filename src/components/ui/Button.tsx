"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outline-white" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-sm hover:shadow-md",
      secondary:
        "bg-secondary-100 text-neutral-800 hover:bg-secondary-200 active:bg-secondary-300",
      outline:
        "border-2 border-primary-500 text-primary-600 hover:bg-primary-50 active:bg-primary-100",
      "outline-white":
        "border-2 border-white text-white hover:bg-white/10 active:bg-white/20",
      ghost:
        "text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200",
      white:
        "bg-white text-primary-600 hover:bg-neutral-100 active:bg-neutral-200 shadow-sm hover:shadow-md",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
