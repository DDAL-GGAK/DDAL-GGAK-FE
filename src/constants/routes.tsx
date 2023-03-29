import { Home, Signup, Login, Task, Project, User } from 'pages';

export const routeMap = Object.freeze({
  '/': <Home />,
  '/signup': <Signup />,
  '/login': <Login />,
  '/project/:id': <Project />,
  '/task/:id': <Task />,
  '/user': <User />,
});
