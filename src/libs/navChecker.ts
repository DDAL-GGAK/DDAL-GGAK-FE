import { ROUTE_MAP } from 'constants/';

export const navChecker = (pathname: string) => {
  const navRouteArr = Object.entries(ROUTE_MAP)
    .filter(([, value]) => value.HAS_NAV)
    .map(([path]) => path);

  const result = navRouteArr.some((path: string) => {
    const dynamicRouteRegex = new RegExp(
      `^${path
        .replaceAll(/:\w+/g, '\\w+')
        .replace(/\*/g, '.+')
        .replace(/\//g, '\\/')}`
    );

    return dynamicRouteRegex.test(pathname);
  });

  return result;
};
