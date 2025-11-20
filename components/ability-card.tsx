import { ComponentProps } from '@/app/generic-type';
import { AbilityProps } from '@/constant/abilities';
import { RoundedIcon } from './rounded-icon';
import { cn } from '@/lib/utils';

export const AbilityCard: React.FC<ComponentProps & AbilityProps> = ({
  className,
  icon,
  title,
  descryption,
}) => {
  return (
    <div className={cn('flex w-full flex-col gap-y-4', className)}>
      <RoundedIcon
        alt={title}
        src={icon}
        fill={false}
        className='gap-4 overflow-hidden border-neutral-300 object-scale-down'
        variant={'default'}
        size={'sm'}
      />
      <div className='flex flex-col gap-y-2'>
        <h3 className='text-display-xs leading-display-xs container font-bold tracking-wide'>
          {title}
        </h3>
        <div className='text-md-regular leading-md container tracking-wide'>
          {descryption}
        </div>
      </div>
    </div>
  );
};
