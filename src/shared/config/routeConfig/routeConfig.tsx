import AboutPage from "pages/AboutPage/ui/AboutPage";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import MainPage from "pages/MainPage/ui/MainPage";
import { RouteProps } from "react-router-dom";

/* eslint-disable */
export enum AppRoutes {
  MAIN = '/',
  ABOUT = '/about',
  NOT_FOUND = '/not-found',
}

/* eslint-enable */

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage/>
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutPage/>,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <ErrorPage/>
  }
}