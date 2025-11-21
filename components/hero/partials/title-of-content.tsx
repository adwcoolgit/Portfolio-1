import { ComponentProps } from '@/app/generic-type';
import { IconGroup } from '@/components/icon-group';
import { Profiles } from '@/components/profiles';
import { VectorImg } from '@/components/vector';
import { cn } from '@/lib/utils';

export const TitleOfContent: React.FC<ComponentProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'flex justify-between border-0 md:flex-row-reverse',
        className
      )}
    >
      {/* Head line text */}
      <div className='flex justify-between border-0'>
        <IconGroup className='flex-[0.5] basis-80' />
        <div className='relative mt-32 flex-[7.5] basis-80 flex-col border-0 md:mt-50'>
          <p className='font-bonheur-royale text-background absolute z-30 translate-x-1/5 -translate-y-1/7 -rotate-15 text-[64.59px] md:translate-x-1/3 md:-translate-y-1/2 md:text-[113px]'>
            Junior
          </p>
          <h1 className='font-anton text-secondary-100 relative z-10 mx-4.5 border-0 text-[102px] -tracking-wide md:mr-12.5 md:ml-39.5 md:text-[188px] md:leading-[188px]'>
            FRONTEND
          </h1>
          <h1 className='font-anton text-secondary-100 absolute z-10 mx-4.5 -translate-y-2/6 border-0 text-[92px] -tracking-[2px] md:mr-12.5 md:ml-39.5 md:-translate-y-1/6 md:text-[168px] md:-tracking-[3px]'>
            DEVELOPER
          </h1>
          <h1 className='font-anton text-stroke absolute z-50 mx-4.5 -translate-y-2/6 border-0 text-[92px] -tracking-[2px] text-transparent md:mr-12.5 md:ml-39.5 md:-translate-y-1/6 md:text-[168px] md:-tracking-[3px]'>
            DEVELOPER
          </h1>
          <VectorImg className='relative -top-1/4 size-18.5 -translate-x-2/7 rotate-15 md:top-1/10 md:size-41.5 md:translate-x-3/7' />
        </div>
      </div>
    </div>
  );
};
