import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import React from 'react';
import { Suspense } from 'react';

export const rootRoute = createRootRoute({
	component: RootComponent,
});

const TanStackRouterDevtools = getTanStackRouterDevTools();

export function RootComponent() {
	return (
		<>
			<div className="layout-grid">
				<header>
					<Link to="/">Home</Link>
					<Link to="/exercise">Exercise</Link>
					<Link to="/about">About</Link>
					<Link to="/roadmap">Roadmap</Link>
				</header>
				<hr />
				<main>
					<Outlet />
				</main>
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
