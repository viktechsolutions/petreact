import React, { memo, useMemo, useState } from "react";
import MenuCollapseIcon from 'shared/assets/icons/menu-collapsed.svg';
import MenuExpandIcon from 'shared/assets/icons/menu-expand.svg';
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";
import { sidebarItemList } from 'widgets/Sidebar/model/item';
import { SidebarItem } from 'widgets/Sidebar/SidebarItem/SidebarItem';
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

export const Sidebar = memo(({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const size = ButtonSize.L;

  const itemList = useMemo(() => sidebarItemList.map((item) => (
    <SidebarItem key={item.path} Item={item} collapsed={collapsed}/>
  )), [collapsed]);

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

        {itemList}

      </div>
      <div className={cls.switcher}>
        <ThemeSwitcher/>
        <LangSwitcher className={cls.lang}/>
      </div>
    </div>
  );
});

Sidebar.displayName = 'Sidebar';