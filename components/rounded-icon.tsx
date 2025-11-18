import { ComponentProps } from '@/app/generic-type';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export interface RoundedIconProps extends ComponentProps {
  height: number;
  width: number;
  alt: string;
  src: string;
  size?: number;
}

export const RoundedIcon: React.FC<RoundedIconProps> = ({
  className,
  height,
  width,
  alt,
  src,
}) => {
  return (
    <div
      className={cn(
        `flex-center border-primary-300 rounded-full border`,
        className
      )}
    >
      <Image src={src} width={width} height={height} alt={alt} className='' />
    </div>
  );
};
