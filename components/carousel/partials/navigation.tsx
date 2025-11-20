import { ComponentProps } from '@/app/generic-type';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const CarouselNav: React.FC<ComponentProps> = ({ className }) => {
  return (
    <div className={cn('flex-center gap-x-3', className)}>
      <Button asChild variant={'outline'} size={'icon-sm'} className='p-2'>
        <ArrowLeft />
      </Button>
      <Button asChild variant={'outline'} size={'icon-sm'} className='p-2'>
        <ArrowRight />
      </Button>
    </div>
  );
};
