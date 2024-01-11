import {createContext} from "react";

/* eslint-disable */
export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

/* eslint-enable */

export interface ThemeContextProps {
    theme?: Theme;
    // eslint-disable-next-line no-unused-vars
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme';
