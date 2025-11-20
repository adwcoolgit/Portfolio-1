import { ComponentProps } from '@/app/generic-type';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import Image, { StaticImageData } from 'next/image';

export interface RoundedIconProps extends ComponentProps {
  alt: string;
  src: StaticImageData;
  fill?: boolean;
}

const roundedIconVariant = cva('flex-center relative rounded-full', {
  variants: {
    variant: {
      default: 'border border-primary-300',
      outline: 'border bg-background',
      transparent: 'border bg-transparent',
      borderless: 'bg-background',
    },
    size: {
      default: 'size-15',
      sm: 'size-15.75',
      md: 'size-16',
      lg: 'size-17.5',
      xl: 'size-25',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

const RoundedIcon: React.FC<
  RoundedIconProps & VariantProps<typeof roundedIconVariant>
> = ({ className, alt, src, fill = true, variant, size }) => {
  return (
    <div className={cn(roundedIconVariant({ variant, size, className }))}>
      {fill ? (
        <Image src={src} alt={alt} fill className='absolute' />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={src.width}
          height={src.height}
          className='absolute'
        />
      )}
    </div>
  );
};

export { RoundedIcon, roundedIconVariant };
