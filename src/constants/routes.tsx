import { Home, Signup, Login, Task, Project, Settings, } from 'pages';
import { RouteMap } from 'types';

export const ROUTE_MAP: RouteMap = Object.freeze({
  '/': {
    COMPONENT: Home,
    AUTH: false,
    HAS_NAV: false,
  },
  '/signup': {
    COMPONENT: Signup,
    AUTH: false,
    HAS_NAV: false,
  },
  '/login': {
    COMPONENT: Login,
    AUTH: false,
    HAS_NAV: false,
  },
  '/project/:id': {
    COMPONENT: Project,
    AUTH: true,
    HAS_NAV: true,
  },
  '/task/:id': {
    COMPONENT: Task,
    AUTH: true,
    HAS_NAV: true,
  },
  '/project/:id/settings/*': {
    COMPONENT: Settings,
    AUTH: true,
    HAS_NAV: true,
  },
});
