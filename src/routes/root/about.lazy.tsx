import { createLazyRoute } from '@tanstack/react-router';

export const Route = createLazyRoute('/about')({
	component: About,
});

function About() {
	return (
		<>
			<h1 className="p-2">Hello from About!</h1>
		</>
	);
}
