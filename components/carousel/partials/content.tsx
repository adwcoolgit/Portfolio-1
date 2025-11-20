import { ComponentProps } from '@/app/generic-type';
import { cn } from '@/lib/utils';

export const CarouselContent: React.FC<ComponentProps> = ({
  children,
  className,
}) => {
  return <div className={cn('w-full', className)}>{children}</div>;
};
