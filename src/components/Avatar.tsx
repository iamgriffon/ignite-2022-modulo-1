import { ImgHTMLAttributes } from 'react';
import styles from '../styles/Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean | false;
}

export function Avatar({hasBorder, ...props}: AvatarProps) {
  return (
      <img className={hasBorder ? styles.avatarWithBorder : styles.avatarBorderless} {...props} />
  );
}
