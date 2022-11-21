type Size = 'xs' | 'sm' | 'smmd' | 'md' | 'lg' | 'xl';

export interface SVGIconProps {
  fill: string;
  width: number;
}

export default interface IconProps {
  name: string;
  color?: string;
  size?: Size | string;
}
