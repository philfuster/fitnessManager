import { createLazyRoute } from '@tanstack/react-router';

export const Route = createLazyRoute('/')({
	component: Index,
});

function Index() {
	return (
		<>
			<h1>Welcome to Fitness Manager</h1>
			<ContentWrapper>
				<p>This application is meant for tracking your fitness journey.</p>
				<p>You can:</p>
				<ul>
					<li>
						Create <em>Workout Templates</em>
					</li>
					<li>
						Create <em>Exercises</em>
					</li>
					<li>Add Exercises to Workout Templates</li>
					<li>Create Workout Instances from Workout Templates</li>
					<li>Fill out the template during/after the work out</li>
					<li>Add/remove exercises in a workout</li>
					<li>Adjust sets/weight/reps</li>
					<li>View workout metrics</li>
				</ul>
			</ContentWrapper>
		</>
	);
}
