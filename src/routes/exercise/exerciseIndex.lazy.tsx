import { Link, createLazyRoute } from '@tanstack/react-router';

export const Route = createLazyRoute('/exercise')({
	component: Index,
});

function Index() {
	return (
		<div className="p-2">
			<h3>Exercises!</h3>
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
