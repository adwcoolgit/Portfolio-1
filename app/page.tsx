import { AbilityCard } from '@/components/ability-card';
import { IconGroup } from '@/components/icon-group';
import { Navigation } from '@/components/navigation';
import { Profiles } from '@/components/profiles';
import { Button } from '@/components/ui/button';
import { VectorImg } from '@/components/vector';
import { abilities } from '@/constant/abilities';
import { Mouse } from 'lucide-react';
import Image from 'next/image';
import { Fragment } from 'react/jsx-runtime';
import { Icon } from '@iconify/react';
import { UITechCard } from '@/components/card-tech/partials';
import { techCard } from '@/constant/tech-card-data';
import { UICaousel } from '@/components/carousel';
import { Hero } from '@/components/hero';
import { Wrapper } from '@/components/wrapper';

export default function Home() {
  return (
    <>
      <Navigation className='absolute left-1/2 z-10 -translate-x-1/2 justify-center md:mt-8' />
      <Hero.Wrapper className='bg-primary-hero-300 h-257 min-h-screen pt-8 md:h-255.75'>
        <div className='gap-y-6.25'>
          <Hero.Description className='' />
          <div className='static md:absolute md:right-30 md:mt-39.25 md:justify-end'>
            <Hero.Profile />
          </div>
        </div>
        <Hero.Title className='md:absolute md:left-30' />
        <Hero.Image className='absolute bottom-0' />
      </Hero.Wrapper>

      <Wrapper className='h-fit border-0 px-4 md:px-68.5'>
        <h2 className='text-display-sm leading-display-sm md:text-display-lg md:leading-display-lg text-foreground justify-center text-center font-medium -tracking-[1px] md:tracking-wide'>
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
      <UITechCard.Wrapper className='h-fit gap-y-4 px-65'>
        <UICaousel.Content className='mx-auto flex h-fit w-full grow gap-x-5'>
          {techCard.map((tech, index) => (
            <UITechCard.Card
              key={tech.title}
              className={`${index % 2 == 0 ? 'bg-secondary-100' : 'bg-background border border-neutral-300'} gap-y-3 px-4 py-10`}
            >
              <UITechCard.Icon
                src={tech.icon}
                alt={tech.title}
                className={`gap-4 gap-y-3 overflow-hidden ${index % 2 == 0 ? 'bg-neutral-25' : 'bg-neutral-100'} object-scale-down p-3`}
                variant={'borderless'}
              />
              <div className='flex-col'>
                <div className='text-md-semibold leading-md flex-center tracking-normal'>
                  {tech.title}
                </div>
                <div className='text-md-regular leading-md flex-center text-center tracking-normal'>
                  {tech.descryption}
                </div>
              </div>
            </UITechCard.Card>
          ))}
        </UICaousel.Content>
        <UICaousel.Navigation />
      </UITechCard.Wrapper>
    </>
  );
}
