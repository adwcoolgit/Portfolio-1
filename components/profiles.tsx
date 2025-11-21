'use client';

import { mainProfile } from '@/constant/data-profile-data';
import { ProfileItem } from './profile-item';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { useBreakpoint } from '@/hooks/useTailwindBreakpoint';
import { Fragment } from 'react/jsx-runtime';

export const Profiles: React.FC = () => {
  const width = useBreakpoint();

  if (!width) return null;

  const isMobile = width < 768;
  const isTablet = width < 1024;
  const isDesktop = width >= 1024;

  return (
    // <div className='absolute left-0 container mx-3 block h-10 w-full border'></div>
    <div className='static left-0 z-100 mx-0 flex w-full flex-2 basis-80 flex-col gap-y-5 border-0'>
      <div className='grid grid-cols-[1fr_55px_1fr] gap-x-5 gap-y-5 border-0 md:grid-cols-1'>
        {mainProfile.map((profile, index) => (
          // <div key={index} className='flex justify-between md:flex-col'>
          <Fragment key={index}>
            <ProfileItem
              value={profile.value}
              descryption={profile.descryption}
              symbol={profile.symbol}
              lasItem={index == mainProfile.length - 1}
            />
            {!isMobile && index < mainProfile.length - 1 && (
              <div className='border-primary-300 border-t'></div>
            )}
            {isMobile && index % 2 == 0 && mainProfile.length - 1 && (
              <div className='flex w-full justify-center pb-2'>
                <div className='bg-primary-300 h-full w-px' />
              </div>
            )}
          </Fragment>
          // </div>
        ))}
      </div>
      <Button className='flex-between md:flex-center h-12 cursor-pointer md:gap-x-2'>
        <>
          {/* <div> */}
          <p className='text-sm-semibold md:text-md-semibold leading-sm md:leading-md ml-4 flex md:w-38.5'>
            Contact Me
          </p>
          <div className='bg-foreground mr-2 size-9 rounded-full p-2'>
            <ArrowRight size={20} className='text-background' />
          </div>
          {/* </div> */}
        </>
      </Button>
    </div>
  );
};
