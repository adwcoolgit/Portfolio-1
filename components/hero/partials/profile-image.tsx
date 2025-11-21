import { ComponentProps } from '@/app/generic-type';
import Image from 'next/image';
import { VectorImg } from '@/components/vector';
import { Mouse } from 'lucide-react';
import heroImg from '../../../public/images/photo-profile.png';
import { cn } from '@/lib/utils';

export const ProfileImage: React.FC<ComponentProps> = ({ className }) => {
  return (
    <>
      <div
        className={cn(
          `absolute bottom-0 h-full max-h-[735px] w-full max-w-[610px] justify-end border-0`,
          className
        )}
        style={{
          height: 'clamp(28.25rem, 71.85vw, 45.94rem)',
          // width: 'clamp(23.44rem, 31.39vw, 28.25rem)',
          bottom: 0,
        }}
      >
        {/* <div
          className='relative bottom-0 flex-10'
        > */}
        <Image
          src={heroImg}
          alt='image profile'
          fill
          className='bottom-0 z-20 object-contain'
        />
        {/* </div> */}

        <VectorImg className='top-2/3 right-0 bottom-0 size-24.75 md:rotate-60' />
        <div className='absolute bottom-6 left-1/2 z-50 flex w-fit -translate-x-1/2 justify-center md:bottom-10'>
          <p className='flex-center leading-xs md:leading-md md:text-md mr-1 text-center text-xs font-semibold tracking-wider text-white'>
            Scroll Down
          </p>
          <Mouse className='size-5 text-white md:size-6' />
        </div>
      </div>
    </>
  );
};
