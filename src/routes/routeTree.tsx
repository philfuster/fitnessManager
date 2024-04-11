import '../styles/style.css';
import { exerciseRouteTree, exerciseCreateRoute } from './exercise/routes';
import { aboutRoute, roadmapRoute, rootIndexRoute } from './root';
import { rootRoute } from './root/__root';
import { testRoute } from './root/test';

export const routeTree = rootRoute.addChildren([
	rootIndexRoute,
	aboutRoute,
	roadmapRoute,
	exerciseCreateRoute,
	exerciseRouteTree,
	testRoute,
]);
export { rootRoute };
