import React from 'react';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const sidebarItemList: SidebarItemType[] = [
  {path: AppRoutes.MAIN, text: 'Главная', Icon: HomeIcon},
  {path: AppRoutes.ABOUT, text: 'О нас', Icon: AboutIcon},
  {path: AppRoutes.PROFILE, text: 'Профиль', Icon: ProfileIcon},
];