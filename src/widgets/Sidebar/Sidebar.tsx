import React, { useState } from "react";
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import MenuCollapseIcon from 'shared/assets/icons/menu-collapsed.svg';
import MenuExpandIcon from 'shared/assets/icons/menu-expand.svg';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

/* eslint-disable */
export enum SizeIcon {
  M = '16px',
  L = '24px',
  XL = '32px'
}

/* eslint-enable */

export const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const size = ButtonSize.L;

  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <Button onClick={onToggle} className={cls.collapsedBtn} theme={ButtonTheme.BACKGROUND} square={true}
              size={size}>
        {collapsed ?
          <MenuExpandIcon className={classNames(cls.icon, {}, [cls.radius])} width={SizeIcon.XL}
                          height={SizeIcon.XL}/> :
          <MenuCollapseIcon className={cls.icon} width={SizeIcon.XL} height={SizeIcon.XL}/>}
      </Button>
      <div className={cls.items}>
        <div>
          <AppLink theme={AppLinkTheme.PRIMARY} to={AppRoutes.MAIN} className={cls.item}>
            <HomeIcon className={cls.icon} width={SizeIcon.L} height={SizeIcon.L}/>
            <span className={cls.link}> {collapsed ? '' : 'Main'}</span>
          </AppLink>
        </div>
        <div>
          <AppLink theme={AppLinkTheme.PRIMARY} to={AppRoutes.ABOUT} className={cls.item}>
            <AboutIcon className={cls.icon} width={SizeIcon.L} height={SizeIcon.L}/>
            <span className={cls.link}> {collapsed ? '' : 'About'}</span>
          </AppLink>
        </div>
      </div>
      <div className={cls.switcher}>
        <ThemeSwitcher/>
        <LangSwitcher className={cls.lang}/>
      </div>
    </div>
  );
};
