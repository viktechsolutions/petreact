import { Theme, useTheme } from "app/providers/ThemeProvider";
import React, { memo } from "react";
import DarkIcon from "shared/assets/icons/darkMode.svg";
import LightIcon from "shared/assets/icons/lightMode.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({className}: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme();
  return (
    <Button
      theme={ButtonTheme.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
      {theme === Theme.DARK ? <LightIcon width={20} height={20}/> : <DarkIcon width={20} height={20}/>}
    </Button>
  );
});


ThemeSwitcher.displayName = 'ThemeSwitcher';