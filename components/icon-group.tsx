import { ComponentProps } from '@/app/generic-type';
import { cn } from '@/lib/utils';
import { RoundedIcon } from './rounded-icon';

export const IconGroup: React.FC<ComponentProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'border-primary-300 left-0 flex h-fit w-fit flex-col gap-y-5.5 rounded-full border px-5.25 py-8.25',
        className
      )}
    >
      <RoundedIcon
        alt='test'
        width={51}
        height={51}
        src='./icons/js.svg'
        className='size-17.5'
      />
      <RoundedIcon
        alt='test'
        width={35}
        height={41}
        src='./icons/css.svg'
        className='size-17.5'
      />
      <RoundedIcon
        alt='test'
        width={40.5}
        height={40.5}
        src='./icons/html.svg'
        className='size-17.5'
      />
      <RoundedIcon
        alt='test'
        width={44}
        height={40}
        src='./icons/react.svg'
        className='size-17.5'
      />
    </div>
  );
};
