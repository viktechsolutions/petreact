import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Button.module.scss';

/* eslint-disable */
export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}


export const enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

/* eslint-enable */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls[size || cls.size_m]]: true,
  }
  return (
    <button className={classNames(cls.Button, mods, [className, cls[theme]])} {...otherProps}>
      {children}
    </button>
  );
};

