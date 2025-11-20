import htmlIco from '../public/icons/html.svg';
import cssIco from '../public/icons/css.svg';
import javascriptIco from '../public/icons/javascript.svg';
import reactIco from '../public/icons/react-js.svg';
import { StaticImageData } from 'next/image';

interface TechCardProps {
  icon: StaticImageData;
  title: string;
  descryption: string;
}

export const techCard: TechCardProps[] = [
  {
    icon: htmlIco,
    title: 'HTML',
    descryption: 'Crafting semantic, accessible HTML structures.',
  },
  {
    icon: cssIco,
    title: 'CSS',
    descryption: 'Crafting semantic, accessible HTML structures.',
  },
  {
    icon: javascriptIco,
    title: 'Javascript',
    descryption: 'Crafting semantic, accessible HTML structures.',
  },
  {
    icon: reactIco,
    title: 'React',
    descryption: 'Crafting semantic, accessible HTML structures.',
  },
];
