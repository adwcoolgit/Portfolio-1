import { ComponentProps } from '@/app/generic-type';
import { cn } from '@/lib/utils';

export const Wrapper: React.FC<ComponentProps> = ({ children, className }) => {
  return (
    <>
      <div
        className={cn(
          'custom-container relative flex h-255.75 flex-col items-center overflow-hidden border-0 py-20',
          className
        )}
      >
        {children}
      </div>
    </>
  );
};
