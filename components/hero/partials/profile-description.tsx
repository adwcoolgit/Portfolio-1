'use client';

import { Icon } from '@iconify/react';
import { Button } from '../../ui/button';
import { ComponentProps } from '@/app/generic-type';
import { cn } from '@/lib/utils';
import { useBreakpoint } from '@/hooks/useTailwindBreakpoint';

export const ProfileDescription: React.FC<ComponentProps> = ({ className }) => {
  const width = useBreakpoint();

  if (!width) return null;

  const isMobile = width < 768;
  const isTablet = width < 1024;
  const isDesktop = width >= 1024;

  return (
    <div
      className={cn(
        'static mt-22 flex -translate-y-1/6 flex-col gap-y-2 border-0 md:absolute md:bottom-1/7 md:left-1/3 md:w-112.75 md:-translate-x-8/10 md:gap-y-3.5',
        className
      )}
    >
      <Button
        className='border-primary-300 flex-center p-3.5'
        variant={'outline'}
        size={isMobile ? 'icon-sm' : 'icon-md'}
      >
        {/* <Mic className='text-background' /> */}
        <Icon
          icon='fluent:mic-48-filled'
          className='text-background size-full'
        />
      </Button>
      <p className='text-md-bold leading-md md:text-xl-bold text-background md:leading-xl flex'>
        Hi, I'm Edwin Anderson
      </p>
      <p className='text-sm-medium md:text-lg-medium text-background leading-sm md:leading-lg font-montserrat flex'>
        a frontend developer passionate about creating seamless digital
        experiences that are fast, responsive, and user-friendly.
      </p>
    </div>
  );
};
