interface RouteConfig {
  COMPONENT: React.ReactNode;
  AUTH: boolean;
}

export type RouteMap = Record<string, Readonly<RouteConfig>>;
