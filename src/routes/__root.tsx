import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import React, { Suspense } from 'react';

export const Route = createRootRoute({
	component: RootComponent,
});

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
