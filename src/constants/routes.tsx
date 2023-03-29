import { Home, Signup, Login, Task, Project, User } from 'pages';
import { RouteMap } from 'types';

export const ROUTE_MAP: RouteMap = Object.freeze({
  '/': {
    COMPONENT: <Home />,
    AUTH: false,
  },
  '/signup': {
    COMPONENT: <Signup />,
    AUTH: false,
  },
  '/login': {
    COMPONENT: <Login />,
    AUTH: false,
  },
  '/project/:id': {
    COMPONENT: <Project />,
    AUTH: true,
  },
  '/task/:id': {
    COMPONENT: <Task />,
    AUTH: true,
  },
  '/user': {
    COMPONENT: <User />,
    AUTH: true,
  },
});
