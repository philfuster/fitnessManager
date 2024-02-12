import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';

export const rootIndexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
}).lazy(() => import('./rootIndex.lazy').then((d) => d.Route));
