import { ROUTE_MAP } from 'constants/';

export const navChecker = (pathname: string) => {
  const navRouteArr = Object.entries(ROUTE_MAP)
    .filter(([, value]) => value.HAS_NAV)
    .map(([path]) => path);

  const result = navRouteArr.some((path: string) => {
    const pathRegex = new RegExp(`^${path.replace(/:\w+/g, '\\w+')}$`);

    return pathRegex.test(pathname);
  });

  return result;
};
