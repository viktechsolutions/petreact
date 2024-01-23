import React from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ButtonSize } from 'shared/ui/Button/Button';
import { SidebarItemType } from 'widgets/Sidebar/model/item';
import { SizeIcon } from 'widgets/Sidebar/Sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  Item?: SidebarItemType;
  collapsed?: boolean;
}

export const SidebarItem = (props: SidebarItemProps) => {
  const {collapsed, Item} = props;
  const size = ButtonSize.L;

  return (
    <AppLink theme={AppLinkTheme.PRIMARY} to={Item?.path} className={cls.item}>
      <Item.Icon className={cls.icon} width={SizeIcon.L} height={SizeIcon.L}/>
      <span className={cls.link}> {collapsed ? '' : Item?.text}</span>
    </AppLink>
  );
};

