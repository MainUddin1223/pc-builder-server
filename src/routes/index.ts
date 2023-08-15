import express from 'express';
import config from '../config';
import componentsRouter from '../modules/components/components.route';
const router = express.Router();
const defaultRoutes = [
  {
    path: '/components',
    route: componentsRouter.componentsRouter,
  },
];
defaultRoutes.forEach(route => {
  const apis = route.route.stack.map(path => {
    return { path: path.route.path, methods: path.route.methods };
  });
  apis.map(api => {
    console.log([
      api.methods,
      { route: `${config.api_route}${route.path}${api.path}` },
    ]);
  });
  router.use(route.path, route.route);
});

export default router;
