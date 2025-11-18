import { ComponentProps } from '@/app/generic-type';
import { cn } from '@/lib/utils';
import Image from 'next/image';
export const VectorImg: React.FC<ComponentProps> = ({ className }) => {
  return (
    <>
      <div
        className={cn(
          'flex-center absolute z-10 flex size-41.5 translate-x-1/5 -translate-y-3/4 border-0',
          className
        )}
      >
        <Image
          src='/images/vector.svg'
          className='flex object-scale-down'
          alt=''
          fill
        />
      </div>
    </>
  );
};
