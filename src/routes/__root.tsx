import { Link, Outlet, createRootRoute, createRoute } from '@tanstack/react-router';
import React, { Suspense } from 'react';
import { exerciseRouteTree } from './exercise';

// #region create routes
export const rootRoute = createRootRoute({
	component: RootComponent,
});

const aboutRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/about',
}).lazy(() => import('./root/about.lazy').then((d) => d.Route));

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
}).lazy(() => import('./root/index.lazy').then((d) => d.Route));

export const routeTree = rootRoute.addChildren([aboutRoute, indexRoute, exerciseRouteTree]);
// #endregion

const TanStackRouterDevtools = getTanStackRouterDevTools();

export function RootComponent() {
	return (
		<>
			<div id="page">
				<header id="header">
					<Link to="/" className="[&.active]:font-bold">
						Home
					</Link>{' '}
					<Link to="/about" className="[&.active]:font-bold">
						About
					</Link>{' '}
					<Link to="/exercise" className="[&.active]:font-bold">
						Exercise
					</Link>
				</header>
				<hr />
				<Outlet />
			</div>
			<Suspense>
				<TanStackRouterDevtools position="bottom-right" />
			</Suspense>
		</>
	);
}

/**
 * Lazy load the router devtools in development mode.
 */
function getTanStackRouterDevTools() {
	return import.meta.env.MODE === 'production'
		? () => null // render nothing in production
		: React.lazy(() =>
				import('@tanstack/router-devtools').then((res) => ({
					default: res.TanStackRouterDevtools,
				})),
		  );
}
