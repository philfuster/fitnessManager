import {
	Link,
	Outlet,
	createRootRoute,
	createRoute,
	lazyRouteComponent,
} from '@tanstack/react-router';
import React, { Suspense } from 'react';

export const rootRoute = createRootRoute({
	component: RootComponent,
});

const aboutRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/about',
}).lazy(() => import('./about.lazy').then((d) => d.Route));

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
}).lazy(() => import('./index.lazy').then((d) => d.Route));

export const routeTree = rootRoute.addChildren([aboutRoute, indexRoute]);

const TanStackRouterDevtools =
	import.meta.env.MODE === 'production'
		? () => null // render nothing in production
		: React.lazy(() =>
				import('@tanstack/router-devtools').then((res) => ({
					default: res.TanStackRouterDevtools,
				})),
		  );

export function RootComponent() {
	return (
		<>
			<div className="p-2 flex gap-2">
				<Link to="/" className="[&.active]:font-bold">
					Home
				</Link>{' '}
				<Link to="/about" className="[&.active]:font-bold">
					About
				</Link>
			</div>
			<hr />
			<Outlet />
			<Suspense>
				<TanStackRouterDevtools />
			</Suspense>
		</>
	);
}
