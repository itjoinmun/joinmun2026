import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-[3px] transition-colors disabled:pointer-events-none cursor-pointer font-montserrat disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-primary-300 text-white hover:bg-primary-200 data-[active=true]:bg-primary-400 active:bg-primary-400",
      },
      size: {
        sm: "py-2 px-3.5 font-b3",
        md: "py-2.5 px-4 font-b3",
        lg: "py-3 px-4.5 font-b2",
        xl: "py-3 px-5 font-b2",
        xxl: "py-4 px-6 font-b1",
        iconsm: "p-2",
        iconmd: "p-2.5",
        iconlg: "p-3",
        iconxl: "p-3.5",
        icon2xl: "p-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    isActive?: boolean;
  };

function Button({
  className,
  variant,
  size,
  isActive,
  ...props
}: ButtonProps) {
  return (
    <button
      data-active={isActive ? "true" : undefined}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };