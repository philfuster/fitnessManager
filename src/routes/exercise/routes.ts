import { createRoute } from '@tanstack/react-router';
import { rootRoute } from '../routeTree';
import { CreateExercise } from './exerciseCreate';

const exerciseRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: 'exercise',
});

const exerciseIndexRoute = createRoute({
	getParentRoute: () => exerciseRoute,
	path: '/',
}).lazy(() => import('./exerciseIndex.lazy').then((d) => d.Route));

export const exerciseCreateRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: 'exercise/create',
	component: CreateExercise,
});

export const exerciseRouteTree = exerciseRoute.addChildren([exerciseIndexRoute]);
