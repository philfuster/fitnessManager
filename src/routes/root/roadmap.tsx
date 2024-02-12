import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';

export const roadmapRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/roadmap',
}).lazy(() => import('./roadmap.lazy').then((d) => d.Route));
