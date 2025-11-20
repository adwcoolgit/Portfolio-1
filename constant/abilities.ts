import propertiesIco from '../public/icons/tools.jpg';
import stylesIco from '../public/icons/styles.jpg';
import devicesIco from '../public/icons/devices.jpg';
import { StaticImageData } from 'next/image';

export interface AbilityProps {
  icon: StaticImageData;
  title: string;
  descryption: string;
}

export const abilities: AbilityProps[] = [
  {
    icon: propertiesIco,
    title: 'COMPONENT-BASED DEVELOPMENT',
    descryption:
      'Reusable, scalable code built with modern frameworks like React or Vue.',
  },
  {
    icon: stylesIco,
    title: 'PIXEL-PERFECT UI IMPLEMENTATION',
    descryption:
      'Translating design into high-fidelity user interfaces with attention to detail.',
  },
  {
    icon: devicesIco,
    title: 'RESPONSIVE & ACCESSIBLE DESIGN',
    descryption:
      'Optimized layouts that work seamlessly across all screen sizes and devices.',
  },
];
