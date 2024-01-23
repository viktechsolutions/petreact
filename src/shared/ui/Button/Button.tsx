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
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size,
    disabled,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls[size || cls.size_m]]: true,
    [cls.disabled]: disabled
  };
  return (
    <button className={classNames(cls.Button, mods, [className, cls[theme]])} disabled={disabled} {...otherProps}>
      {children}
    </button>
  );
};
