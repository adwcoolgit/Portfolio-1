'use client';

import { ComponentProps } from '@/app/generic-type';
import { ProfileProps } from '@/constant/data-profile-data';
import { useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const ProfileItem: React.FC<
  ComponentProps & ProfileProps & { lasItem: boolean }
> = ({ value, descryption, symbol, lasItem }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const springCount = useSpring(1, { bounce: 0, duration: 5000 });

  springCount.on('change', (value) => {
    setDisplayValue(Math.round(value));
  });

  useEffect(() => {
    springCount.set(Number(value));
  }, []);

  return (
    <>
      <div className='flex-col'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className='display-md-bold leading-display-md md:display-2xl-bold text-background md:leading-display-2xl w-auto'
        >
          {displayValue}
          {symbol}
        </motion.div>
        <div className='text-xs-semibold leading-xs md:text-md-semibold text-background md:leading-md w-auto tracking-[1px]'>
          {descryption}
        </div>
      </div>
    </>
  );
};
