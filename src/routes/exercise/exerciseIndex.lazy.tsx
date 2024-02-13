import { Link, createLazyRoute } from '@tanstack/react-router';

export const Route = createLazyRoute('/exercise')({
	component: Index,
});

function Index() {
	return (
		<div>
			<h1>Exercises!</h1>
			<ul>
				<li>Push Ups</li>
				<li>Sit Ups</li>
				<li>Lunges</li>
				<li>Squats</li>
			</ul>
			<Link>Create an Exercise</Link>
		</div>
	);
}
