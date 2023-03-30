import { RouteProps } from 'react-router-dom';

export interface RouteConfig {
  COMPONENT: any;
  AUTH: boolean;
  HAS_NAV: boolean;
}

export type RouteMap = Record<string, Readonly<RouteConfig>>;

export type AuthRouteProps = {
  element: React.ComponentType<any>;
  [key: string]: any;
} & RouteProps;
