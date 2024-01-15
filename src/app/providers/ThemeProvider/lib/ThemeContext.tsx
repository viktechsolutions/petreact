import { createContext } from "react";

/* eslint-disable */
export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
}

/* eslint-enable */

export interface ThemeContextProps {
  theme?: Theme;
  // eslint-disable-next-line no-unused-vars
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
