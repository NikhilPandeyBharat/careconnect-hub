import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 active:scale-[0.98] min-h-[48px]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-[0_4px_14px_hsla(0,72%,51%,0.4)]",
        outline:
          "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-primary/30",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm",
        ghost: 
          "hover:bg-accent hover:text-accent-foreground",
        link: 
          "text-primary underline-offset-4 hover:underline min-h-0",
        // Healthcare specific variants
        medical:
          "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-md hover:shadow-lg hover:from-primary/90 hover:to-primary/70",
        trust:
          "bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground shadow-md hover:shadow-lg",
        emergency:
          "bg-destructive text-destructive-foreground font-bold shadow-[0_4px_14px_hsla(0,72%,51%,0.4)] hover:bg-destructive/90",
        soft:
          "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20",
        muted:
          "bg-muted text-muted-foreground hover:bg-muted/80",
      },
      size: {
        default: "h-12 px-5 py-3",
        sm: "h-10 rounded-md px-4 text-sm min-h-[40px]",
        lg: "h-14 rounded-xl px-8 text-lg",
        xl: "h-16 rounded-xl px-10 text-xl",
        icon: "h-12 w-12",
        "icon-sm": "h-10 w-10 min-h-[40px]",
        "icon-lg": "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
