import {
  Laptop,
  Shirt,
  Home,
  BookOpen,
  type LucideProps,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const Icons = {
  Laptop,
  Shirt,
  Home,
  BookOpen,
};

export type IconName = keyof typeof Icons;

export const Icon = ({ name, ...props }: { name: IconName } & LucideProps) => {
  const LucideIcon = Icons[name];
  return <LucideIcon {...props} />;
};
