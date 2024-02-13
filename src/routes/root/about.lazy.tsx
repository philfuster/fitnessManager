import { createLazyRoute } from '@tanstack/react-router';

export const Route = createLazyRoute('/about')({
	component: About,
});

function About() {
	return (
		<>
			<h1>About</h1>
		</>
	);
}
