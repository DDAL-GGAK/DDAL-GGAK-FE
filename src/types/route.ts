import { RouteProps } from 'react-router-dom';

export interface RouteConfig {
  COMPONENT: () => JSX.Element;
  HEADER: () => JSX.Element;
  AUTH: boolean;
  HAS_NAV: boolean;
}

export type RouteMap = Record<string, Readonly<RouteConfig>>;

export type AuthRouteProps = {
  element: JSX.Element;
  [key: string]: any;
} & RouteProps;
