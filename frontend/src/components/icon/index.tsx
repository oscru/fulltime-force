import React from 'react';
import { icons } from './icons';
import IconProps from './props';
import styles from './styles.module.scss';

const sizes: Record<string, number> = {
  xs: 12,
  sm: 16,
  smmd: 18,
  md: 24,
  lg: 32,
  xl: 48,
};
export default function Icon({
  name: ComponentName,
  color = '#E6E8EA',
  size = 'md',
}: IconProps) {
  const Component = icons[ComponentName];

  if (!Component) {
    throw new Error(`Icon "${ComponentName}" not found`);
  }

  return (
    <span role="iconography" className={styles.container}>
      <Component fill={color} width={sizes[size]} />
    </span>
  );
}
