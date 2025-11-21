import { ComponentProps } from '@/app/generic-type';
import { cn } from '@/lib/utils';

export const Wrapper: React.FC<ComponentProps> = ({ children, className }) => {
  return (
    <>
      <div
        className={cn(
          'custom-container relative flex h-fit w-full flex-col items-center overflow-hidden border-0 px-4 py-10 md:py-20',
          className
        )}
      >
        {children}
      </div>
    </>
  );
};
