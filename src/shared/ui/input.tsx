import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '../lib/utils';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={cn('flex h-10 bg-background border border-input rounded-md py-2 px-3 text-sm focus:outline-0', className)}
      />
    );
  }
);
