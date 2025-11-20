'use client';

import { ComponentProps } from '@/app/generic-type';
import { cn } from '@/lib/utils';
import { RoundedIcon } from './rounded-icon';
import { heroTech } from '@/constant/hero-tech-data';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export const IconGroup: React.FC<ComponentProps> = ({ className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);

  const variants = {
    drag: {
      boxShadow: '0px 12px 24px rgba(0,0,0,0.3)',
      scale: 1.05,
    },
    idle: {
      boxShadow: '0px 0px 0px rgba(0,0,0,0)',
      scale: 1,
    },
  };

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.16}
      whileTap={{ cursor: 'grabbing' }}
      variants={variants}
      initial='idle'
      whileDrag='drag'
      className={cn(
        'border-primary-300 left-0 flex h-fit w-fit cursor-pointer flex-col gap-y-5.5 rounded-full border px-5.25 py-8.25',
        className
      )}
    >
      {heroTech.map((icon) => (
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 1000 }}
          key={icon.title}
        >
          <RoundedIcon
            alt={icon.title}
            src={icon.icon}
            className='flex object-scale-down'
            size={'lg'}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
