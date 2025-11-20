import { ComponentProps } from '@/app/generic-type';
import { cn } from '@/lib/utils';

export const TechCard: React.FC<ComponentProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        `flex-center mx-auto h-auto w-53.75 flex-col rounded-full px-4 pt-10`,
        className
      )}
    >
      {children}
    </div>
  );
};
