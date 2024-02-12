import '../styles/style.css';
import { exerciseRouteTree } from './exercise/routes';
import { aboutRoute, roadmapRoute, rootIndexRoute } from './root';
import { rootRoute } from './root/root';

export const routeTree = rootRoute.addChildren([
	rootIndexRoute,
	aboutRoute,
	roadmapRoute,
	exerciseRouteTree,
]);
export { rootRoute };
