import {
  Home,
  Signup,
  Login,
  Task,
  Project,
  Settings,
  ProejectHome,
  MyTicketPage,
} from 'pages';
import { HomeHeader, SignUpHeader } from 'components/headers';
import { RouteMap } from 'types';

export const ROUTE_MAP: RouteMap = Object.freeze({
  '/': {
    COMPONENT: Home,
    HEADER: HomeHeader,
    AUTH: false,
    HAS_NAV: false,
  },
  '/signup': {
    COMPONENT: Signup,
    HEADER: SignUpHeader,
    AUTH: false,
    HAS_NAV: false,
  },
  '/login': {
    COMPONENT: Login,
    HEADER: HomeHeader,
    AUTH: false,
    HAS_NAV: false,
  },
  '/project/': {
    COMPONENT: ProejectHome,
    HEADER: HomeHeader,
    AUTH: true,
    HAS_NAV: true,
  },
  '/project/:id': {
    COMPONENT: Project,
    HEADER: HomeHeader,
    AUTH: true,
    HAS_NAV: true,
  },
  '/project/:id/task/:id': {
    COMPONENT: Task,
    HEADER: HomeHeader,
    AUTH: true,
    HAS_NAV: true,
  },
  '/project/:id/settings/*': {
    COMPONENT: Settings,
    HEADER: HomeHeader,
    AUTH: true,
    HAS_NAV: true,
  },
  '/myTicket/:userId': {
    COMPONENT: MyTicketPage,
    HEADER: HomeHeader,
    AUTH: true,
    HAS_NAV: true,
  },
});
