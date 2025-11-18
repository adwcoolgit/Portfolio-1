import { AbilityCard } from '@/components/ability-card';
import { IconGroup } from '@/components/icon-group';
import { Navigation } from '@/components/navigation';
import { Profiles } from '@/components/profiles';
import { Button } from '@/components/ui/button';
import { VectorImg } from '@/components/vector';
import { Wrapper } from '@/components/wrapper';
import { abilities } from '@/constant/abilities';
import { Mic, Mouse } from 'lucide-react';
import Image from 'next/image';
import { Fragment } from 'react/jsx-runtime';
import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <>
      <Wrapper className='bg-primary-hero-300 pt-8'>
        <Navigation className='hidden md:block' />
        <div className='flex justify-between border-0'>
          <IconGroup className='mt-7 flex-[0.5] basis-80' />
          <div className='relative mt-50 flex-[7.5] basis-80 flex-col border-0'>
            <p className='font-bonheur-royale text-background absolute z-30 translate-x-1/3 -translate-y-1/2 -rotate-15 text-[113px]'>
              Junior
            </p>
            <h1 className='font-anton text-secondary-100 relative z-20 mr-12.5 ml-39.5 border-0 text-[188px] leading-[188px] -tracking-wide'>
              FRONTEND
            </h1>
            <h1 className='font-anton text-secondary-100 absolute z-20 mr-12.5 ml-39.5 -translate-y-1/6 border-0 text-[168px] -tracking-[3px]'>
              DEVELOPER
            </h1>
            <h1 className='font-anton text-stroke absolute z-50 mr-12.5 ml-39.5 -translate-y-1/6 border-0 text-[168px] -tracking-[3px] text-transparent'>
              DEVELOPER
            </h1>
            <VectorImg className='relative top-1/10 translate-x-3/7' />
          </div>
          <Profiles />
        </div>
        <div className='absolute bottom-0 h-[735px] w-[610px] border-0'>
          <Image
            src='/images/photo-profile.png'
            alt='image profile'
            fill
            className='z-20 object-cover'
          />
          <div className='absolute top-1/2 flex w-112.75 -translate-x-7/11 -translate-y-1/6 flex-col gap-y-3.5 border-0'>
            <Button
              className='border-primary-300 flex-center p-3.5'
              variant={'outline'}
              size={'icon-md'}
            >
              {/* <Mic className='text-background' /> */}
              <Icon
                icon='fluent:mic-48-filled'
                className='text-background size-full'
              />
            </Button>
            <p className='text-xl-bold text-background leading-xl flex'>
              Hi, I'm Edwin Anderson
            </p>
            <p className='text-lg-medium text-background leading-lg font-montserrat flex'>
              a frontend developer passionate about creating seamless digital
              experiences that are fast, responsive, and user-friendly.
            </p>
          </div>
          <VectorImg className='right-0 bottom-0 rotate-60' />
          <div className='absolute bottom-10 left-1/2 z-50 flex w-fit -translate-x-1/2 justify-center'>
            <p className='mr-1 font-semibold tracking-wider text-white'>
              Scroll Down
            </p>
            <Mouse className='text-white' />
          </div>
        </div>
      </Wrapper>
      <Wrapper className='h-fit px-68.5'>
        <h2 className='text-display-lg leading-display-lg text-foreground justify-center text-center font-medium tracking-wide'>
          As frontend developers , we bring designs to life with{' '}
          <span className='text-primary-300'>clean</span>,
          <span className='text-primary-300'> responsive code</span> that blends
          creativity 🎨 with usability 🌟.
        </h2>
      </Wrapper>
      <Wrapper className='flex-between h-fit flex-row items-stretch gap-x-10 px-30'>
        {abilities.map((ability, index) => (
          <Fragment key={index}>
            <AbilityCard
              title={ability.title}
              descryption={ability.descryption}
              icon={ability.icon}
            />
            {index < abilities.length - 1 && (
              <div className='my-[1.75%] self-stretch border-l border-neutral-300'></div>
            )}
          </Fragment>
        ))}
      </Wrapper>
    </>
  );
}
