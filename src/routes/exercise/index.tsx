import { createRoute } from '@tanstack/react-router';
import { rootRoute } from '../__root';

const exerciseRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: 'exercise',
});

const exerciseIndexRoute = createRoute({
	getParentRoute: () => exerciseRoute,
	path: '/',
}).lazy(() => import('./exerciseIndex.lazy').then((d) => d.Route));

export const exerciseRouteTree = exerciseRoute.addChildren([exerciseIndexRoute]);
