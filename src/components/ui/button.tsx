import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib"


const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground rounded-md shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground rounded-md shadow-sm hover:bg-destructive/90",
        outline:
          "ml-2 text-gray-600 bg-gray-200 hover:bg-gray-300 !rounded-bl-lg !rounded-tr-lg",
        secondary:
          "bg-secondary text-secondary-foreground rounded-md shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent rounded-md hover:text-accent-foreground",
        link: "!py-4 !px-8 !rounded-br-lg !rounded-tl-lg bg-blue-900 text-yellow-400 hover:bg-blue-900/80",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
