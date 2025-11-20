import htmlIco from '../public/icons/html.svg';
import cssIco from '../public/icons/css.svg';
import javascriptIco from '../public/icons/javascript.svg';
import reactIco from '../public/icons/react-js.svg';
import { StaticImageData } from 'next/image';

interface HeroTechProps {
  icon: StaticImageData;
  title: string;
}

export const heroTech: HeroTechProps[] = [
  {
    icon: javascriptIco,
    title: 'Javascript',
  },
  {
    icon: cssIco,
    title: 'CSS',
  },
  {
    icon: htmlIco,
    title: 'HTML',
  },
  {
    icon: reactIco,
    title: 'React',
  },
];
