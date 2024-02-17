import '../styles/style.css';
import { exerciseRouteTree,exerciseCreateRoute } from './exercise/routes';
import { aboutRoute, roadmapRoute, rootIndexRoute } from './root';
import { rootRoute } from './root/__root';

export const routeTree = rootRoute.addChildren([
	rootIndexRoute,
	aboutRoute,
	roadmapRoute,
  exerciseCreateRoute,
	exerciseRouteTree,
]);
export { rootRoute };
