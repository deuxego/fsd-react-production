import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

const buttonVariants = cva('flex justify-center items-center rounded-md text-sm', {
  variants: {
    variant: {
      primary: 'bg-primary text-primary-foreground hover:opacity-80',
      secondary: 'bg-secondary text-secondary-foreground hover:opacity-80',
      destructive: 'bg-destructive text-destructive-foreground',
      outline:
        'border border-solid border-input  hover:bg-secondary hover:text-secondary-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-md text-primary underline-offset-4 hover:underline'
    },
    size: {
      sm: 'px-3 h-9',
      md: 'h-10 px-4 py-2',
      icon: 'h-10 w-10'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
});

export const Button: FC<
  HTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>
> = ({ className, variant, size, ...props }) => {
  return <button {...props} className={cn(buttonVariants({ variant, size }), className)} />;
};
