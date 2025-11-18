import { ComponentProps } from '@/app/generic-type';
import { navProperties } from '@/constant/navigation-data';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const Navigation: React.FC<ComponentProps> = ({
  children,
  className,
}) => {
  return (
    <nav
      className={cn(
        'bg-foreground/20 h-fit w-fit gap-x-6 rounded-full px-6 py-px',
        className
      )}
    >
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
    </nav>
  );
};
