export interface RouteConfig {
  COMPONENT: React.ReactNode;
  AUTH: boolean;
  HAS_NAV: boolean;
}

export type RouteMap = Record<string, Readonly<RouteConfig>>;
