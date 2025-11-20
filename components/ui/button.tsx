import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva('cursor-pointer', {
  variants: {
    variant: {
      default: 'bg-secondary-100 rounded-full',
      outline: 'border border-neutral-300 rounded-full',
    },
    size: {
      default: ' h-14',
      icon: 'size-9',
      'icon-sm': 'size-9',
      'icon-md': 'size-15.75',
      'icon-lg': 'size-17.25',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
