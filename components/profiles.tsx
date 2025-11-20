import { mainProfile } from '@/constant/data-profile-data';
import { ProfileItem } from './profile-item';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export const Profiles: React.FC = () => {
  return (
    <div className='mt-39.25 flex w-full flex-2 basis-80 flex-col gap-y-5 border-0'>
      {mainProfile.map((profile, index) => (
        <ProfileItem
          value={profile.value}
          descryption={profile.descryption}
          symbol={profile.symbol}
          key={profile.descryption}
          lasItem={index == mainProfile.length - 1}
        />
      ))}
      <Button className='flex-center cursor-pointer gap-x-2' asChild>
        <div>
          <p className='text-md-semibold leading-md ml-4 flex w-38.5'>
            Contact Me
          </p>
          <div className='bg-foreground mr-2 rounded-full p-2'>
            <ArrowRight size={20} className='text-background' />
          </div>
        </div>
      </Button>
    </div>
  );
};
