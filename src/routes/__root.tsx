import { Outlet, createRootRoute } from '@tanstack/react-router';
import React from 'react';

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
			<div>
				<h1>I am the root route. Roar</h1>
			</div>
			<Outlet />
		</>
	);
}
