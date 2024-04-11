import { createLazyRoute } from '@tanstack/react-router';

export const Route = createLazyRoute('/')({
	component: Index,
});

function Index() {
	return (
		<>
			<h1>Welcome to Fitness Manager</h1>
			<section>
				<p>Document your fitness journey here.</p>
				<p>You can:</p>
				<ul>
					<li>
						Create{' '}
						<strong>
							<em>Workout Templates</em>
						</strong>
					</li>
					<li>
						Create{' '}
						<strong>
							<em>Exercises</em>
						</strong>
					</li>
					<li>
						Add{' '}
						<strong>
							<em>Exercises</em>
						</strong>{' '}
						to{' '}
						<strong>
							<em>Workout Templates</em>
						</strong>
					</li>
					<li>
						Create{' '}
						<strong>
							<em>Workout Instances</em>
						</strong>{' '}
						from{' '}
						<strong>
							<em>Workout Templates</em>
						</strong>
					</li>
					<li>Fill out the template during/after the work out</li>
					<li>Add/remove exercises in a workout</li>
					<li>Adjust sets/weight/reps</li>
					<li>View workout metrics</li>
				</ul>
			</section>
		</>
	);
}
