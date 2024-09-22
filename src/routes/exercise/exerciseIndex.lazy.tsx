import { Link, createLazyRoute } from '@tanstack/react-router';

export const Route = createLazyRoute('/exercise')({
	component: Index,
});

function Index() {
	return (
		<>
			<h1>Exercises</h1>
			<p>
				An <em>exercise</em>, is the training of the body to improve its function and enhance its
				fitness. In Fitness Manager, you can create and manage exercises that you can then
				incorporate in <em>workouts</em> (a group of exercises or multiple exercises performed in
				one training session).{/* TODO: Add a link here to the Workouts page. */}
			</p>
			<ul>
				<li>Push Ups</li>
				<li>Sit Ups</li>
				<li>Lunges</li>
				<li>Squats</li>
			</ul>
			<Link to="/exercise/create">Create an Exercise</Link>
		</>
	);
}
