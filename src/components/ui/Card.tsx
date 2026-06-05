import React from 'react';
import { cn } from '@/lib/utils';

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("bg-white rounded-card shadow-soft overflow-hidden", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';
