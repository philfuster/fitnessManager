import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';

export const aboutRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/about',
}).lazy(() => import('./about.lazy').then((d) => d.Route));
