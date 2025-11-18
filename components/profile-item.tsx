import { ComponentProps } from '@/app/generic-type';
import { ProfileProps } from '@/constant/data-profile-data';

export const ProfileItem: React.FC<
  ComponentProps & ProfileProps & { lasItem: boolean }
> = ({ value, descryption, lasItem }) => {
  return (
    <>
      <div className='flex-col'>
        <div className='display-2xl-bold text-background leading-display-2xl'>
          {value}
        </div>
        <div className='text-md-semibold text-background leading-md tracking-[1px]'>
          {descryption}
        </div>
      </div>
      {!lasItem && <div className='border-primary-300 border-t' />}
    </>
  );
};
