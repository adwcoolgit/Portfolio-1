import { ComponentProps } from '@/app/generic-type';
import { navProperties } from '@/constant/navigation-data';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Link from 'next/link';

export const Navigation: React.FC<ComponentProps> = ({ className }) => {
  return (
    <nav
      className={cn(
        'bg-foreground/20 mt-3 h-fit w-90.5 rounded-full px-4 py-px md:w-fit md:gap-x-6 md:px-6',
        className
      )}
    >
      <div className='sticky hidden md:flex'>
        <ul className='flex-start my-auto gap-6 p-2'>
          {navProperties.map((nav) => (
            <li
              key={nav.title}
              className='text-background hover:text-primary-200 text-md-regular leading-md h-full cursor-pointer px-2 text-center tracking-wide'
            >
              <Link href={nav.target}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex-between md:hidden'>
        <p className='text-neutral-25 leading-xl my-1.75 items-center text-center text-xl md:hidden'>
          Edwin
        </p>
        <Menu className='text-neutral-25 cursor-pointer md:hidden' />
      </div>
    </nav>
  );
};
