export interface ProfileProps {
  value: string;
  descryption: string;
  symbol?: string;
}

export const mainProfile: ProfileProps[] = [
  {
    value: '2',
    descryption: 'Years Experience',
    symbol: '+',
  },
  {
    value: '99',
    descryption: 'Client Satisfaction',
    symbol: '%',
  },
  {
    value: '3',
    descryption: 'Project Delivered',
  },
  {
    value: '50',
    descryption: 'Clients Worldwide',
  },
];
