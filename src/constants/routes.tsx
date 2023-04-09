import {
  Home,
  Signup,
  Login,
  Task,
  Project,
  Settings,
  ProejectHome,
} from 'pages';
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
  '/project/': {
    COMPONENT: ProejectHome,
    AUTH: false,
    HAS_NAV: true,
  },
  '/project/:id': {
    COMPONENT: Project,
    AUTH: false,
    HAS_NAV: true,
  },
  '/project/:id/task/:id': {
    COMPONENT: Task,
    AUTH: false,
    HAS_NAV: true,
  },
  '/project/:id/settings/*': {
    COMPONENT: Settings,
    AUTH: false,
    HAS_NAV: true,
  },
});
